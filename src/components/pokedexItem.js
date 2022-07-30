import React from 'react'
import { Box, Button, Flex, Spacer,Tag,Text } from '@chakra-ui/react';

export function LaunchItem(launch) {
  return (
    <Box  bg="gray.100" p={4} m={4} borderRadius="lg">
          <Flex display="flex" >
            <Text fontSize="2xl">
              Mission <strong> {launch.id}</strong>
              ({launch.name})
            </Text>
            <Spacer/>
            <Text fontSize="2xl">
              {launch.sprite}
            </Text>
          </Flex>
          <Flex align={"center"}>
            
          </Flex>
          <Button colorScheme='blue'>
            More Details
          </Button>
         
          
        </Box>
  );
}
