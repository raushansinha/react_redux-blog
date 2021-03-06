import {
  FETCH_POSTS,
  FETCH_POST,
  DELETE_POST
} from "../actions";
import _ from 'lodash'

export default function (state = {}, action) {
  switch (action.type) {
    case FETCH_POST:
    //   console.log(action.payload.data);
    //   const post = action.payload.data;
    //   const newState = { ...state };
    //   newState[post.id] = post;
    //   return newState

    //same as above
      return {...state, [action.payload.data.id]: action.payload.data };
    case FETCH_POSTS:
      //console.log(action.payload.data);
      return _.mapKeys(action.payload.data, 'id')
    case DELETE_POST:
        return _.omit(state, action.payload);
    default:
      return state;
  }
}
