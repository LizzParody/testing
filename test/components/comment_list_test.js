import { renderComponent, expect } from '../test_helper';
import CommentList from '../../src/components/comment_list'

describe('CommentList', () => {
  let component;

  beforeEach(() => {
    // the third property to renderComponent we are passing the props
    const props = { comments: ['new comment', 'other new comment'] }
    component = renderComponent(CommentList, null, props);
  });

  it('shows an LI for each comment', () => {
    // find all the li in the component, get the length of that, and expect to be equal to the number of comments
    expect(component.find('li').length).to.equal(2);
  });

  it('shows each comment that is provided', () => {
    expect(component).to.contain('new comment')
    expect(component).to.contain('other new comment')
  });
});
