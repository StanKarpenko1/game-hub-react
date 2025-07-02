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


