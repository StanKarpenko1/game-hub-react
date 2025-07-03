import type { IGame } from "@/hooks/useGames";
import { Card, Image, Text } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";

interface Props {
  game: IGame;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card.Root borderRadius={10} overflow="hidden">
      <Image src={game.background_image} />
      <Card.Body>
        <Card.Header fontSize="2xl">{game.name}</Card.Header>
        <PlatformIconList platforms={game.parent_platforms.map(p => p.platform)} />
      </Card.Body>
    </Card.Root>
  );
};

export default GameCard;
