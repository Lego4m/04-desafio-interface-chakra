import { Box } from '@chakra-ui/react';

import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { CarouselItem } from './CarouselItem';

export function Carousel() {
  return (
    <Box
      maxWidth={1240}
      width='100%'
      mx='auto'
      mt={['5', '14']}
      mb={['6', '10']}
    >
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        scrollbar={false}
      >
        <SwiperSlide>
          <CarouselItem />
        </SwiperSlide>
      </Swiper>
    </Box>
  );
}
