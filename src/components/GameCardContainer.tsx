import { Box } from "@chakra-ui/react"

interface Props {
    children: React.ReactNode;
}

export const GameCardContainer = ({children}: Props) => {
  return (
    <Box 
      borderRadius={10} 
      overflow="hidden"
      width="100%"
      height="auto"
    >
        {children}
    </Box>
  )
}

export default GameCardContainer;
