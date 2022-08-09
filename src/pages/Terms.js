// Terms.js
//  Display information about the project
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
import { Link as RouterLink } from 'react-router-dom';

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

const Terms = () => {
  return (
    <Flex
      flex={1}
      width="100%"
      maxWidth="1000px"
      justifyContent="left"
      direction="column"
      overflow="scroll"
    >
      <H1>Terms of Service</H1>
      <Text color="gray" fontSize="10px">
        These terms of service were last updated on August 5, 2022.
      </Text>

      <H2>Agreement</H2>
      <P>
        By accessing this Website, accessible from{' '}
        <Link href="https://namegen.de">namegen.de</Link>, you are agreeing to
        be bound by the Website Terms of Service and agree that you are
        responsible for the agreement in accordance with any applicable local
        laws. IF YOU DO NOT AGREE TO ALL THE TERMS AND CONDITIONS OF THIS
        AGREEMENT, YOU ARE NOT PERMITTED TO ACCESS OR USE OUR SERVICES.
      </P>

      <H2>Limitations</H2>
      <P>
        You are responsible for your account's security and all activities on
        your account. You must not, in the use of this site, violate any
        applicable laws, including, without limitation, copyright laws, or any
        other laws regarding the security of your personal data, or otherwise
        misuse this site.
      </P>
      <P>
        :namegen type reserves the right to remove or disable any account or any
        other content on this site at any time for any reason, without prior
        notice to you, if we believe that you have violated this agreement.
      </P>
      <P>
        You agree that you will not upload, post, host, or transmit any content
        that:
      </P>
      <OrderedList>
        <Li>is unlawful or promotes unlawful activities;</Li>
        <Li>is or contains sexually obscene content;</Li>
        <Li>is libelous, defamatory, or fraudulent;</Li>
        <Li>is discriminatory or abusive toward any individual or group;</Li>
        <Li>
          is degrading to others on the basis of gender, race, class, ethnicity,
          national origin, religion, sexual preference, orientation, or
          identity, disability, or other classification, or otherwise represents
          or condones content that: is hate speech, discriminating, threatening,
          or pornographic; incites violence; or contains nudity or graphic or
          gratuitous violence;
        </Li>
        <Li>
          violates any person's right to privacy or publicity, or otherwise
          solicits, collects, or publishes data, including personal information
          and login information, about other Users without consent or for
          unlawful purposes in violation of any applicable international,
          federal, state, or local law, statute, ordinance, or regulation; or
        </Li>
        <Li>
          contains or installs any active malware or exploits/uses our platform
          for exploit delivery (such as part of a command or control system); or
          infringes on any proprietary right of any party, including patent,
          trademark, trade secret, copyright, right of publicity, or other
          rights.
        </Li>
      </OrderedList>
      <P>While using the Services, you agree that you will not:</P>
      <OrderedList>
        <Li>
          harass, abuse, threaten, or incite violence towards any individual or
          group, including other Users and :namegen's contributors;
        </Li>
        <Li>
          use our servers for any form of excessive automated bulk activity
          (e.g., spamming), or rely on any other form of unsolicited advertising
          or solicitation through our servers or Services;
        </Li>
        <Li>
          attempt to disrupt or tamper with our servers in ways that could a)
          harm our Website or Services or b) place undue burden on our servers;
        </Li>
        <Li>access the Services in ways that exceed your authorization;</Li>
        <Li>
          falsely impersonate any person or entity, including any of our
          contributors, misrepresent your identity or the site's purpose, or
          falsely associate yourself with :namegen;
        </Li>
        <Li>
          violate the privacy of any third party, such as by posting another
          person's personal information without their consent;
        </Li>
        <Li>
          facilitate or encourage any violations of this Agreement or interfere
          with the operation, appearance, security, or functionality of the
          Services; or
        </Li>
        <Li>use the Services in any manner that is harmful to minors.</Li>
      </OrderedList>
      <P>
        Without limiting the foregoing, you will not transmit or post any
        content anywhere on the Services that violates any laws. namenge
        absolutely does not tolerate engaging in activity that significantly
        harms our users. We will resolve disputes in favor of protecting our
        users as a whole.
      </P>
      <H2>Privacy Policy</H2>
      <P>
        If you use our Services, you must abide by our{' '}
        <RouterLink to="privacy">Privacy Policy</RouterLink>. You acknowledge
        that you have read our Privacy Policyand understand that it sets forth
        how we collect, use, and store your information. If you do not agree
        with our Privacy Statement, then you must stop using the Services
        immediately. Any person, entity, or service collecting data from the
        Services must comply with our Privacy Statement. Misuse of any User's
        Personal Information is prohibited. If you collect any Personal
        Information from a User, you agree that you will only use the Personal
        Information you gather for the purpose for which the User has authorized
        it. You agree that you will reasonably secure any Personal Information
        you have gathered from the Services, and you will respond promptly to
        complaints, removal requests, and 'do not contact' requests from us or
        Users.
      </P>

      <H2>Links</H2>
      <P>
        :namegen is not responsible for the contents of any linked sites. The
        use of any linked website is at the user's own risk.
      </P>

      <H2>Changes to Terms of Service</H2>
      <P>
        :namegen may revise these Terms of Service for its website at any time
        without prior notice. By using this website, you are agreeing to be
        bound by the current version of these terms of service.
      </P>

      <H2>Disclaimer</H2>
      <P>
        EXCLUDING THE EXPLICITLY STATED WARRANTIES WITHIN THESE TERMS, WE ONLY
        OFFER OUR SERVICES ON AN 'AS-IS' BASIS. YOUR ACCESS TO AND USE OF THE
        SERVICES OR ANY CONTENT IS AT YOUR OWN RISK. YOU UNDERSTAND AND AGREE
        THAT THE SERVICES AND CONTENT ARE PROVIDED TO YOU ON AN 'AS IS,' 'WITH
        ALL FAULTS,' AND 'AS AVAILABLE' BASIS. WITHOUT LIMITING THE FOREGOING,
        TO THE FULL EXTENT PERMITTED BY LAW, NAMEGEN DISCLAIMS ALL WARRANTIES,
        EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION WARRANTIES OF
        MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.
        TO THE EXTENT SUCH DISCLAIMER CONFLICTS WITH APPLICABLE LAW, THE SCOPE
        AND DURATION OF ANY APPLICABLE WARRANTY WILL BE THE MINIMUM PERMITTED
        UNDER SUCH LAW. NAMEGEN MAKES NO REPRESENTATIONS, WARRANTIES, OR
        GUARANTEES AS TO THE RELIABILITY, TIMELINESS, QUALITY, SUITABILITY,
        AVAILABILITY, ACCURACY, OR COMPLETENESS OF ANY KIND WITH RESPECT TO THE
        SERVICES, INCLUDING ANY REPRESENTATION OR WARRANTY THAT THE USE OF THE
        SERVICES WILL (A) BE TIMELY, UNINTERRUPTED, OR ERROR-FREE, OR OPERATE IN
        COMBINATION WITH ANY OTHER HARDWARE, SOFTWARE, SYSTEM, OR DATA, (B) MEET
        YOUR REQUIREMENTS OR EXPECTATIONS, (C) BE FREE FROM ERRORS OR THAT
        DEFECTS WILL BE CORRECTED, OR (D) BE FREE OF VIRUSES OR OTHER HARMFUL
        COMPONENTS. NAMEGEN ALSO MAKES NO REPRESENTATIONS OR WARRANTIES OF ANY
        KIND WITH RESPECT TO CONTENT; USER CONTENT IS PROVIDED BY AND IS SOLELY
        THE RESPONSIBILITY OF THE RESPECTIVE USER PROVIDING THAT CONTENT. NO
        ADVICE OR INFORMATION, WHETHER ORAL OR WRITTEN, OBTAINED FROM NAMEGEN OR
        THROUGH THE SERVICES, WILL CREATE ANY WARRANTY NOT EXPRESSLY MADE
        HEREIN. NAMEGEN DOES NOT WARRANT, ENDORSE, GUARANTEE, OR ASSUME
        RESPONSIBILITY FOR ANY USER CONTENT ON THE SERVICES OR ANY HYPERLINKED
        WEBSITE OR THIRD-PARTY SERVICE, AND NAMEGEN WILL NOT BE A PARTY TO OR IN
        ANY WAY BE RESPONSIBLE FOR TRANSACTIONS BETWEEN YOU AND THIRD PARTIES.
        IF APPLICABLE LAW DOES NOT ALLOW THE EXCLUSION OF SOME OR ALL OF THE
        ABOVE IMPLIED OR STATUTORY WARRANTIES TO APPLY TO YOU, THE ABOVE
        EXCLUSIONS WILL APPLY TO YOU TO THE FULLEST EXTENT PERMITTED BY
        APPLICABLE LAW.
      </P>

      <H2>Contact</H2>
      <P>
        If you have any questions about :namegen’s privacy policy, the data we
        hold on you, or you would like to exercise one of your data protection
        rights, please do not hesitate to contact us.
      </P>

      <Text mt="3rem" color="gray" fontSize="10px">
        Terms based on{' '}
        <Link href="https://monkeytype.com/terms-of-service">
          Monkeytype's Terms of Service
        </Link>
      </Text>
    </Flex>
  );
};

export default Terms;
