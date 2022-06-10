import { Box, Flex, Text, Image } from '@chakra-ui/react';

interface CityCardProps {
  city: string;
  country: string;
  bannerUrl: string;
  flagUrl: string;
}

export function CityCard({ city, country, bannerUrl, flagUrl }: CityCardProps) {
  return (
    <Flex direction='column' width={279}>
      <Image 
        src={bannerUrl}
        alt={city}
        w='100%'
        h='173px'
        borderTopRadius='4'
      />

      <Flex
        flex='1'
        borderX='1px'
        borderBottom='1px'
        borderColor='brand.450'
        borderBottomRadius='4'
        p='6'
        justify='space-between'
        align='center'
      >
        <Box>
          <Text
            fontSize='xl'
            fontFamily='Barlow'
            lineHeight='6'
            fontWeight='semibold'
            color='gray.600'
          >
            {city}
          </Text>

          <Text
            fontSize='md'
            fontFamily='Barlow'
            lineHeight='tall'
            fontWeight='medium'
            color='gray.400'
            mt='3'
          >
            {country}
          </Text> 
        </Box>

        <Image 
          src={flagUrl}
          alt={country}
          height='8'
          width='8'
          borderRadius='50%'
        />
      </Flex>
    </Flex>
  )
}