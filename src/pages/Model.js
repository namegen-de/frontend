import React from 'react'
import { useState, useEffect } from 'react'
import { Flex, Heading, Text } from '@chakra-ui/react'

const H1 = ({ children }) => {
  return <Heading mb="1rem">{children}</Heading>;
};

const H2 = ({ children }) => {
  return (
    <Heading mt="2rem" fontSize="16px" textTransform="uppercase">
      {children}
    </Heading>
  );
};

const P = ({ children }) => {
  return (
    <Text fontSize="14px" my=".25rem" maxWidth="750px">
      {children}
    </Text>
  );
};

const Model = () => {
  const [meta, setMeta] = useState({})
  // on component re-render
  useEffect(() => {
    fetchMeta(); // meta data about model
  }, []);

  const fetchMeta = () => {
    fetch(`http://jonasmika.pythonanywhere.com/meta`)
      .then(res => res.json())
      .then(res => {
        console.log(res)
        setMeta(res)
      });
  };

  return (
    <Flex
      flex={1}
      width="100%"
      maxWidth="1000px"
      justifyContent="left"
      direction="column"
      overflow="scroll"
    >
      <H1>Model</H1>
      {meta.general && 
      <Text color="gray" fontSize="10px">
        Model from {meta.general.time}
      </Text>
      }
    </Flex>
  )
}

export default Model