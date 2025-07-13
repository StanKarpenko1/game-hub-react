import usePlatforms from "@/hooks/usePlatforms";
import { Button, Icon, Menu } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

const PlatformSelector = () => {
  const { data, error } = usePlatforms();

  if (error) return null;

  return (
    <Menu.Root>
      <Menu.Trigger>
        <Button variant="outline" colorScheme="gray">
          Platforms <Icon as={BsChevronDown} ml={2} />
        </Button>
      </Menu.Trigger>
      <Menu.Positioner>
        <Menu.Content>
          {data.map((platform) => (
            <Menu.Item key={platform.id} value={platform.slug}>
              {platform.name}
            </Menu.Item>    
          ))}
        </Menu.Content>
      </Menu.Positioner>
    </Menu.Root>
  );
};

export default PlatformSelector;
