import {useState} from 'react';
import {useEffect} from 'react';
import axios from 'axios';
import CreatureForm from '../CreatureForm/CreatureForm'

function App () {
 
  const [creatureList, setCreatureList] = useState([
    {name :'Unicorn', origin: 'Britain'},
    {name : 'Sphinx', origin: 'Egypt'},
    {name: 'Jackalope', origin: 'America'}
  ]);

  const fetchCreatures = () => {
    // axios({
    //   method: 'GET',
    //   url: '/creature'
    // })
    axios.get('/creature')
    .then(response => {
      console.log(response);
      console.log(response.data);
    }).catch(error => {
      console.log(error);
    })
  }

  // fetchCreatures();
  useEffect(() => {
    fetchCreatures();
  }, []) //empty array will allow it to run once on load.  useEffect allows you to run stuff on load.


  return (
    <div>
      <CreatureForm />
      <ul>
        {creatureList.map(creature => 
         (<li key={creature.name}>{creature.name} is from {creature.origin}</li>)
        )}
      </ul>
    </div>
  );

}

export default App
