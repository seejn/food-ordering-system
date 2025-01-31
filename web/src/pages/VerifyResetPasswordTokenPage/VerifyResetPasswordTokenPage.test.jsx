import { render } from '@redwoodjs/testing/web'

import VerifyResetPasswordTokenPage from './VerifyResetPasswordTokenPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('VerifyResetPasswordTokenPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<VerifyResetPasswordTokenPage />)
    }).not.toThrow()
  })
})
