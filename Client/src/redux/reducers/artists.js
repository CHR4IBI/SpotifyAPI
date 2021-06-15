import { SET_ARTISTS } from '../constants/index'

const artistsReducer = (state = {}, action) => {
    if ( action.type === SET_ARTISTS ){
      console.log(action.artists.items)
      return { artists: action.artists.items }
    }
    return state
  };
  export default artistsReducer;