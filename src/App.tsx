import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import { GenreList } from "./components/GenreList";
import { useState } from "react";
import type { IGenre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import type { IPlatform } from "./hooks/useGames";

export interface IGameQuery {
  genre: IGenre | null;
  platform: IPlatform | null;
}

function App() {

  const [gameQuery, setGameQuery] = useState<IGameQuery>({} as IGameQuery);


  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}

      templateColumns={{ 
        base: '1fr',
        lg: '250px 1fr'
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>

      <GridItem area="aside" paddingX={5}>
        <GenreList selectedGenre={gameQuery.genre} onSelectGenre={(genre) => setGameQuery({...gameQuery, genre})} />
      </GridItem>
      <GridItem area="main" padding="10px">
        <PlatformSelector selectedPlatform={gameQuery.platform} onSelectPlatform={(platform) => setGameQuery({...gameQuery, platform})}/>
        <GameGrid 
          gameQuery={gameQuery}
          />

      </GridItem>
    </Grid>
  );
}

export default App;
