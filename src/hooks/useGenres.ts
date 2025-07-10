import apiClient from "@/services/api-client";
import { CanceledError } from "axios";
import { useEffect, useState } from "react";

interface IGenre {
    id: number;
    name: string
}

interface FetchGenresResponse {
    count: number;
    results: IGenre[];
}

const useGenres = () => {
  const [genres, setGenres] = useState<IGenre[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  // useEffect hook to send fetch request to the backend
  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);

    apiClient
      .get<FetchGenresResponse>("/genres", { signal: controller.signal })
      .then((res) => {
        setGenres(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    return () => controller.abort();
  }, []);

  return { genres, error, isLoading };
};

export default useGenres;
