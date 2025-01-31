import { Link, routes, navigate } from '@redwoodjs/router'
import { Metadata, useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast';
import { useState } from 'react';


const ResetPasswordPage = () => {
  const [email, setEmail] = useState("");

  const REQUEST_RESET_PASSWORD_MUTATION = gql`
    mutation requestResetPasswordMutation($input: RequestResetPasswordInput!){
      requestResetPassword(input: $input)
    }
  `

  const [ requestResetPassword ,{ loading } ] = useMutation(REQUEST_RESET_PASSWORD_MUTATION, {
    onCompleted: () => {
      toast.success("Reset Token has been sent to registered email.")
      navigate(routes.verifyResetPasswordToken())
    }
  });

  const handleResetPassword = (e) => {
    e.preventDefault();
    try{
      const response = requestResetPassword({
        variables: {
          input: {email:email}
        }
      })

    }catch(error){
      console.error(error)
      toast.error("Something went wrong")
    }
  }

  return (
    <>
      <Metadata title="ResetPassword" description="ResetPassword page" />

      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-[#04AA6D] mb-6 text-center">
          Forgot Password
        </h2>
        <form onSubmit={handleResetPassword}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-[#04AA6D]">
              Enter your Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-3 mt-2 border border-gray-300 rounded-md"
              placeholder="Enter your email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-[#04AA6D] text-white font-semibold rounded-md hover:bg-[#32a4e7]"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Reset Token"}
          </button>
          <div className="mt-4 text-center">
              <Link to={routes.login()} className="text-[#32a4e7] hover:text-[#04AA6D]">
                Back to Login
              </Link>
          </div>
        </form>
      </div>
    </>
  )
}

export default ResetPasswordPage
