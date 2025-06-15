import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
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
      <GridItem area="nav" >
        <NavBar />
      </GridItem>

      <GridItem area="aside" bg="gold">
        Aside
      </GridItem>
      <GridItem area="main" bg="dodgerblue">
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
