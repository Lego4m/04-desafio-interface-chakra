import { Flex, Heading, Text } from '@chakra-ui/react';
import Link from 'next/link';

interface CarouselItemProps {
  continentId: string;
  continent: string;
  description: string;
  backgroundImage: string;
}

export function CarouselItem({ 
  continentId, 
  continent, 
  description, 
  backgroundImage 
}: CarouselItemProps) {
  return (
    <Link href={`/continents/${continentId}`}>
      <Flex
        h={['250px', '450px']}
        direction='column'
        align='center'
        justify='center'
        backgroundImage={backgroundImage}
        backgroundRepeat='no-repeat'
        backgroundSize='cover'
        backgroundPosition='center'
        textAlign='center'
      >
        <Heading fontSize={['2xl', '5xl']} lineHeight={['9', '4.5rem']}>
          {continent}
        </Heading>

        <Text 
          fontWeight='bold'
          fontSize={['sm', '2xl']}
          color='gray.150'
        >
          {description}
        </Text>
      </Flex> 
    </Link>
  )
}