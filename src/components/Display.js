// Display.js
//  show generated names
// by: Mika Senghaas
import React, { useEffect } from 'react'
import { useRef } from 'react'
import { Flex, Text, Input } from '@chakra-ui/react'

const Display = ({ state, setState }) => {
  // refernence to input
  const input = useRef()

  useEffect(() => {
    if (input.current) {
      input.current.focus()
    }
  }, [])

  // displayName
  const displayName = state => {
    if (state.startWith.length === 0) {
      return state.names[state.curr];
    } else if (state.names.length === 0) {
      return state.startWith;
    } else if (
      state.startWith ===
      state.names[state.curr].substring(0, state.startWith.length)
    ) {
      return state.names[state.curr];
    } else {
      return state.startWith;
    }
  };

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
    <Flex direction="column">
      <Text p="absolute" fontSize="12vw">
        {displayName(state)}
      </Text>
      <Input
        ref={input}
        pos="absolute"
        maxWidth="50%"
        variant="unstyled"
        fontSize="12vw"
        color={state.gender === 'M' ? '#90CDF4' : '#FBB6CE'}
        value={state.startWith}
        onChange={typeStartWith}
      />
    </Flex>
  )
}

export default Display