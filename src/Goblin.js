import React from 'react';

export default function Goblin({ goblin,
  handleDeleteGoblin }) {

  return (
    <div 
      className='goblin' 
      onClick={() => handleDeleteGoblin && handleDeleteGoblin(goblin.id)}>
      <h3>{goblin.name}</h3>  
      <img src="goblin.png" style={{ backgroundColor: goblin.color }} />
      <p>{goblin.hp} HP</p>
    </div>
  );
}
