// Tutorial.js
//  landing page, explains how the app works
// by: Mika Senghaas
import React, { useEffect } from 'react';
import { useRef } from 'react'
import { Flex, Heading, Text, Input } from '@chakra-ui/react';

const Item = ({ num, text}) => {
  return (
  <Flex mb=".5rem" alignItems="center" justifyContent="center">
    <Flex
      bgColor="black"
      minWidth="20px"
      h="20px"
      fontSize="15px"
      fontWeight={600}
      borderRadius="50%"
      color="white"
      alignItems="center"
      justifyContent="center"
    >
      {num}
    </Flex>
    <Text ml="1rem">
      {text}
    </Text>
  </Flex>
  )
}

const Tutorial = ({ setState}) => {
  const input = useRef();

  useEffect(() => {
    if (input.current) {
      input.current.focus()
    }
  }, [])

  // input field for start with
  const typeStartWith = e => {
    if (e.target.value.length <= 5) {
      setState(prev => ({
        ...prev,
        startWith: e.target.value,
      }));
    }
  };

  return (
    <>
      <Heading
        fontSize={{
          base: '1.5rem',
          lg: '2.5rem',
        }}
        mb="1.5rem"
      >
        Welcome to :namegen
      </Heading>
      <Flex direction="column">
        <Item num={1} text="Control the gender, country origin and more from the menu below."/>
        <Item num={2} text="Start typing to generate name with a specific letter combination"/>
        <Item num={3} text="Press Space to generate names that never existed before"/>
      </Flex>
      <Input 
        ref={input}
        onChange={typeStartWith}
        variant='ghost'
        color='transparent'
      />
    </>
  );
};

export default Tutorial;
