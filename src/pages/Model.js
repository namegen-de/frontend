import React from 'react';
import { useState, useEffect } from 'react';
import { Flex, Heading, Text } from '@chakra-ui/react';

import httpClient from '../httpClient';

const Model = () => {
  const [meta, setMeta] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // on component re-render
  useEffect(() => {
    httpClient
      .get('/meta')
      .then(res => {
        setMeta(res.data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const render = () => {
    if (loading) {
      return (
        <Text color="gray" fontSize="10px">
          Loading...
        </Text>
      );
    } else {
      if (error) {
        return (
          <Text color="gray" fontSize="10px">
            {error}
          </Text>
        );
      } else {
        return (
          <Text color="gray" fontSize="10px">
            Model from {meta.general.time}
          </Text>
        );
      }
    }
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
      <Heading mb='1rem'>Model</Heading>
      {render()}
    </Flex>
  );
};

export default Model;
