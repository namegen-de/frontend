// Privacy.js
//  company privacy regulation
// by: Mika Senghaas
import React from 'react';
import {
  Flex,
  Heading,
  Text,
  OrderedList,
  ListItem,
  Link,
} from '@chakra-ui/react';

const H1 = ({ children }) => {
  return <Heading mb="1rem">{children}</Heading>;
};

const H2 = ({ children }) => {
  return (
    <Heading mt="2rem" fontSize="16px" textTransform="uppercase">
      {children}
    </Heading>
  );
};

const P = ({ children }) => {
  return (
    <Text fontSize="14px" my=".25rem" maxWidth="750px">
      {children}
    </Text>
  );
};

const Li = ({ children }) => {
  return (
    <ListItem fontSize="14px" my=".25rem" maxWidth="750px">
      {children}
    </ListItem>
  );
};

const Privacy = () => {
  return (
    <Flex
      flex={1}
      width="100%"
      maxWidth="1000px"
      justifyContent="left"
      direction="column"
      overflow="scroll"
    >
      <H1>Privacy Policy</H1>
      <Text color="gray" fontSize="10px">
        The privacy policy were last updated on August 5, 2022.
      </Text>

      <H2>Introduction</H2>
      <P>
        Thanks for trusting :namegen (':namegen', 'we', 'us', 'our') with your
        personal information! We take our responsibility to you very seriously,
        and so this Privacy Statement describes how we handle your data.
      </P>
      <P>
        This Privacy Statement applies to all websites we own and operate and to
        all services we provide (collectively, the 'Services'). So...PLEASE READ
        THIS PRIVACY STATEMENT CAREFULLY. By using the Services, you are
        expressly and voluntarily accepting the terms and conditions of this
        Privacy Statement and our Terms of Service, which include allowing us to
        process information about you.
      </P>
      <P>
        Under this Privacy Statement, we are the data controller responsible for
        processing your personal information. Our contact information appears at
        the end of this Privacy Statement.
      </P>

      <H2>What data do we collect?</H2>
      <OrderedList>
        <Li>Email</Li>
        <Li>Username</Li>
        <Li>All generated names</Li>
        <Li>Your liked names</Li>
      </OrderedList>

      <H2>What data do we collect?</H2>
      <P>
        You directly provide most of the data we collect. We collect data and
        process data when you:
      </P>
      <OrderedList>
        <Li>Create an account</Li>
        <Li>Change settings on the website</Li>
        <Li>Generate a new name</Li>
        <Li>Like a name</Li>
      </OrderedList>

      <H2>How will we use your data?</H2>
      <P>We collect data, so we that we can:</P>
      <OrderedList>
        <Li>Allow you to view previously liked names</Li>
        <Li>
          Compute summary statistics about the most generated/ liked names of
          the AI system
        </Li>
      </OrderedList>

      <H2>How do we store your data?</H2>
      <P>
        :namegen stores your data securely using PostgreSQL hosted on{' '}
        <Link href="https://www.heroku.com">Heroku</Link> PaaS
      </P>

      <H2>Privacy Policies of linked pages</H2>
      <P>
        :namegen contains links to other external websites. Our privacy policy
        only applies to our website, so if you click on a link to another
        website, you should read their privacy policy.
      </P>

      <H2>Changes</H2>
      <P>
      :namegen keeps its privacy policy under regular review and places any updates on this web page. The privacy policy may be subject to change at any given time without notice.
      </P>

      <H2>Contact</H2>
      <P>If you have any questions about :namegen’s privacy policy, the data we hold on you, or you would like to exercise one of your data protection rights, please do not hesitate to contact us.
      </P>

      <Text mt="3rem" color="gray" fontSize="10px">
        Privacy Policy based on{' '}
        <Link href="https://monkeytype.com/privacy-policy">
          Monkeytype's Privacy Policy
        </Link>
      </Text>
    </Flex>
  );
};

export default Privacy;
