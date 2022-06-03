import { Flex, Heading, Text } from '@chakra-ui/react';

export function CarouselItem() {
  return (
    <Flex
      h='450px'
      direction='column'
      align='center'
      justify='center'
      backgroundImage='/continentsCarousel/europe.png'
      backgroundRepeat='no-repeat'
      backgroundSize='cover'
    >
      <Heading fontSize='5xl' lineHeight='4.5rem'>
        Europa
      </Heading>

      <Text 
        fontWeight='bold'
        fontSize='2xl'
        color='gray.150'
      >
        O continente mais antigo.
      </Text>
    </Flex> 
  )
}