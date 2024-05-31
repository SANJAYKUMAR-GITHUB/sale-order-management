import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Box, Button, FormControl, FormLabel, Input, Heading, VStack, Center, Text } from '@chakra-ui/react';

const LoginPage = () => {
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();

    const [usernameError, setUsernameError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const onSubmit = data => {
        let valid = true;
        if (data.username !== 'admin') {
            setUsernameError('Please enter a valid username');
            valid = false;
        } else {
            setUsernameError('');
        }

        if (data.password !== 'password') {
            setPasswordError('Please enter a valid password');
            valid = false;
        } else {
            setPasswordError('');
        }

        if (valid) {
            localStorage.setItem('authenticated', 'true');
            navigate('/sales');
        }
    };

    return (
        <Center h="100vh">
            <Box
                p={8}
                maxWidth="400px"
                borderWidth={1}
                borderRadius={15}
                boxShadow="lg"
                position="relative"
                _before={{
                    content: '""',
                    position: 'absolute',
                    top: '-2px',
                    right: '-2px',
                    bottom: '-2px',
                    left: '-2px',
                    zIndex: -1,
                    borderRadius: '15px'
                }}
            >
                <Heading mb={6} textAlign="center">Login</Heading>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <VStack spacing={4}>
                        <FormControl isInvalid={usernameError}>
                            <FormLabel>Username</FormLabel>
                            <Input
                                type="text"
                                {...register('username')}
                                placeholder="Enter your username"
                                focusBorderColor="teal.400"
                                borderRadius="md"
                            />
                            {usernameError && (
                                <Text color="red.500" fontSize="sm">{usernameError}</Text>
                            )}
                        </FormControl>
                        <FormControl isInvalid={passwordError}>
                            <FormLabel>Password</FormLabel>
                            <Input
                                type="password"
                                {...register('password')}
                                placeholder="Enter your password"
                                focusBorderColor="teal.400"
                                borderRadius="md"
                            />
                            {passwordError && (
                                <Text color="red.500" fontSize="sm">{passwordError}</Text>
                            )}
                        </FormControl>
                        <Button
                            type="submit"
                            bg="linear-gradient(135deg, #71b7e6, #9b59b6)"
                            color="white"
                            size="lg"
                            width="full"
                            mt={4}
                            _hover={{
                                bg: "linear-gradient(135deg, #71b7e6, #9b59b6)",
                                opacity: 0.9
                            }}
                        >
                            Login
                        </Button>
                    </VStack>
                </form>
            </Box>
        </Center>
    );
};

export default LoginPage;
