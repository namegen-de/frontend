// App.js
// by: Mika Senghaas

// default imports
import React, { useState } from 'react';

// chakra
import { theme, ChakraProvider, Flex } from '@chakra-ui/react';

// imports
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import * as rdd from 'react-device-detect';

// pages
import About from './pages/About';
import Home from './pages/Home';
import Leaderboard from './pages/Leaderboard';
import LikedNames from './pages/LikedNames'
import Login from './pages/Login'
import Mobile from './pages/Mobile';
import Model from './pages/Model';
import NotFound from './pages/NotFound';
import Privacy from './pages/Privacy';
import Register from './pages/Register'
import Terms from './pages/Terms';
import User from './pages/User';

// components
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  // state
  const [state, setState] = useState({
    // user primary key
    user: JSON.parse(localStorage.getItem('@me')) || null,

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
          <Header state={state} setState={setState} />
          {rdd.isMobile ? (
            <Mobile />
          ) : (
            <>
              <Routes>
                <Route path="/" element={<Home state={state} setState={setState} />} />
                <Route path="/about" element={<About />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/leaderboard" element={<Leaderboard />} />
                <Route path="/liked-names" element={<LikedNames />} />
                <Route path="/model" element={<Model />} />
                <Route path="/user" element={<User />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login setState={setState} />} />
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
