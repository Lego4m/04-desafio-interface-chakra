import { Box, Flex, Image } from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export function Header() {
  const { asPath } = useRouter();

  const isHomePage = asPath === '/';

  return (
    <Flex
      as='header'
      w='100%'
      py={['4', '6']}
      maxWidth={1160}
      mx='auto'
      align='center'
      justify='space-between'
    >
      { !isHomePage ? (
        <Link href='/' passHref>
          <Flex
            as='a'
            w='8'
            h='8'
            justify='center'
            align='center'
          >
            <Image src='/back.svg' alt='back button' />
          </Flex>
        </Link>
      ) : (
        <Box w='8' h='8' />
      ) }

      <Image 
        h={['5', '12']}
        src='/Logo.svg' 
        alt='logo' 
      />

      <Box w='8' h='8' />
    </Flex>
  )
}