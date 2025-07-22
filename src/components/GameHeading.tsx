import type { IGameQuery } from "@/App"
import { Heading } from "@chakra-ui/react"

interface Props {
    gameQuery: IGameQuery
}


const GameHeading = ({gameQuery}: Props) => {

    const heading = `${gameQuery.platform?.name || ""} ${gameQuery.genre?.name || ""} Games`.trim()

  return (
    <Heading as={"h1"} fontSize='5xl'>
        {heading }
    </Heading>
  )
}

export default GameHeading