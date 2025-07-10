import { Card, Skeleton, SkeletonText } from "@chakra-ui/react"

const GameCardSkeletton = () => {
  return (
    <Card.Root>
        <Skeleton height="200px" />
        <Card.Body> 
            <SkeletonText />
        </Card.Body>
    </Card.Root>
  )
}

export default GameCardSkeletton