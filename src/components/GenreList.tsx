import useData from "@/hooks/useDatas";
import { type IGenre } from "@/hooks/useGenres";
import getCroppedImageUrl from "@/services/image-url";
import { ListItem, List, HStack, Image, Text, Spinner } from "@chakra-ui/react";

export const GenreList = () => {
  const { data, isLoading, error } = useData<IGenre>("/genres");


  if (error) return null;

  if (isLoading) return <Spinner />;

  return (
    <List.Root>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY='5px'>
          <HStack>
            <Image boxSize='32px' borderRadius={8} src={ getCroppedImageUrl(genre.image_background) } />
            <Text fontSize='ld'>{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List.Root>
  );
};
