import { Button, Icon, Menu } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
    onSelectedSortOrder: (sortOrder: string) => void;
    sortOrder: string;
}

const SortSelector = ({onSelectedSortOrder, sortOrder}: Props) => {

    const sortOrders = [
        { value: "relevance", label: "Relevance" },
        { value: "-added", label: "Date Added" },
        { value: "name", label: "Name" },
        { value: "-released", label: "Release Date" },
        { value: "-metacritic", label: "Popularity" },
        { value: "-rating", label: "Average Rating" }
    ];

    const currentSortOrder = sortOrders.find(order => order.value === sortOrder);

    return (
        <Menu.Root>
          <Menu.Trigger>
            <Button variant="outline" colorScheme="gray">
                Order by: { currentSortOrder ? currentSortOrder.label : "Select Order" } 
              {/* {selectedPlatform ? selectedPlatform.name : "Platforms"}  */}
              <Icon as={BsChevronDown} ml={2} />
            </Button>
          </Menu.Trigger>
          <Menu.Positioner>
            <Menu.Content>
                {sortOrders.map(order => 
                    <Menu.Item  onClick={() => onSelectedSortOrder(order.value)}  
                        key ={order.value} value={order.value}>
                            {order.label}
                    </Menu.Item> )}
                  
            </Menu.Content>
          </Menu.Positioner>
        </Menu.Root>
      );
}

export default SortSelector