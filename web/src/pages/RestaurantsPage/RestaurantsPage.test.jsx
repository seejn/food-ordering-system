import { render } from '@redwoodjs/testing/web'

import RestaurantsPage from './RestaurantsPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('RestaurantsPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<RestaurantsPage />)
    }).not.toThrow()
  })
})
