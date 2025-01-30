// import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

const ResetPasswordPage = () => {
  return (
    <>
      <Metadata title="ResetPassword" description="ResetPassword page" />

      <h1>ResetPasswordPage</h1>
      <p>
        Find me in{' '}
        <code>./web/src/pages/ResetPasswordPage/ResetPasswordPage.jsx</code>
      </p>
      {/*
           My default route is named `resetPassword`, link to me with:
           `<Link to={routes.resetPassword()}>ResetPassword</Link>`
        */}
    </>
  )
}

export default ResetPasswordPage
