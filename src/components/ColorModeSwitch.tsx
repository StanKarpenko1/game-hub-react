import { HStack, Text } from "@chakra-ui/react";
import { Switch } from "@/components/ui/switch";
import { useColorMode } from "@/components/ui/color-mode";

const ColorModeSwitch = () => {
    const { colorMode, toggleColorMode } = useColorMode();

  return (
    <HStack >
      <Switch 
        colorPalette='green'
        checked={colorMode === 'dark'}
        onCheckedChange={toggleColorMode}
      />
      <Text>Dark Mode</Text>
    </HStack>
  );
};

export default ColorModeSwitch;
