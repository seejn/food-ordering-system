import { render } from '@redwoodjs/testing/web'

import MenusPage from './MenusPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('MenusPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<MenusPage />)
    }).not.toThrow()
  })
})
