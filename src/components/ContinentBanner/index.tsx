import { Flex, Heading } from '@chakra-ui/react';

interface ContinentBannerProps {
  continent: {
    name: string;
    bannerImage: string;
  }
}

export function ContinentBanner({ continent }: ContinentBannerProps) {
  return (
    <Flex
      w='100%'
      maxW={1440}
      h={['150px', '500px']}
      mx='auto'
      bgRepeat='no-repeat'
      backgroundImage={continent.bannerImage}
      backgroundSize='cover'
      backgroundPosition='center'
      align={['center', 'flex-end']}
      justify={['center', 'flex-start']}
      pl={['0', '36']}
      pb={['0', '14']}
    >
      <Heading
        textAlign={['center', 'left']}
        fontWeight='semibold'
        fontSize={['1.75rem', '5xl']}
        lineHeight={['2.625rem', '4.5rem']}
      >
        {continent.name}
      </Heading>
    </Flex>
  )
}