// Login.js
//  page for users to login
// by: Mika Senghaas

// imports
import React from 'react';
import { useState } from 'react';
import {
  Flex,
  Heading,
  Text,
  Button,
  Input,
  InputGroup,
  InputRightElement,
  FormControl,
  FormErrorMessage,
} from '@chakra-ui/react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import httpClient from '../httpClient';

// icons
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

const Login = ({ setState }) => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const validateEmail = email => {
    let error;
    if (email.length === 0) {
      error = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
      error = 'Invalid email address';
    }
    return error;
  };

  const validatePassword = password => {
    let error;
    if (password.length === 0) {
      error = 'Required';
    } else if (password.length < 5) {
      error = 'Password must be at least 5 characters';
    }
    return error;
  };

  const handleSubmit = (values, actions) => {
    httpClient.post('/login', values)
      .then(res => {
        console.log('Successfully logged in.', res.data)

        // write to local storage if not yet there
        localStorage.setItem('@me', JSON.stringify(res.data.user))

        // set state
        setState(prev => ({
          ...prev,
          user: res.data.user
        }))

        // navigate to main page
        actions.setSubmitting(false)
        navigate('/')
      })
      .catch(err => {
        console.log(err)
        actions.setSubmitting(false)
        setError(err.response.data.error)
      })
  };

  return (
    <Flex
      flex={1}
      width="100%"
      maxWidth="1000px"
      justifyContent="center"
      alignItems="center"
      direction="column"
      overflow="scroll"
    >
      <Heading>:login</Heading>
      <Text fontSize="14px" mb="3rem" mt=".5rem">
        Log in to see your saved names
      </Text>
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={(values, actions) => handleSubmit(values, actions)}
      >
        {props => (
          <Form style={{ width: '100%', maxWidth: '350px' }}>
            <Field name="email" validate={validateEmail}>
              {({ field, form }) => (
                <FormControl
                  mb="1rem"
                  isInvalid={form.errors.email && form.touched.email}
                >
                  <Input
                    {...field}
                    size="s"
                    variant="flushed"
                    placeholder="Email"
                    fontSize="14px"
                    px="10px"
                  />
                  <FormErrorMessage fontSize="10px">
                    {form.errors.email}
                  </FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name="password" validate={validatePassword}>
              {({ field, form }) => (
                <FormControl
                  mb="2rem"
                  isInvalid={form.errors.password && form.touched.password}
                >
                  <InputGroup alignItems="center">
                    <Input
                      {...field}
                      size="s"
                      variant="flushed"
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Password"
                      fontSize="14px"
                      px="10px"
                      mt=".5rem"
                      mb=".5rem"
                    />
                    <InputRightElement h="80%">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={toggleShowPassword}
                        _hover={{}}
                        _active={{}}
                      >
                        {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                  <FormErrorMessage fontSize="10px">
                    {form.errors.password}
                  </FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Text
              width="100%"
              textAlign="center"
              fontSize="10px"
              color="#E53E3E"
            >
              {error}
            </Text>
            <Button
              mt={4}
              bgColor="black"
              color="white"
              border={null}
              _hover={{ bgColor: 'gray', color: 'white' }}
              width="100%"
              borderRadius={0}
              isLoading={props.isSubmitting}
              type="submit"
            >
              Login
            </Button>
          </Form>
        )}
      </Formik>
      <RouterLink to="/register">
        <Text my='1rem' color="gray" fontSize="10px" _hover={{ textDecoration: 'underline' }}>
          Don't have an account yet? Register
        </Text>
      </RouterLink>
    </Flex>
  );
};

export default Login;
