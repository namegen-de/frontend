// Register.js
//  page for users to register
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

const Register = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  // is valid if both email and pw are valid
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const validateUsername = username => {
    let error;
    if (username.length === 0) {
      error = 'Required';
    }
    return error;
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

  const handleSubmit = async (values, actions) => {
    const res = await httpClient.post('/register', values);
    if (res.status === 200) {
      if (res.data.err) {
        setError(res.data.err);
        actions.setSubmitting(false);
      } else if (res.data.msg) {
        actions.setSubmitting(false);
        navigate('/login');
      }
    } else {
      setError('Something went wrong');
    }
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
      <Heading>:register</Heading>
      <Text fontSize="14px" mb="3rem" mt=".5rem">
        Create an account to save your liked names
      </Text>
      <Formik
        initialValues={{ username: '', email: '', password: '' }}
        onSubmit={(values, actions) => handleSubmit(values, actions)}
      >
        {props => (
          <Form style={{ width: '100%', maxWidth: '350px' }}>
            <Field name="username" validate={validateUsername}>
              {({ field, form }) => (
                <FormControl
                  mb="1rem"
                  isInvalid={form.errors.username && form.touched.username}
                >
                  <Input
                    {...field}
                    size="s"
                    variant="flushed"
                    placeholder="Username"
                    fontSize="14px"
                    px="10px"
                  />
                  <FormErrorMessage fontSize="10px">
                    {form.errors.username}
                  </FormErrorMessage>
                </FormControl>
              )}
            </Field>
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
              Register
            </Button>
          </Form>
        )}
      </Formik>
      <RouterLink to="/login">
        <Text
          my="1rem"
          color="gray"
          fontSize="10px"
          _hover={{ textDecoration: 'underline' }}
        >
          Already have an account? Login
        </Text>
      </RouterLink>
    </Flex>
  );
};

export default Register;
