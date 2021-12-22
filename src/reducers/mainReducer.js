const shortid = require('shortid');

export const mainReducer = (state, action) => {
 switch (action.type) {
  case 'TOGGLE':
   let newFriends = state.map((friend) => {
    if (friend.name === action.payload.name) {
     return { ...friend, blacklist: !friend.blacklist };
    }
    return friend;
   });
   return newFriends;
  case 'CREATE_FRIEND':
   return [
    ...state,
    {
     id: shortid.generate(),
     name: action.payload.name,
     age: action.payload.age,
     blacklist: false,
    },
   ];
  case 'UPDATE_FRIEND':
   const currentFriend = state.find(
    (product) => product.name === action.payload.name
   );
   currentFriend.age = action.payload.age;
   return [...state];
  case 'DELETE_FRIEND':
   let newDel = state.filter((friend) => friend.name !== action.payload.name);
   return newDel;
  default:
   return state;
 }
};
