import { Flex, Image } from '@chakra-ui/react';

export function Header() {
  return (
    <Flex
      as='header'
      w='100%'
      py={['4', '6']}
      maxWidth={1160}
      mx='auto'
      align='center'
      justify='center'
    >
      <Image 
        h={['5', '12']}
        src='/Logo.svg' 
        alt='logo' 
      />
    </Flex>
)
}