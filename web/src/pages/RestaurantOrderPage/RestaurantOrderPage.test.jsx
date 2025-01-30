import { render } from '@redwoodjs/testing/web'

import RestaurantOrderPage from './RestaurantOrderPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('RestaurantOrderPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<RestaurantOrderPage />)
    }).not.toThrow()
  })
})
