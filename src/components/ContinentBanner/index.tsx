import { Flex, Heading } from '@chakra-ui/react';

export function ContinentBanner() {
  return (
    <Flex
      w='100%'
      maxW={1440}
      h='500px'
      mx='auto'
      bgRepeat='no-repeat'
      backgroundImage='/ContinentsImgs/europe/banner.png'
      align='flex-end'
      pl='36'
      pb='14'
    >
      <Heading
        textAlign='left'
        fontWeight='semibold'
        fontSize='5xl'
        lineHeight='4.5rem'
      >
        Europa
      </Heading>
    </Flex>
  )
}