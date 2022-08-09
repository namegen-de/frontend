// App.js
// by: Mika Senghaas

// default imports
import React from 'react';
import { useState, useEffect } from 'react';

// chakra
import { theme, ChakraProvider, Flex } from '@chakra-ui/react';

// imports
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import * as rdd from 'react-device-detect';

// pages
import About from './pages/About';
import Home from './pages/Home';
import Leaderboard from './pages/Leaderboard';
import Mobile from './pages/Mobile';
import Model from './pages/Model';
import NotFound from './pages/NotFound';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import User from './pages/User';

// components
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  // state
  const [state, setState] = useState({
    // user primary key
    user: '',

    // name and like history
    names: [],
    liked: [],
    curr: -1,

    // settings
    country: 'JP',
    gender: 'M',
    maxLen: 10,
    startWith: '',

    // meta
    meta: {},

    // info
    message: { text: '', color: 'gray' },
  });

  useEffect(() => {
    console.log(state)
  }, [state])

  // backend url
  const url = process.env.REACT_APP_BACKEND_URL;


  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Flex
          py="1rem"
          px="2rem"
          w="100vw"
          h="100vh"
          justifyContent="center"
          alignItems="center"
          direction="column"
        >
          <Header />
          {rdd.isMobile ? (
            <Mobile />
          ) : (
            <>
              <Routes>
                <Route path="/" element={<Home state={state} setState={setState}/>} />
                <Route path="/about" element={<About />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/leaderboard" element={<Leaderboard />} />
                <Route path="/model" element={<Model />} />
                <Route path="/user" element={<User />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
              <Footer />
            </>
          )}
        </Flex>
      </BrowserRouter>
    </ChakraProvider>
  );
};

export default App;
