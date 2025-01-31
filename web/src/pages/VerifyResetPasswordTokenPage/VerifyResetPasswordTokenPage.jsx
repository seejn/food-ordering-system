import { Link, routes, navigate } from '@redwoodjs/router'
import { Metadata, useMutation } from '@redwoodjs/web'
import { useState } from "react"
import { toast } from '@redwoodjs/web/toast'

const VerifyResetPasswordTokenPage = () => {

  const VERIFY_RESET_PASSWORD_TOKEN = gql`
    mutation VerifyResetPasswordToken($input: VerifyResetPasswordTokenInput!) {
      verifyResetPasswordToken(input: $input)
    }
  `

  const [token, setToken] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [verifyResetPasswordToken, {loading}] = useMutation(VERIFY_RESET_PASSWORD_TOKEN, {
    onCompleted: () => {
      toast.success("Password reset successfully")
      navigate(routes.login())
    }
  })

  const handleVerifyToken = async (e) => {
    e.preventDefault()
    try {
      await verifyResetPasswordToken({ variables: { input: { token, newPassword } } })
    } catch (error) {
      console.error('Error resetting password:', error)
      toast.error('Error resetting password')
    }
  }
  return (
    <>
      <Metadata
        title="VerifyResetPasswordToken"
        description="VerifyResetPasswordToken page"
      />

      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-[#04AA6D] mb-6 text-center">
          Verify Your Token
        </h2>
        <form onSubmit={handleVerifyToken}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-[#04AA6D]">
              Enter New Password
            </label>
            <input
              type="password"
              id="token"
              className="w-full p-3 mt-2 border border-gray-300 rounded-md"
              placeholder="Enter New Password"
              required
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-[#04AA6D]">
              Enter your Token
            </label>
            <input
              type="text"
              id="token"
              className="w-full p-3 mt-2 border border-gray-300 rounded-md"
              placeholder="Enter your Token"
              required
              value={token}
              onChange={(e) => setToken(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-[#04AA6D] text-white font-semibold rounded-md hover:bg-[#32a4e7]"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send"}
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

export default VerifyResetPasswordTokenPage
