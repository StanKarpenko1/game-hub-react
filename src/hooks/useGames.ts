
import type { IGameQuery } from "@/App";
import useData from "./useDatas";
import type { IGenre } from "./useGenres";


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

const useGames = (
  gameQuery: IGameQuery
) => 
  useData<IGame>('/games', {params: {
    genres: gameQuery.genre?.id,
    parent_platforms: gameQuery.platform?.id,
    ordering: gameQuery.sortOrder,
  
  }}, [gameQuery]); 

export default useGames;
