import React, { useContext, useState } from 'react';
import mainContext from '../context/main-context';

export default function From() {
 const { friends, dispatch } = useContext(mainContext);
 const [name, setName] = useState('');
 const [age, setAge] = useState('');

 const checkFriendExist = (name) => {
  if (friends.find((friend) => friend.name === name)) {
   return true;
  }
  return false;
 };

 return (
  <form>
   <h3>Please Add/Update Friend</h3>
   <label htmlFor="name">Name: </label>
   <input
    value={name}
    onChange={(e) => setName(e.target.value)}
    type="text"
    name="name"
    id="nameInput"
   />
   <br />
   <label htmlFor="age">Age: </label>
   <input
    value={age}
    onChange={(e) => setAge(e.target.value)}
    type="number"
    name="age"
    id="ageInput"
   />
   <br />
   <button
    onClick={(e) => {
     e.preventDefault();
     if (checkFriendExist(name)) {
      dispatch({
       type: 'UPDATE_FRIEND',
       payload: { name, age },
      });
     } else {
      dispatch({
       type: 'CREATE_FRIEND',
       payload: { name, age },
      });
     }

     setAge('');
     setName('');
    }}
   >
    ADD/UPDATE
   </button>
  </form>
 );
}
