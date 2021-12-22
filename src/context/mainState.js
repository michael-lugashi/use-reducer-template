import React, { useReducer } from 'react';
import mainContext from './main-context';
import { mainReducer } from '../reducers/mainReducer';
const MainState = (props) => {
 const [friends, dispatch] = useReducer(mainReducer, []);
 return (
  <mainContext.Provider
   value={{
    friends,
    dispatch,
   }}
  >
   {props.children}
  </mainContext.Provider>
 );
};

export default MainState;
