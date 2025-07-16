import { Button, Icon, Menu } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

const SortSelector = () => {
    return (
        <Menu.Root>
          <Menu.Trigger>
            <Button variant="outline" colorScheme="gray">
                Order by: Relevance
              {/* {selectedPlatform ? selectedPlatform.name : "Platforms"}  */}
              <Icon as={BsChevronDown} ml={2} />
            </Button>
          </Menu.Trigger>
          <Menu.Positioner>
            <Menu.Content>
                <Menu.Item value="relevance">Relevance</Menu.Item>
                <Menu.Item value="date-added">Date Added</Menu.Item>
                <Menu.Item value="name">Name</Menu.Item>
                <Menu.Item value="relise-date">Relise Date</Menu.Item>
                <Menu.Item value="popularity">Popularity</Menu.Item>
                <Menu.Item value="rating">Average Rating</Menu.Item>    
            </Menu.Content>
          </Menu.Positioner>
        </Menu.Root>
      );
}

export default SortSelector