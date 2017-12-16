import { SAVE_COMMENT } from '../actions/types'

export default function(state = [], action) {
  switch (action.type) {
    case SAVE_COMMENT:
      return [...state, action.payload] // this is the same as state.concat([action.payload])
    default:

  }
  return state;
}
