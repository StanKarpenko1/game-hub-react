import useData from "@/hooks/useDatas";
import { type IGenre } from "@/hooks/useGenres";
import getCroppedImageUrl from "@/services/image-url";
import { ListItem, List, HStack, Image, Text, Spinner, Button } from "@chakra-ui/react";

interface Props {
  onSelectGenre: (genre: IGenre) => void;
  selectedGenre?: IGenre | null;
}

export const GenreList = ({selectedGenre, onSelectGenre}: Props) => {
  const { data, isLoading, error } = useData<IGenre>("/genres");


  if (error) return null;

  if (isLoading) return <Spinner />; 

  return (
    <List.Root>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY='5px'>
          <HStack>
            <Image boxSize='32px' borderRadius={8} src={ getCroppedImageUrl(genre.image_background) } />
            <Button fontWeight={genre.id === selectedGenre?.id ? 'bold' : 'normal'} onClick={() => onSelectGenre(genre)} fontSize='ld' variant="ghost">{genre.name}</Button>
          </HStack>
        </ListItem>
      ))}
    </List.Root>
  );
};
