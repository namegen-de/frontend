// LikedNames.js
//  company privacy regulation
// by: Mika Senghaas
import React from 'react';
import { useState, useEffect } from 'react' 
import {
  Flex,
  Heading,
  Text
} from '@chakra-ui/react';
import httpClient from '../httpClient';

const Name = ({ name }) => {
  return (
    <Flex alignItems='baseline' my='.2rem'>
      <Heading fontSize='4rem' color={name.gender === 'M' ? '#90CDF4' : '#FBB6CE' }>
        {name.name}
      </Heading>
      <Text fontSize='10px' color='gray'>{name.created_on}</Text>
    </Flex>
  )
}

const LikedNames = () => {
  const [names, setNames] = useState(null)
  const [msg, setMsg] = useState({
    text: "Loading...",
    color: "gray",
  })

  useEffect(() => {
    const currentdate = new Date(); 
    const datetime = currentdate.getDate() + "/"
                    + (currentdate.getMonth()+1)  + "/" 
                    + currentdate.getFullYear() + " @ "  
                    + currentdate.getHours() + ":"  
                    + currentdate.getMinutes() + ":" 
                    + currentdate.getSeconds();

    const fetchLikedNames = async () => {
      try {
        const res = await httpClient.get('/likes')
        if (res.status === 200) {
          console.log('Sucessfully fetched liked names', res.data)
          setNames(res.data)
          setMsg({text: `Last sync: ${datetime}`, color: 'gray'})
        }
      } catch (err) {
        setMsg({text: err.response.data.error, color: 'red' })
      }
    }
    fetchLikedNames()
  }, [])
  
  const renderNames = () => {
    const numLikes = Object.keys(names).length

    if (numLikes > 0) {
      return (
        Object.keys(names).map((nameId, i) => {
          return (
            <Name key={i} name={names[nameId]} />
          )
        })
      )
    } else {
      return (
        <Text>No liked names yet.</Text>
      )
    }
  }


  return (
    <Flex
      flex={1}
      width="100%"
      maxWidth="1000px"
      justifyContent="left"
      direction="column"
      overflow="scroll"
    >
      <Heading mb='1rem'>Liked Names</Heading>
      <Text fontSize='10px' color={msg.color} mb='2rem'>{msg.text}</Text>
      {names && renderNames()}
    </Flex>
  );
};

export default LikedNames;
