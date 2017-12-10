import { renderComponent, expect } from '../test_helper'
import CommentBox from '../../src/components/comment_box'

describe('CommentBox', () => {
  let component;

  // The beforeEach runs before every 'it'
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

  // nesting a describe to show that those expects are related
  describe('entering some text', () => {
    beforeEach(() => {
      // in the component, go to all the HTML and find a specific HTML element 'textarea', we want to check that when the user clicks in the text area, starts typing, when this happens, it triggers the change event. The `simulate` is going to simulate the change event, and `new comment` is the new value (simulate an event)
      component.find('textarea').simulate('change', 'new comment');
    });

    it('shows that text in the textarea', () => {
      expect(component.find('textarea')).to.have.value('new comment');
    });

    it('when submitted, clears the input', () => {
      console.log(component); // the component it's the form
      component.simulate('submit')
      expect(component.find('textarea')).to.have.value('');
    });
  });
});
