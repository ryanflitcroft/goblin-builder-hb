import './App.css';
import { useState, useEffect } from 'react';
import GoblinForm from './GoblinForm';
import GoblinList from './GoblinList';
import Goblin from './Goblin';

function App() {
  const [allGoblins, setAllGoblins] = useState([]);
  const [filteredGoblins, setFilteredGoblins] = useState([]);
  const [goblinFormName, setGoblinFormName] = useState('');
  const [goblinFormHP, setGoblinFormHP] = useState('');
  const [goblinFormColor, setGoblinFormColor] = useState('');
  const [search, setSearch] = useState('');
  
  function submitGoblin(e) {
    e.preventDefault();

    const newGoblin = {
      id: Math.random(),
      name: goblinFormName,
      hp: goblinFormHP,
      color: goblinFormColor
    };

    setAllGoblins([...allGoblins, newGoblin]);
    setGoblinFormName('');
    setGoblinFormHP('');
    setGoblinFormColor('');
  }

  useEffect(() => {
    function handleFilterGoblins(search) {
      if (!search) {
        setFilteredGoblins([...allGoblins]);
      } else {
        const filteredGoblins = allGoblins.filter(goblin => goblin.name.includes(search));
        setFilteredGoblins([...filteredGoblins]);
      }
    }
    handleFilterGoblins(search);
  }, [search, allGoblins]);

  function handleDeleteGoblin(id) {
    const i = allGoblins.findIndex(goblin => goblin.id === id);
    allGoblins.splice(i, 1);
    setAllGoblins([...allGoblins]);
  }

  return (
    <div className="App">
      <div className='current-goblin quarter'>
        <Goblin goblin={{ name: goblinFormName,
          hp: goblinFormHP,
          color: goblinFormColor
        }}/>
      </div>
      <div className='goblin-filter quarter'>
        Filter Goblins
        <input onChange={(e) => setSearch(e.target.value)} />
      </div>
      <GoblinForm submitGoblin={submitGoblin}
        goblinFormName={goblinFormName} 
        setGoblinFormName={setGoblinFormName}
        goblinFormColor={goblinFormColor} 
        setGoblinFormColor={setGoblinFormColor}
        goblinFormHP={goblinFormHP} 
        setGoblinFormHP={setGoblinFormHP}
      />
      <GoblinList 
        goblins={filteredGoblins.length ? filteredGoblins : allGoblins}
        handleDeleteGoblin={handleDeleteGoblin}
      />
    </div>
  );
}

export default App;
