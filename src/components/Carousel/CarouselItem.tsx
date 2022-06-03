import { Flex, Heading, Text } from '@chakra-ui/react';

export function CarouselItem() {
  return (
    <Flex
      h={['250px', '450px']}
      direction='column'
      align='center'
      justify='center'
      backgroundImage='/continentsCarousel/europe.png'
      backgroundRepeat='no-repeat'
      backgroundSize='cover'
      textAlign='center'
    >
      <Heading fontSize={['2xl', '5xl']} lineHeight={['9', '4.5rem']}>
        Europa
      </Heading>

      <Text 
        fontWeight='bold'
        fontSize={['sm', '2xl']}
        color='gray.150'
      >
        O continente mais antigo.
      </Text>
    </Flex> 
  )
}