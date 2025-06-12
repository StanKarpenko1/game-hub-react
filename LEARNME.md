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
