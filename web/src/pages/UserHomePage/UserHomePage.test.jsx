import { render } from '@redwoodjs/testing/web'

import UserHomePage from './UserHomePage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('UserHomePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<UserHomePage />)
    }).not.toThrow()
  })
})
