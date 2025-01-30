import { render } from '@redwoodjs/testing/web'

import RestaurantLayout from './RestaurantLayout'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('RestaurantLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<RestaurantLayout />)
    }).not.toThrow()
  })
})
