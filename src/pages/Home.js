// Home.js
//  Home Page
// by: Mika Senghaas
import React from 'react';
import { useEffect, useRef } from 'react';

import httpClient from '../httpClient';

// components
import Tutorial from '../components/Tutorial';
import Controls from '../components/Controls';
import Settings from '../components/Settings';
import Display from '../components/Display';

import { Flex } from '@chakra-ui/react';

const Home = ({ state, setState }) => {
  // ref to input field at start
  const input1 = useRef();
  const input2 = useRef();


  // forcefocus input fields
  useEffect(() => {
    if (input1.current) {
      input1.current.focus();
    }
    if (input2.current) {
      input2.current.focus();
    }
  }, [state]);

  // keydown event listener
  useEffect(() => {
    const keyDownHandler = e => {
      if (e.repeat === true) {
        return;
      }
      if (e.key === ' ') {
        e.preventDefault(state);
        fetchName(state);
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault(state);
        prevName(state);
      } else if (e.key === 'ArrowRight') {
        e.preventDefault(state);
        nextName(state);
      } else if (e.key === 'ArrowDown') {
        e.preventDefault(state);
        copyName(state);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault(state);
        rateName(state);
      }
    };

    document.addEventListener('keydown', keyDownHandler);

    return () => {
      document.removeEventListener('keydown', keyDownHandler);
    };
  }, [state]); // eslint-disable-line react-hooks/exhaustive-deps

  const fetchName = state => {
    const body = {
      countrycode: state.country,
      gender: state.gender,
      start_with: state.startWith,
      max_len: state.maxLen,
    }

    httpClient.post('/name', body)
      .then(res => res.data)
      .then(name => {
        clearMessage()
        setState(prev => ({
          ...prev,
          names: [...prev.names, name],
          curr: prev.names.length,
          copied: false,
        }));
      })
      .catch(err => {
        setState(prev => ({
          ...prev,
          message: {
            text: 'Sorry, something went wrong...',
            color: 'red',
          },
        }));
      })
  }


    /*
      .then(res => {
        clearMessage();
        const name = res.trim().replaceAll('"', '');
        setState(prev => ({
          ...prev,
          names: [...prev.names, name],
          curr: prev.names.length,
          copied: false,
        }));
      })
      .catch(err => {
        setState(prev => ({
          ...prev,
          message: {
            text: 'Sorry, something went wrong...',
            color: 'red',
          },
        }));
      });
    }
  };
      */

  // set curr pointer in names array
  const setCurr = i => {
    setState(prev => ({
      ...prev,
      curr: i,
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

  // next name
  const nextName = state => {
    if (state.curr < state.names.length - 1) {
      setCurr(state.curr + 1);
      setStartWith('');
      clearMessage();
    }
  };

  // set start with
  const setStartWith = s => {
    setState(prev => ({
      ...prev,
      startWith: s,
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

  return (
    <Flex
      position="relative"
      flex={1}
      width="100%"
      maxWidth="1000px"
      direction="column"
      alignItems="center"
      justifyContent="center"
    >
      {state.names.length === 0 && state.startWith === '' ? (
        <Tutorial setState={setState} />
      ) : (
        <>
          <Display state={state} setState={setState} />
          <Controls state={state} setState={setState} />
        </>
      )}
      <Settings state={state} setState={setState} />
    </Flex>
  );
};

export default Home;
