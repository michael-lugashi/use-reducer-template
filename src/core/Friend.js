import React, { useContext } from 'react';
import mainContext from '../context/main-context';

export default function Friend({ friend: {id, blacklist, name, age} }) {
 const { dispatch } = useContext(mainContext);

 return (
  <div
   id={id}
   style={{ color: blacklist ? 'red' : 'green' }}
   className="product-card"
  >
   <h5>{name}</h5>
   <h5>{age}</h5>
   <button
    onClick={() => {
     dispatch({
      type: 'TOGGLE',
      payload: { name },
     });
    }}
   >
    {blacklist ? 'Undo blacklist' : 'blacklist'}
   </button>
   <button
    onClick={() => {
     dispatch({
      type: 'DELETE_FRIEND',
      payload: { name },
     });
    }}
   >
    Remove
   </button>
  </div>
 );
}
