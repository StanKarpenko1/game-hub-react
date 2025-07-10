import useData from "@/hooks/useDatas";
import { type IGenre } from "@/hooks/useGenres"

export const GenreList = () => {
    const {data} = useData<IGenre>('/genres'); 
  return (
    <ul>
        {data.map(genre => <li key={genre.id}>{genre.name}</li>)}
    </ul>
  )
}
 