import { Text, Tooltip, Image, Box, Flex } from '@chakra-ui/react';

interface InfoItemProps {
  title: string;
  text: string;
  label?: string;
}

export function InfoItem({ title, text, label = null }: InfoItemProps) {
  return (
    <Box textAlign='center'>
      <Text 
        fontWeight='semibold' 
        color='brand.500'
        fontSize={['2xl', '5xl']}
        lineHeight={['9', '4.5rem']}
      >
        {title}
      </Text>

      <Flex>
        <Text
          fontWeight='semibold'
          fontSize={['lg', '2xl']}
          lineHeight={['7', '9']}
          color='gray.600'
        >
          {text}
        </Text>

        { !!label && (
          <Tooltip 
            label={label}
            borderRadius='xl'
          >
            <Image ml='1' src='/info.svg' alt='info tip' />
          </Tooltip>
        ) }
      </Flex>
    </Box>
  )
}