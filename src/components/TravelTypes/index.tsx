import { SimpleGrid } from "@chakra-ui/react";
import { TravelItem } from "./TravelItem";

export function TravelTypes() {
  return (
    <SimpleGrid 
      maxWidth={1160}
      width='100%'
      mx='auto'
      mt={['9', '20']}
      px={['4', '8']}
      minChildWidth='155px' 
      gap='6'
    >
      <TravelItem icon='nightlife.svg'>
        vida noturna
      </TravelItem>

      <TravelItem icon='surf.svg'>
        praia
      </TravelItem>

      <TravelItem icon='building.svg'>
        moderno
      </TravelItem>

      <TravelItem icon='museum.svg'>
        clássico
      </TravelItem>

      <TravelItem icon='earth.svg'>
        e mais...
      </TravelItem>
    </SimpleGrid>
  )
}