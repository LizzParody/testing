import { renderComponent, expect } from '../test_helper'
import CommentBox from '../../src/components/comment_box'

describe('CommentBox', () => {
  let component;

  // The beforeEach runs before every it
  beforeEach(() => {
    // It's returning a jquery object that contains our react component (jquery version of our component)
    component = renderComponent(CommentBox);
  });

  it('has the correct class', () => {
    expect(component).to.have.class('comment-box');
  })

  it('has a text area', () => {
    // The text area should exist
    expect(component.find('textarea')).to.exist;
  });

  it('has a button', () => {
    expect(component.find('button')).to.exist;
  });
});
