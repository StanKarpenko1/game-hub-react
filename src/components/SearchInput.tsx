import { Input, InputGroup } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

const SearchInput = () => {
  return (
    <InputGroup
      width="100%"
      maxWidth="600px"
      margin="auto"
      startElement={<BsSearch />}
    >
      <Input borderRadius={20} placeholder="Search games..." />
    </InputGroup>
  );
};

export default SearchInput;
