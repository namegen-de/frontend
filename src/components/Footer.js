// Footer.js
//  simple footer with links to pages or external urls
// by: Mika Senghaas
import React from 'react';
import { Flex, Text, Link, Icon } from '@chakra-ui/react';
import { Link as RouteLink } from 'react-router-dom';

// icons
import { FaLock, FaFileAlt, FaGithub, FaDonate } from 'react-icons/fa';

const FooterItem = ({ text, route, url, icon }) => {
  if (route) {
    return (
      <Link as={RouteLink} to={text} role="group">
        <Flex alignItems="center" mx="1rem">
          <Icon
            as={icon}
            h="10px"
            w="10px"
            color="gray"
            _groupHover={{ color: 'black' }}
          />
          <Text
            fontSize="10px"
            fontWeight="bold"
            ml="5px"
            color="gray"
            _groupHover={{ color: 'black' }}
          >
            {text.toUpperCase()}
          </Text>
        </Flex>
      </Link>
    );
  } else if (url) {
    return (
      <Link href={url} role="group" isExternal>
        <Flex alignItems="center" mx="1rem">
          <Icon as={icon} h="10px" w="10px" color="gray" _groupHover={{color: "black"}} />
          <Text fontSize="10px" fontWeight="bold" ml="5px" color="gray" _groupHover={{color: "black"}}>
            {text.toUpperCase()}
          </Text>
        </Flex>
      </Link>
    );
  }
};

const Footer = () => {
  return (
    <Flex
      width="100%"
      maxWidth="1000px"
      height="50px"
      alignItems="center"
      justifyContent="center"
    >
      <FooterItem text="privacy" route="privacy" url={null} icon={FaLock} />
      <FooterItem text="terms" route="terms" url={null} icon={FaFileAlt} />
      <FooterItem
        text="github"
        route={null}
        url="https://github.com/jonas-mika/namegen"
        icon={FaGithub}
      />
      <FooterItem
        text="donate"
        route={null}
        url="https://www.buymeacoffee.com/jonasmika"
        icon={FaDonate}
      />
    </Flex>
  );
};

export default Footer;
