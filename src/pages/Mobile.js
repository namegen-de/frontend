// Mobile.js
//  Screen to show on mobile
// by: Mika Senghaas
import React from 'react'
import { Box, Flex, Image, Heading, Text } from '@chakra-ui/react'

const Mobile = () => {
  return (
    <Flex
      flex={1}
      alignItems="center"
      mt=".5rem"
    >
    <Image
      src="/access-denied.png"
      alt="access-denied-mobile"
    />
    <Heading>Arghh, sorry...</Heading>
    <Text
      mt="1rem"
      w="75%"
      textAlign="center"
    >
      We do not support mobile yet. Open
      up your laptop or fire up your
      desktop to generate names you have
      never seen before - generated
      through cutting edge AI.
    </Text>
    </Flex>
  )
}

export default Mobile