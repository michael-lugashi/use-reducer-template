import React, { useContext } from 'react';
import Friend from './Friend';
import mainContext from '../context/main-context';

export default function List() {
 const { friends } = useContext(mainContext);

 return (
  <div>
   <h3>List of Friends:</h3>
   {friends.map((friend) => {
    return <Friend key={friend.id} friend={friend} />;
   })}
  </div>
 );
}
