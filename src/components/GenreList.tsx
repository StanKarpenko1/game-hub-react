import useData from "@/hooks/useDatas";
import { type IGenre } from "@/hooks/useGenres";
import getCroppedImageUrl from "@/services/image-url";
import { ListItem, List, HStack, Image, Text } from "@chakra-ui/react";

export const GenreList = () => {
  const { data } = useData<IGenre>("/genres");
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
