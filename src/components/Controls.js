import React from 'react';
import {
  Flex,
  Text,
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody }
from '@chakra-ui/react'

// icons
import {
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
  AiOutlineCopy,
  AiOutlineHeart,
  AiFillHeart,
} from 'react-icons/ai';

const Controls = ({ state, setState }) => {
  // set curr pointer in names array
  const setCurr = i => {
    setState(prev => ({
      ...prev,
      curr: i,
    }));
  };

  // set message
  const setMessage = (text, col) => {
    setState(prev => ({
      ...prev,
      message: { text: text, color: col },
    }));
  };

  // clear messages
  const clearMessage = () => {
    setMessage('', 'gray');
  };


  // set start with
  const setStartWith = s => {
    setState(prev => ({
      ...prev,
      startWith: s,
    }));
  };

  // prev name
  const prevName = state => {
    if (state.curr > 0) {
      setCurr(state.curr - 1);
      setStartWith('');
      clearMessage();
    }
  };

  // next name
  const nextName = state => {
    if (state.curr < state.names.length - 1) {
      setCurr(state.curr + 1);
      setStartWith('');
      clearMessage();
    }
  };

  // copy current name
  const copyName = state => {
    // copy current name to clipboard
    navigator.clipboard.writeText(state.names[state.curr]);
    setMessage('Copied!', 'green');
  };

  // (un)like current name
  const rateName = state => {
    const res = state.liked;
    res[state.curr] = !res[state.curr];
    if (res[state.curr]) {
      setMessage('Liked!', 'red');
    } else {
      setMessage('Unliked', 'gray');
    }
    setState(prev => ({
      ...prev,
      liked: res,
    }));
  };

  return (
    <>
      <Flex alignItems="center">
        <Popover trigger="hover">
          <PopoverTrigger>
            <Button size="xs" m="2px" onClick={() => rateName(state)}>
              {state.liked[state.curr] ? <AiFillHeart /> : <AiOutlineHeart />}
            </Button>
          </PopoverTrigger>
          <PopoverContent w="100%">
            <PopoverBody fontSize="11px">
              {state.liked[state.curr] ? 'Unlike' : 'Like'}
            </PopoverBody>
          </PopoverContent>
        </Popover>
      </Flex>

      <Flex alignItems="center">
        <Popover trigger="hover">
          <PopoverTrigger>
            <Button
              size="xs"
              m="2px"
              onClick={() => prevName(state)}
              disabled={state.curr === 0 ? true : false}
            >
              <AiOutlineArrowLeft />
            </Button>
          </PopoverTrigger>
          <PopoverContent w="100%">
            <PopoverBody fontSize="11px">Previous Name</PopoverBody>
          </PopoverContent>
        </Popover>
        <Popover trigger="hover">
          <PopoverTrigger>
            <Button size="xs" m="2px" onClick={() => copyName(state)}>
              <AiOutlineCopy />
            </Button>
          </PopoverTrigger>
          <PopoverContent w="100%">
            <PopoverBody fontSize="11px">Copy</PopoverBody>
          </PopoverContent>
        </Popover>
        <Popover trigger="hover">
          <PopoverTrigger>
            <Button
              size="xs"
              m="2px"
              onClick={() => nextName(state)}
              disabled={state.curr === state.names.length - 1 ? true : false}
            >
              <AiOutlineArrowRight />
            </Button>
          </PopoverTrigger>
          <PopoverContent w="100%">
            <PopoverBody fontSize="11px">Next Name</PopoverBody>
          </PopoverContent>
        </Popover>
      </Flex>

      <Text h="20px" fontSize="10px" mt="1rem" color={state.message.color}>
        {state.message.text}
      </Text>
    </>
  );
};

export default Controls;
