
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
  selectedGenre: IGenre | null,
  selectedPlatform: IPlatform | null
) => 
  useData<IGame>('/games', {params: {
    genres: selectedGenre?.id,
    parent_platforms: selectedPlatform?.id,
  
  }}, [selectedGenre?.id, selectedPlatform?.id]); 

export default useGames;
