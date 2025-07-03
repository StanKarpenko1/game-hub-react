import {
    FaWindows, 
    FaPlaystation, 
    FaXbox,
    FaApple,
    FaLinux,
    FaAndroid,
} from 'react-icons/fa';
import { MdPhoneIphone } from 'react-icons/md';
import { SiNintendo } from 'react-icons/si';
import { BsGlobe } from 'react-icons/bs';
import type { IPlatform } from "@/hooks/useGames";
import { HStack, Icon, Text } from "@chakra-ui/react";
import type { IconType } from 'react-icons';

interface Props {
  platforms: IPlatform[];
}

const PlatformIconList = ({ platforms }: Props) => {

    const iconMap: {[key: string]: IconType} = {
        pc: FaWindows,
        playstation: FaPlaystation,
        xbox: FaXbox,
        ios: MdPhoneIphone,
        mac: FaApple,
        linux: FaLinux,
        android: FaAndroid,
        nintendo: SiNintendo,
        web: BsGlobe,
    }

  return (
    <HStack marginY={1}>
      {platforms.map((platform ) => (
        <Icon as={iconMap[platform.slug]}  color='grey.500'/>

       
      ))}
    </HStack>
  );
};

export default PlatformIconList;
