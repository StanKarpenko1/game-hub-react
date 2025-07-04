import type { IGame } from "@/hooks/useGames";
import { Card, HStack, Image, VStack } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";

interface Props {
  game: IGame;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card.Root borderRadius={10} overflow="hidden">
      <Image src={game.background_image} />
      <Card.Body>
  <VStack align="start" minHeight="150px" justify="space-between">
    <Card.Header fontSize="2xl" textAlign="left">{game.name}</Card.Header>
    <HStack justifyContent="space-between" width="100%">
      <PlatformIconList platforms={game.parent_platforms.map(p => p.platform)} />
      <CriticScore score={game.metacritic} />
    </HStack>
  </VStack>
</Card.Body>
    </Card.Root>
  );
};

export default GameCard;
