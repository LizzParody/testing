import { renderComponent, expect } from '../test_helper';
import App from '../../src/components/app'; // the component the want to test 'app'

// Use 'describe' to group together similar test
describe('App', () => { // App as a string, for the report when we run the test, we will get a report saying what passed and what failed
  let component;
  beforeEach(() => {
    component = renderComponent(App);
  })

  it('shows a comment box', () => {
    // to check that the component has the class 'comment-box'
    expect(component.find('.comment-box')).to.exist;
  })
});
