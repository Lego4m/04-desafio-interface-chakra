import { Flex, Image, Text } from "@chakra-ui/react";

interface TravelItemProps {
  icon: string;
  children: string;
}

export function TravelItem({ children, icon }: TravelItemProps) {
  return (
    <Flex direction='column' alignItems='center' >
      <Image src={`/icons/${icon}`} alt={icon} />

      <Text 
        fontWeight='semibold' 
        fontSize='2xl'
        textAlign='center' 
        mt='6' 
        color='gray.600'
      >
        {children}
      </Text>
    </Flex>
  )
}