import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    brand: {
      500: '#FFBA08',
    },
    gray: {
      50: '#F5F8FA',
      150: '#DADADA',
      400: '#999999',
      600: '#47585B',
    }
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins',
  },
  styles: {
    global: {
      body: {
        color: 'gray.50'
      }
    }
  }
});
