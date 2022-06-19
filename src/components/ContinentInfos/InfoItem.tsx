import { Text, 
  Image, 
  Box, 
  Flex, 
  Popover, 
  PopoverTrigger, 
  PopoverArrow, 
  PopoverContent, 
  PopoverBody 
} from '@chakra-ui/react';

interface InfoItemProps {
  quantity: number;
  item: string;
  label?: string;
}

export function InfoItem({ quantity, item, label = null }: InfoItemProps) {
  return (
    <Box textAlign='center'>
      <Text 
        fontWeight='semibold' 
        color='brand.500'
        fontSize={['2xl', '5xl']}
        lineHeight={['9', '4.5rem']}
      >
        {quantity}
      </Text>

      <Flex>
        <Text
          fontWeight='semibold'
          fontSize={['lg', '2xl']}
          lineHeight={['7', '9']}
          color='gray.600'
        >
          {item}
        </Text>

        { !!label && (
          <Popover>
            <PopoverTrigger>
              <Image ml='1' src='/icons/info.svg' alt='info tip' />
            </PopoverTrigger>
            <PopoverContent _focus={{ outline: 0 }}>
              <PopoverArrow />
              <PopoverBody>
                {label}
              </PopoverBody>
            </PopoverContent>
          </Popover>
        ) }
      </Flex>
    </Box>
  )
}