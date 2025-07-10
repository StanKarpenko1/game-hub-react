import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import { GenreList } from "./components/GenreList";
// import './App.css'

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}

      // templateColumns={{
      //   base: '1fr',
      //   lg: '250px 1fr'
      // }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>

      <GridItem area="aside" padding="10px">
        <GenreList />
      </GridItem>
      <GridItem area="main" padding="10px">
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
