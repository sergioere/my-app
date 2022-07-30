
import {useState, useEffect} from 'react';
import * as API from './services/pokemons';

import { Heading, Image } from '@chakra-ui/react';
import { LaunchItem } from './components/pokedexItem';

export function App() {
const [launches, setLaunches] = useState([]);

useEffect(()=>{
API.getAllLaunches().then(setLaunches);
}, []);

/**
 * Se puede separar en mas componentes lo de abajo
 * 
 */

  return (
    <>
    
    <Heading m={4} as="h1" size="lg">SpaceX Launches</Heading>
    <section>
      {launches.map((launch)=>(
        
          <LaunchItem key={launch.id} {...launch}/>
        
      ))}
    </section>    
    </>
  );
}





/**export default App;*/
