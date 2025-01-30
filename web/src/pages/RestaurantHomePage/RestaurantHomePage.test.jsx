import { render } from '@redwoodjs/testing/web'

import RestaurantHomePage from './RestaurantHomePage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('RestaurantHomePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<RestaurantHomePage />)
    }).not.toThrow()
  })
})
