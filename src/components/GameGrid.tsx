import useGames from "@/hooks/useGames";
import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSkeletton from "./GameCardSkeletton";
import GameCardContainer from "./GameCardContainer";
import type { IGameQuery } from "@/App";

interface Props {
  gameQuery: IGameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const { data, error, isLoading } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <>
      {error && <Text>{error}</Text>}

      <SimpleGrid
        columns={{ base: 1, sm: 2, md: 3, lg: 3, xl: 3 }}
        padding={{ base: "16px", md: "20px" }}
        gap={{ base: 4, md: 6 }}
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameCardSkeletton />
            </GameCardContainer>
          ))}

        {data.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCard game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
