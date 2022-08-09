// NotFound.js
//  404 error page - route not found
// by: Mika Senghaas
import React from 'react'
import { Flex, Heading, Image, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <Flex
      flex={1}
      width='100%'
      maxWidth="1000px"
      alignItems="center"
      direction="column"
    >
    <Image w="50%" src="/not-found.png" alt="not-found"/>
    <Heading mb="1rem">That's weird... we got a 404</Heading>
    <Text textAlign="center" width="50%">This means either you or we did something wrong. If you believe this to be a bug, feel free to react out to us. Otherwise, it's easiest to go back to the <Link to="/">Home Page</Link>.</Text>
    </Flex>
  )
}

export default NotFound 