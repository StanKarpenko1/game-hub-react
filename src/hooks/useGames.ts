
import type { IGameQuery } from "@/App";
import useData from "./useDatas";


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
    search: gameQuery.searchText,
  
  }}, [gameQuery]); 

export default useGames;
