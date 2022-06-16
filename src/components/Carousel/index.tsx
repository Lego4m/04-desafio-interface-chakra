import { Box } from '@chakra-ui/react';

import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { CarouselItem } from './CarouselItem';

type Continent = {
  id: string;
  name: string;
  description: string;
  carrouselBackgroundImage: string;
}

interface CarouselProps {
  continents: Continent[];
}

export function Carousel({ continents }: CarouselProps) {
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
        {continents.map((continent) => (
          <SwiperSlide key={continent.id}>
              <CarouselItem 
                continentId={continent.id}
                continent={continent.name}
                backgroundImage={continent.carrouselBackgroundImage}
                description={continent.description}
              />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
