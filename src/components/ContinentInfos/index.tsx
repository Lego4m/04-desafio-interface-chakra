import { Stack, Flex, Text } from '@chakra-ui/react';
import { InfoItem } from './InfoItem';

export function ContinentInfos() {
  return (
    <Stack 
      direction={['column', 'row']} 
      maxWidth={1160} 
      width='100%'
      mx='auto' 
      px={['4', '8']}
      mt={['6', '20']}
      spacing={['4', '16']}
      color='gray.600'
    >
      <Flex flex='1'>
        <Text
          textAlign='justify'
          fontSize={['sm', '2xl']}
          lineHeight={['5', '9']}
          color='gray.600'
        >
          A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
        </Text>
      </Flex>
      
      <Flex 
        flex='1' 
        justify='space-evenly'
        align='center'
      >
        <InfoItem title='50' text='países' />
        <InfoItem title='60' text='línguas' />
        <InfoItem title='27' text='cidades +100' label='Cidades que estão entre as 100 mais visitadas do mundo.' />
      </Flex>
    </Stack>
  )
}