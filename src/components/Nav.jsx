import DropdownIcon from "@/svg/DropdownIcon";
import HomeIcon from "@/svg/HomeIcon";
import LocationIcon from "@/svg/LocationIcon";
import NotificationIcon from "@/svg/NotificationIcon";
import PlusIcon from "@/svg/PlusIcon";
import SettingsIcon from "@/svg/SettingsIcon";
import UserIcon from "@/svg/UserIcon";
import Users2Icon from "@/svg/Users2Icon";
import WalletIcon from "@/svg/WalletIcon";
import { Box, Text } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import Link from "next/link";
import { Button } from "@chakra-ui/react";
import DrawerExample from "./Drawer";
import CalendarIcon from "@/svg/CalendarIcon";
import Calendar2Icon from "@/svg/Calendar2Icon";

const Nav = () => {
  return (
    <>
      <Box
        bg="black"
        h="82px"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        py="0"
        px="35"
      >
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Image objectFit="cover" src="inscentive 1.png" alt="veerge image" />
          {/* <Text fontSize='14px' color='white'>
            {" "}
            For Mainstone{" "}
          </Text> */}
        </Box>
        <Box display="flex" alignItems="center" justifyContent="end" gap={3}>
          <PlusIcon />
          <DrawerExample />
          <NotificationIcon />
          <UserIcon />
          <Text color="white">Ahmed Ali</Text>
          <DropdownIcon />
        </Box>
      </Box>
      <Box display="flex" h="67px" gap={13}>
        <Box display="flex" gap={5}>
          {" "}
          <Button colorScheme="black" variant="ghost">
            <HomeIcon />
            <Link href="#">Dashboard</Link>
          </Button>
        </Box>
        <Box display="flex" gap={5}>
          {" "}
          <Button colorScheme="black" variant="ghost">
            <LocationIcon />
            <Link href="#">Listings</Link>
          </Button>
        </Box>
        <Box display="flex">
          {" "}
          <Button colorScheme="black" variant="ghost">
            <Users2Icon />
            <Link href="#">Users</Link>
          </Button>{" "}
        </Box>
        <Box display="flex">
          {" "}
          <Button colorScheme="black" variant="ghost">
            <WalletIcon />
            <Link href="#">Account</Link>
          </Button>{" "}
        </Box>
        <Box display="flex">
          {" "}
          <Button colorScheme="black" variant="ghost">
            <Calendar2Icon />
            <Link href="#">Request</Link>
          </Button>{" "}
        </Box>
        <Box display="flex">
          {" "}
          <Button colorScheme="black" variant="ghost">
            <SettingsIcon />
            <Link href="#">Settings</Link>
          </Button>
        </Box>
      </Box>
    </>
  );
};
export default Nav;
