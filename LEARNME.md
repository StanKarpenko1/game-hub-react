# Stage 1: Setting Up the Project

```bash
npm create vite@latest
# → Choose project name
# → Select "React"
# → Select "TypeScript"

cd my-app
npm install

# Create .gitignore
echo "node_modules\ndist\n.env\n.DS_Store" > .gitignore

# Initialize Git
git init
git add .
git commit -m "Initial commit"

npm run dev
```

# Stage 2: Installing Chakra UI

## ✅ Install Chakra UI

```bash
npm i @chakra-ui/react @emotion/react
```

## ⚡ Add Chakra CLI Snippets

Snippets are pre-built components to speed up development.

```bash
npx @chakra-ui/cli snippet add
```

## ⚙️ Update `tsconfig.json`

Added path alias to support `@/` imports:

```json
"compilerOptions": {
  "paths": {
    "@/*": ["./src/*"]
  }
}
```

## 🧠 Provider Setup (`main.tsx`)

We use `ChakraProvider` directly — no custom wrapper:

## in main.tsx

```tsx
import { Provider } from "@/components/ui/provider";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider>
      <App />
    </Provider>
  </React.StrictMode>
);
```

## 🎨 Tried Chakra in `App.tsx`

```tsx
import { Button, HStack } from "@chakra-ui/react";

function App() {
  return (
    <HStack>
      <Button>Click me</Button>
      <Button>Click me</Button>
    </HStack>
  );
}

export default App;
```

## 🧹 Cleaned Up Default CSS

Removed all default Vite styles from `src/index.css` to fully adopt Chakra theming.

# Stage 3: Create components

## Created component NavBar
```tsx
import { HStack, Image, Text } from '@chakra-ui/react'
import logo from '../assets/logo.webp'

const NavBar = () => {
  return (
    <HStack>
        <Image src={logo} boxSize={'60px'} />
        <Text>NavBar</Text>
    </HStack>
  )
}

export default NavBar
```


# Stage 4: added themes 

  ```bash
  npx @chakra-ui/cli snippet add color-mode 
  ```

  ## Updated main.tsx to set dark mode as default:
  ```tsx
  import { Provider } from "@/components/ui/provider";
  import React from "react";
  import ReactDOM from "react-dom/client";
  import App from "./App";

  ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
      <Provider defaultTheme="dark">
        <App />
      </Provider>
    </React.StrictMode>
  );
  ```

## Create themes.ts in src
```ts
import { createSystem, defaultConfig } from "@chakra-ui/react";

const customConfig = {
  ...defaultConfig,
  theme: {
    tokens: {
      colors: {
        gray: {
          50: { value: '#f9f9f9' },
          100: { value: '#ededed' },
          200: { value: '#d3d3d3' },
          300: { value: '#b3b3b3' },
          400: { value: '#a0a0a0' },
          500: { value: '#898989' },
          600: { value: '#6c6c6c' },
          700: { value: '#202020' },
          800: { value: '#121212' },
          900: { value: '#111' }
        }
      }
    }
  }
};

export const system = createSystem(customConfig);
```

# Stage 5: Color mode switch
## Add Switch Component
```bash
npx @chakra-ui/cli snippet add switch
```

## modern updates: useColorMode, colorPalette, file - ColorModeSwitch

# Stage 6: install axios
  ## Use an api key from rawg.io
  ## install axios 
    ```bash
    npm i axios
    ```
  ## Now need to create an axios instance with customer configuration
    - there we need to included copied api key from rawg.io
    - create folder services in src
    - inside - create file api-client.ts
    - set up file

# Stage 7: create component GameGrid
## in components folder create new component GameGrid.tsx

# Stage 8: custom hook to fetch games

- in src create folder 'hooks'
- create file useGames.ts
- Move game fetching logic from GameGrid component to custom hook
- Move Game and FetchGamesResponse interfaces to the hook
- Add AbortController for cleanup when component unmounts
- Import CanceledError from axios to handle request cancellation
- Return games array and error state from hook

# Stage 9: Create GameCard component
## create file 
  - in components creting file GameCard.tsx
  - pass Game object as a prompt to the component
## passing props
  - export Games interfase from hooks > useGames.ts (custom hook)

## creating basic skeletton of the file GameCard.tsx:

   ```tsx
    import type { Game } from "@/hooks/useGames";
    import { Card, Image } from "@chakra-ui/react";

    interface Props {
      game: Game;
    }

    const GameCard = ({ game }: Props) => {
      return (
        <Card.Root>
          <Image src={game.background_image} />
            <Card.Body>
                <Card.Header>{game.name}</Card.Header>
            </Card.Body>
        </Card.Root>
      );
    };

    export default GameCard;

  ```

## going back to GameGrid.tsx componet 
- replace ul with SimpleGrid
```tsx
  const GameGrid = () => {
        
  const { games, error } = useGames();

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={3} gap={10}>
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
};
```

### beautify GameCard.tsx
- adding roundness :  <Card.Root borderRadius={10} overflow='hidden'> - hidden to apply radius for upper corners
- change size of the headings: <Card.Header fontSize='2xl'>{game.name}</Card.Header>
- now handle the number of columns for smaller devices:
  in GameGrid: <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5}} gap={10}>

# Stage 10: Display icons
## install icons: npm i react-icons

## new component PlatformIconList.tsx
- from gameCard component we are moving logic
  ```tsx
  {game.parent_platforms.map(({platform}) => (
            <Text>{platform.name}</Text>
          ))}

  ```
to PlatformIconList.tsx
## moving to GameCard and usig the created component:
```tsx
  <Card.Body>
        <Card.Header fontSize="2xl">{game.name}</Card.Header>
        <PlatformIconList platforms={game.parent_platforms.map(p => p.platform)} />
      </Card.Body>
```

## replace platform names with icons
- back to the PlatformList component, import icons
- define map for all of the platforms
- put everything inside HStack component to represent icons horizontally: <HStack marginY={1}>

# Stage 11: critic score component
 - add metacritics to IGame and start a new component CriticScore.tsx
 - add  <CriticScore score={game.metacritic} /> to GameCard.tsx

# Stage 14: optimize images
- introduce file my-game-hub/src/services/image-url.ts in service folder for handling cropped url
- write a utility function to crop image getCroppedImageUrl

# Stage 15(folowing vid number from here): handle loading state
  ## handle Loading logic
    - in useGames : addding   const [isLoading, setLoading] = useState(false);
    - handlre setLoading in useGames hook
  ## handle loading component
    - create component GameCardSkeletton.tsx
    - this will serve as a placeholder for card components
    - handle skeletton of the component
    - got to GameGrid: destructure isLoading and add skeleton logic
  ## remove duplicated styles
  - create a component that would be a container for all cards: GameCardContainer.tsx
  - now we have to pass GameCard (or other) as a child for this component
  - in GameGrid.tsx :
  ```tsx
    <GameCardContainer>
      <GameCardSkeletton key={skeleton} />
    </GameCardContainer>
  ```
  
  
# Stage 17. Fetching genres
- adding component GenreList.tsx
- creating custom hook, similar to what we use for fetching games. in hooks -> useGenres.ts
- after we done in GenreList component -> go to App.tsx and replace 'Aside' (placeholder) with GenreList component 
   

# Stage 18. Create generic data fetching hook.
- move two identical hooks to one generic. create useData.ts
- after creating a generic hook, where we passing endpoint as a string - now we have to remove it,
  so our components to know nothing about rndpoints. go to useGenres

# Stage 19. Display the genres
- adding image_background to IGenre
- handle in GenreList.tsx
- in App.tsx added <GridItem area="aside" paddingX={5}> and   
    ```tsx
        templateColumns={{
                base: '1fr',
                lg: '250px 1fr'
              }}
    ```
- go to gameCardContainer and remove the fixed width. 

# Stage 19. Show a spinner
- in GenreList add  
  const { data, isLoading } = useData<IGenre>("/genres");

  if (isLoading) return <Spinner />;

# Stage 21. Filter games by genre
  ## work in GenreList:  <Button fontSize='ld' variant="ghost">{genre.name}</Button>
  ## now we need to SHARE STATE between two compomemts - lift it up to the closest parent (App.tsx)
    - go to App.tsx:   const [selectedGenre, setSelectedGenre] = useState<IGenre | null>(null)
    - in GenreList:  <Button onClick={() => onSelectGenre(genre)} fontSize='ld' variant="ghost">{genre.name}</Button>
    - in App.tsx:  <GenreList onSelectGenre={(genre) => setSelectedGenre(genre)} />
    - in GameGrid: 
      ```tsx
          interface Props {
          selectedGenre: IGenre | null;
        }
    ```tsx
  - modifying useData hook: const useData = <T>(endpoint: string, requestConfig?: AxiosRequestConfig) => {
  - in useGames hook : const useGames = (selectedGenre: IGenre | null) => useData<IGame>('/games', {params: {genres: selectedGenre?.id}});
  - in useDatas:   .get<IFetchResponse<T>>(endpoint, { signal: controller.signal, ...requestConfig })
  - in useData we need to pass real dependencies in order page to handle re-render genres correctly:
      const useData = <T>(endpoint: string, requestConfig?: AxiosRequestConfig, deps?: any[]) => {
        /////   }, deps ? [...deps] : [] );
  - in useGames: const useGames = (selectedGenre: IGenre | null) => useData<IGame>('/games', {params: {genres: selectedGenre?.id}}, [selectedGenre?.id]); 
  - goint back to App component:         <GameGrid selectedGenre={selectedGenre}/>

# Stage 22. Highlight the selected genre
 - in GenreList Props:   selectedGenre?: IGenre | null; /// Button fontWeight={genre.id === selectedGenre?.id ? 'bold' : 'normal'}
 -  in App

# Stage 23. Building platform selector
  ## add PlatformSelector component
  ## add a hook to handle platform selsection
   - usePlatforms
   - go back to PlatformSelector.tsx and handle dynamic platform assignment

# Stage 24. Filtering Games by platform
 - 

# Stage 25. Refactoring
- pack created variables into an object - query object pattern
- in App.tsx - interface IGameQuery
- then go to GAmeGrid and do the same


# Stage 26. Build sort selector
- building game sort component. Paste the whole return statement from the PlatformSelector component

# Stage 27. Sorting games
- in SortSelector create array sortOrder for sorting values
 ## handling array map and adding onClick to Menu.Item
    - in order to do that we should notify consumer component
    - creating Prop in SortSelector with onSelectedSortOrder
    
  ## go to the App component and add sort order to the query object
   - adding sortOrder?: string; to IGameQuery
   - <SortSelector onSelectedSortOrder={(sortOrder) => setGameQuery({...gameQuery, sortOrder})}/>
   - in the next render we need to pass a new game wuery object to the GameGrid.tsx 
   - going to useGame hook, adding to param: adding ordering: gameQuery.sortOrder,
   - fix the app broken is sort by name, go to my-game-hub/src/services/image-url.ts and add  if (!url) return '';
   - one thing is missing - current sort order
   - back to app componet - 