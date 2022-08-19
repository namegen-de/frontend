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
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
} from '@chakra-ui/react';
import { Link, useNavigate } from 'react-router-dom';
import httpClient from '../httpClient';

// icons
import { FaAtom, FaChartBar } from 'react-icons/fa';
import { AiFillCaretDown } from 'react-icons/ai';

const CustomMenuItem = ({ item }) => {
  const icons = {
    leaderboard: <FaChartBar />,
    model: <FaAtom />,
  };

  return (
    <Popover trigger="hover">
      <PopoverTrigger>
        <Link to={item}>
          <Button size="xs" mr="5px">
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

const UserMenu = ({ state, setState }) => {
  const navigate = useNavigate();

  const logout = async () => {
    try {
      const res = await httpClient.post('/logout');

      if (res.status === 200) {
        localStorage.removeItem('@me')
        setState(prev => ({
          ...prev,
          user: null
        }))
        window.location.reload()
      }
    } catch (err) {
      console.log('could not logout')
    }
  };

  if (state.user) {
    return (
      <Menu>
        <MenuButton as={Button} rightIcon={<AiFillCaretDown />} size="xs">
          Hej, {state.user.username}
        </MenuButton>
        <MenuList>
          <MenuItem fontSize="12px" onClick={() => navigate('/liked-names')}>
            Liked Names
          </MenuItem>
          <MenuItem fontSize="12px" onClick={() => navigate('/model')}>
            Model
          </MenuItem>
          <MenuItem fontSize="12px" onClick={() => navigate('/leaderboard')}>
            Leaderboard
          </MenuItem>
          <MenuDivider />
          <MenuItem fontSize="12px" onClick={() => logout()}>
            Logout
          </MenuItem>
        </MenuList>
      </Menu>
    );
  } else {
    return (
      <Menu>
        <MenuButton
          as={Button}
          rightIcon={<AiFillCaretDown />}
          size="xs"
          variant="ghost"
        >
          Register/ Login
        </MenuButton>
        <MenuList>
          <MenuItem fontSize="12px" onClick={() => navigate('/register')}>
            Register
          </MenuItem>
          <MenuDivider />
          <MenuItem fontSize="12px" onClick={() => navigate('/login')}>
            Log In
          </MenuItem>
        </MenuList>
      </Menu>
    );
  }
};

const Header = ({ state, setState }) => {
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
          <CustomMenuItem item="leaderboard" />
          <CustomMenuItem item="model" />
        </Flex>
      </Flex>
      <UserMenu state={state} setState={setState} />
    </Flex>
  );
};

export default Header;
