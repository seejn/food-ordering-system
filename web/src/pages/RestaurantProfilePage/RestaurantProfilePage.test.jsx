import { render } from '@redwoodjs/testing/web'

import RestaurantProfilePage from './RestaurantProfilePage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('RestaurantProfilePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<RestaurantProfilePage />)
    }).not.toThrow()
  })
})
