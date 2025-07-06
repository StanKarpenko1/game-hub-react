import apiClient from "@/services/api-client";
import { CanceledError } from "axios";
import { useEffect, useState } from "react";


export interface IPlatform {
  id: number;
  name: string;
  slug: string;
}

export interface IGame {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: IPlatform }[];
  metacritic: number;

}

interface FetchGamesResponse {
  count: number;
  results: IGame[];
}

const useGames = () => {
  const [games, setGames] = useState<IGame[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  // useEffect hook to send fetch request to the backend
  useEffect(() => {

    const controller = new AbortController();
    
    setLoading(true);

    apiClient
      .get<FetchGamesResponse>("/games", {signal: controller.signal})
      .then((res) => {
        setGames(res.data.results)
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return
        setError(err.message)
        setLoading(false);
      })

      return () => controller.abort()
  }, [] );

  return { games, error, isLoading }; 

};

export default useGames;
