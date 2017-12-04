import { renderComponent, expect } from '../test_helper';
import App from '../../src/components/app'; // the component the want to test 'app'

// Use 'describe' to group together similar test
describe('App', () => { // App as a string, for the report when we run the test, we will get a report saying what passed and what failed

  // Use 'it' to test a single attribute of a target
  it('shows the correct test', () => {

    // Crate an instance of App
    const component = renderComponent(App)

    // Use 'expect' to make an assertion about a target
    expect(component).to.contain('React simple starter')

  })

})
