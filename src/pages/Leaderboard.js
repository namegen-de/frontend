import React from 'react';
import { Flex, Heading } from '@chakra-ui/react';

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
      <Heading>Leaderboard</Heading>
    </Flex>
  );
};

export default Leaderboard;
