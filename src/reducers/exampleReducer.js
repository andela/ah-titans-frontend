import { CREATE_USER, } from '../actions/types';

function exampleReducer(
  state = {
    new_user: false,
  },
  action = {}
) {
  switch (action.type) {
  case CREATE_USER:
    console.log(action);

    return { ...state, new_user: true, };
  default:
    return state;
  }
}

export default exampleReducer;
