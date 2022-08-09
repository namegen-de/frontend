// Settings.js
//  control the settings to generate names
// by: Mika Senghaas

import React from 'react';
import {
  Flex,
  Box,
  Text,
  Button,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react';

// imports
import ReactCountryFlag from 'react-country-flag';

// icons
import { IoMdMale, IoMdFemale } from 'react-icons/io';
import { AiFillCaretDown } from 'react-icons/ai';

// countries to choose from
import countries from '../countries';
import alpha2country from '../alpha2country';

const Settings = ({ state, setState }) => {
  // set state of gender
  const setGender = g => {
    setState(prev => ({
      ...prev,
      gender: g,
    }));
  };

  // set state of country
  const setCountry = c => {
    console.log('setting country to ', c);
    setState(prev => ({
      ...prev,
      country: c,
    }));
  };

  // set maximum length of name
  const setMaxLen = x => {
    setState(prev => ({
      ...prev,
      maxLen: x,
    }));
  };

  return (
    <Flex
      position="absolute"
      bottom={0}
      left={0}
      width="200px"
      justifyContent="space-around"
      direction="column"
      borderRadius='20px'
      opacity={0.5}
      _hover={{ opacity: 1 }}
    >
      <Text mb='.5rem'>Settings</Text>
      <Flex
        direction="column"
        alignItems="left"
        justifyContent="center"
        mb=".5rem"
      >
        <Text fontSize="10px" fontWeight="bold">
          Gender
        </Text>
        <Flex alignItems="center">
          <Button
            size="xs"
            onClick={() => setGender('M')}
            colorScheme={state.gender === 'M' ? 'blue' : 'gray'}
          >
            <IoMdMale />
          </Button>
          <Button
            size="xs"
            onClick={() => setGender('F')}
            colorScheme={state.gender === 'F' ? 'pink' : 'gray'}
          >
            <IoMdFemale />
          </Button>
        </Flex>
      </Flex>

      <Flex
        direction="column"
        alignItems="left"
        justifyContent="center"
        mb=".5rem"
      >
        <Text fontSize="10px" fontWeight="bold">
          Country Origin
        </Text>
        <Menu>
          <MenuButton as={Button} size="xs">
            <Flex alignItems="center" justifyContent="center">
              <ReactCountryFlag countryCode={state.country} />
              <Text fontSize="12px" px="5px">
                {alpha2country[state.country]}
              </Text>
              <AiFillCaretDown />
            </Flex>
          </MenuButton>
          <MenuList height="200px" overflow="scroll">
            {countries.map((c, i) => {
              return (
                <MenuItem key={i} onClick={() => setCountry(c)}>
                  <Flex alignItems="center">
                    <ReactCountryFlag countryCode={c} />
                    <Text fontSize="12px" ml="5px">
                      {alpha2country[c]}
                    </Text>
                  </Flex>
                </MenuItem>
              );
            })}
          </MenuList>
        </Menu>
      </Flex>

      <Flex direction="column" alignItems="left" justifyContent="center">
        <Text fontSize="10px" fontWeight="bold" mb=".2rem">
          Maximum Characters
        </Text>
        <Flex width="100%" alignItems="center" justifyContent="center">
          <Slider
            defaultValue={10}
            min={1}
            max={20}
            step={1}
            onChangeEnd={x => setMaxLen(x)}
            width="80%"
          >
            <SliderTrack bg="gray">
              <Box position="relative" right={10} />
              <SliderFilledTrack
                bg={state.gender === 'M' ? '#90CDF4' : '#FBB6CE'}
              />
            </SliderTrack>
            <SliderThumb boxSize={3} />
          </Slider>
          <Text ml="3px" fontSize="10px" fontWeight="bold">
            {state.maxLen}
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Settings;
