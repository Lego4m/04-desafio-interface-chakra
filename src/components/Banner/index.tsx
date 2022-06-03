import { Flex, Stack, Box, Image, Text, Heading, useBreakpointValue } from '@chakra-ui/react';

export function Banner() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Flex
      backgroundImage='/background.png'
      bgRepeat='no-repeat'
      bgSize='cover'
      w='100%' 
    >
      <Stack 
        direction='row' 
        maxWidth={1160} 
        mx='auto' 
        spacing='36'
        py={['7', '20']}
        px={['4', '8']}
      >
        <Box>
          <Heading 
            fontWeight='medium' 
            fontSize={['xl', '4xl']}
            lineHeight={['1.875rem', '3.375rem']}
          >
            5 Continentes, <br/> infinitas possibilidades.
          </Heading>

          <Text
            mt={['2', '5']}
            color='gray.150'
            fontSize={['sm', 'xl']}
            lineHeight={['1,3125rem', '1.875rem']}
          >
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
        </Box>

        { isWideVersion && (
          <Image
            src="/airplane.svg" 
            alt="airplane"
            h='72'
            transform='rotate(3deg)'
          />
        ) }
      </Stack>
    </Flex>
  )
}