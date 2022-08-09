// Header.js
//  simple header showing company logo at top of page
// by: Mika Senghaas
import React from 'react';
import {
  Flex,
  Button,
  Image,
  Heading,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
} from '@chakra-ui/react';

import { Link } from 'react-router-dom';

// icons
import { FaAtom, FaChartBar, FaRegUser } from 'react-icons/fa';

const MenuItem = ({ item }) => {
  const icons = {
    leaderboard: <FaChartBar />,
    model: <FaAtom />
  };

  return (
    <Popover trigger="hover">
      <PopoverTrigger>
        <Link to={item} >
          <Button size='xs' mr='5px'>
            {icons[item]}
          </Button>
        </Link>
      </PopoverTrigger>
      <PopoverContent w="100%">
        <PopoverBody fontSize="11px">
          {item[0].toUpperCase() + item.substring(1)}
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

const UserIcon = () => {
  return (
    <Button
      w="35px"
      h="35px"
      variant="solid"
    >
      <FaRegUser />
    </Button>
  );
};

const Header = () => {
  return (
    <Flex
      w="100%"
      maxWidth="1000px"
      h="50px"
      mb="3rem"
      alignItems="center"
      justifyContent="space-between"
    >
      <Flex alignItems="left" direction={{ sm: 'column', md: 'row' }}>
        <Link to="/">
        <Flex alignItems="center" mr="2rem">
            <Image
              src="/logo192.png"
              alt="namegen-icon"
              w="20px"
              h="20px"
              mr="5px"
            />
            <Heading fontSize="20px">:namegen</Heading>
        </Flex>
          </Link>
        <Flex alignItems="center">
          <MenuItem item="leaderboard" />
          <MenuItem item="model"/>
        </Flex>
      </Flex>
      <UserIcon />
    </Flex>
  );
};

export default Header;
