import { render } from '@redwoodjs/testing/web'

import PlaceOrderPage from './PlaceOrderPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('PlaceOrderPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PlaceOrderPage />)
    }).not.toThrow()
  })
})
