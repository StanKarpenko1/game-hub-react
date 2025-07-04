import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  let color = score > 75 ? "green" : score > 60 ? "yellow" : "red";

  return (
    <Badge
      bg="gray.100"
      _dark={{ bg: "gray.700" }}
      color={
        color === "green"
          ? "green.500"
          : color === "yellow"
          ? "yellow.500"
          : "red.500"
      }
      fontSize="14px"
      px={2}
      borderRadius="4px"
    >
      {score}
    </Badge>
  );
};

export default CriticScore;
