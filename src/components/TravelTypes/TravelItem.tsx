import { Flex, Image, Text, useBreakpointValue } from '@chakra-ui/react';

interface TravelItemProps {
  icon: string;
  children: string;
}

export function TravelItem({ children, icon }: TravelItemProps) {
  const canContainIcons = useBreakpointValue({
    base: false,
    md: true,
  });

  return (
    <Flex direction={['row', 'row', 'column']} justifyContent='center' alignItems='center'>
      { canContainIcons ? (
        <Image src={`/icons/${icon}`} alt={icon} mb='6' />
      ) : (
        <Image src={'/icons/dot.svg'} alt='dot' mr='2' />
      ) }
      

      <Text 
        fontWeight='semibold' 
        fontSize={['lg', '2xl']}
        textAlign='center' 
        color='gray.600'
      >
        {children}
      </Text>
    </Flex>
  )
}