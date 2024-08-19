import React from 'react';
import Player from './Player';
import players from './Players';

const PlayersList = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
      {players.map((player, index) => (
        <Player key={index} {...player} />
      ))}
    </div>
  );
};

export default PlayersList;
