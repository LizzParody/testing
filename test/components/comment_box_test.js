import { renderComponent, expect } from '../test_helper'
import CommentBox from '../../src/components/comment_box'

describe('CommentBox', () => {
  it('has the correct class', () => {
    const component = renderComponent(CommentBox);
    expect(component).to.have.class('comment-box')
  })

  it('has a text area', () => {
    // It's returning a jquery object that contains our react component (jquery version of our component)
    const component = renderComponent(CommentBox);
    // The text area should exist
    expect(component.find('textarea')).to.exist;
  });

  it('has a button', () => {
    const component = renderComponent(CommentBox);
    expect(component.find('button')).to.exist;
  });
});
