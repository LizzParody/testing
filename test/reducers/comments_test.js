import { expect } from '../test_helper';
import  commentReducer from '../../src/reducers/comments';
import { SAVE_COMMENT } from '../../src/actions/types';

// We are going to test the default case, we pass an action that we know  that the reducer
// is not suppose to work with, or respond to, the purpose of this is to test the initial state.
// the empty array we default it to, it will never be changed for something else.

describe('Comments Reducer', () => {
  // this should respond with an empty array by default
  it('handles action with unknown type', () => {
    expect(commentReducer(undefined, {})).to.eql([]) // commentReducer()).to.eql([]) to do a deep comparison (all the values in the reducer will be equal to []
  });
  // Second, we are going to test each action the reducer cares about, in this case SAVE_COMMENT
  it('SAVE_COMMENT', () => {
    const action = { type: SAVE_COMMENT, payload: 'new comment' }
    expect(commentReducer([], action)).to.eql(['new comment']) // expecting to call the reducer with the new comment payload and the action
  });
});
