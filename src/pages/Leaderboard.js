import React from 'react';
import { Flex, Heading, Text } from '@chakra-ui/react';

const Leaderboard = () => {
  return (
    <Flex
      flex={1}
      width="100%"
      maxWidth="1000px"
      justifyContent="left"
      direction="column"
      overflow="scroll"
    >
      <Heading mb="1rem">Leaderboard</Heading>
      <Text fontSize="10px" color="gray" mb="2rem">
        Not yet implemented.
      </Text>
    </Flex>
  );
};

export default Leaderboard;
