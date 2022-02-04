import { useState } from 'react';

export function useGoblinForm() {
  const [goblinFormName, setGoblinFormName] = useState(''); 
  const [goblinFormHP, setGoblinFormHP] = useState(''); 
  const [goblinFormColor, setGoblinFormColor] = useState(''); 
  
  return {
    goblinFormName, setGoblinFormName,
    goblinFormHP, setGoblinFormHP,
    goblinFormColor, setGoblinFormColor
  };
}