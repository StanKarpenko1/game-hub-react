import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from "@chakra-ui/react"
import { Provider } from "@/components/ui/provider"
import { system } from './theme'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider value={system}>
      <Provider defaultTheme="dark">
        <App />
      </Provider>
    </ChakraProvider>
  </React.StrictMode>,
)