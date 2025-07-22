import { Input, InputGroup } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

interface Props {
  onSearch: (searchText: string) => void;
}

const SearchInput = ({ onSearch}: Props) => {

  const ref = useRef<HTMLInputElement>(null);

  return (
    <form style={{ width: "100%"}} onSubmit={event => { 
      event.preventDefault(); 
      if (ref.current) onSearch(ref.current.value);
    }}>
      <InputGroup
        width="100%"
        // maxWidth="1200px"
        margin="auto"
        startElement={<BsSearch />}
      >
        <Input ref={ref} borderRadius={20} placeholder="Search games..." />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
