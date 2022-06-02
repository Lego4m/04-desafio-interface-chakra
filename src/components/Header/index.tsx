import { Flex, Image } from '@chakra-ui/react';

export function Header() {
  return (
    <Flex
      as='header'
      w='100%'
      h='100px'
      maxWidth={1160}
      mx='auto'
      align='center'
      justify='center'
    >
      <Image src='/Logo.svg' alt='logo' />
    </Flex>
)
}