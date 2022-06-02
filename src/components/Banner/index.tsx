import { Flex, Stack, Box, Image, Text, Heading } from '@chakra-ui/react';

export function Banner() {
  return (
    <Flex
      backgroundImage='/background.png'
      bgRepeat='no-repeat'
      bgSize='cover'
      w='100%' 
      h='335px'
      p='20'
    >
      <Stack 
        direction='row' 
        maxWidth={1160} 
        mx='auto' 
        spacing='36'
      >
        <Box>
          <Heading fontWeight='500' fontSize='4xl'>
            5 Continentes, <br/> infinitas possibilidades
          </Heading>

          <Text
            mt='5'
            color='gray.150'
            fontSize='xl'
          >
            Chegou a hora de tirar do papel a viagem que você sempre sonhou
          </Text>
        </Box>

        <Image
          src="/airplane.svg" 
          alt="airplane"
          h='72'
          transform='rotate(3deg)'
        />
      </Stack>
    </Flex>
  )
}