import { Flex } from '@chakra-ui/react';
import { GetStaticPaths, GetStaticProps } from 'next';

import { ContinentBanner } from '../../components/ContinentBanner';
import { ContinentInfos } from '../../components/ContinentInfos';
import { Header } from '../../components/Header';
import { MostVisitedCities } from '../../components/MostVisitedCities';

import { api } from '../../services/api';

type City = {
  id: string;
  name: string;
  image: string;
  country: {
    name: string;
    flag: string;
  }
}

type Continent<cityType = string[]> = {
  id: string;
  name: string;
  bannerImage: string;
  brief: string;
  details: {
    countries: number;
    languages: number;
    citiesMoreThan100: cityType;
  }
}

interface ContinentProps {
  continent: Continent<City[]>;
}

export default function Continent({ continent }: ContinentProps) {
  return (
    <Flex direction='column'
      pb={['4', '9']}
    >
      <Header />
      <ContinentBanner continent={continent} />
      <ContinentInfos continent={continent} />
      <MostVisitedCities cities={continent.details.citiesMoreThan100} />
    </Flex>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { data: continents } = await api.get<Continent[]>('/continents');

  const continentsIds = continents.map((continent) => ({ params: { continent: continent.id } }));

  return {
    paths: continentsIds,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { continent } = params;

  const { data: continentData } = await api.get<Continent>(`/continents/${continent}`);

  const { data: citiesData } = await api.get<City[]>(`/cities`);

  const newContinent = {
    ...continentData,
    details: {
      ...continentData.details,
      citiesMoreThan100: citiesData.filter((city) => continentData.details.citiesMoreThan100.includes(city.id)),
    }
  }

  return {
    props: {
      continent: newContinent,
    }
  }
}