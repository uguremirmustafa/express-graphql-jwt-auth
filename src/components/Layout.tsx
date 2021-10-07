import { Box } from '@chakra-ui/react';
import React, { ReactChild, ReactNode } from 'react';
import Navbar from './Navbar';

interface Props {
  children: ReactNode | ReactChild;
}

export const Layout = ({ children }: Props) => {
  return (
    <Box bgGradient="linear(to-tl, gray.600, gray.800)" h="full" minH="100vh" color="white">
      <Navbar />
      <Box as="main" maxW="800px" mx="auto" w="full" p="4">
        {children}
      </Box>
    </Box>
  );
};
