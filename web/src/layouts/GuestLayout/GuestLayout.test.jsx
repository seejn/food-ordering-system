import { render } from '@redwoodjs/testing/web'

import GuestLayout from './GuestLayout'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('GuestLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<GuestLayout />)
    }).not.toThrow()
  })
})
