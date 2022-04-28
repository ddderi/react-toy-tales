import React from 'react';
import ToyCard from './ToyCard'

const ToyContainer = ({toys, handleDelete}) => {
  return(
    <div id="toy-collection">
      {toys.map((toy, index) => <ToyCard handleDelete={handleDelete} toy={toy} key={index} />)}
    </div>
  );
}

export default ToyContainer;
