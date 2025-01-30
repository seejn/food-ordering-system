// import { Link, routes } from '@redwoodjs/router'
import { Metadata, useMutation } from '@redwoodjs/web'
import { useState } from 'react'
import { routes, navigate } from '@redwoodjs/router'

import { useAuth } from 'src/hooks/useAuth'


const LoginPage = () => {
  const {setAuth, getRole, getUser} = useAuth()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)

  const LOG_IN_MUTATION = gql`
    mutation logInMutation($input: LogInInput!) {
      logIn(input: $input) {
        token
        user {
          id
          name
          email
          role
        }
      }
    }
  `

  const [logIn]= useMutation(LOG_IN_MUTATION, {
    onCompleted: ({ logIn }) => {
      const { token, user } = logIn
      setAuth(token, user)

      // const navigation = {
      //   USER: () => routes.userHome(),
      //   RESTAURANT: () => routes.restaurantHome(),
      // }
      // navigation[user?.role]();

      const roleRedirects = {
        USER: routes.userHome(),
        RESTAURANT: routes.restaurantHome(),
      }

      navigate(roleRedirects[user.role] || routes.login())

      console.log("logged in")
    },
    onError: (error) => {
      setError(error.message) // Show the error message if login fails
    },
  })

  const onSubmit = async (e) => {
    e.preventDefault()
    try {
      await logIn({
        variables: {
          input: {
            email: email,
            password: password
          }
        }
      })
    } catch (e) {
      console.error(e)
      setError('Login failed. Please check your credentials.')
    }
  }

  return (
    <>
      <Metadata title="Login" description="Login page" />
      <main className="flex justify-center items-center min-h-screen">
        <div className="bg-white p-8 rounded-lg shadow-lg w-96">
          <h2 className="text-2xl font-bold text-[#04AA6D] mb-6 text-center">
            Login
          </h2>
          {error && <p className="text-red-500 text-center">{error}</p>}
          <form onSubmit={onSubmit}>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-[#04AA6D]"
              >
                Email
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
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-[#04AA6D]"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full p-3 mt-2 border border-gray-300 rounded-md"
                placeholder="Enter your password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-[#04AA6D] text-white font-semibold rounded-md hover:bg-[#32a4e7]"
            >
              Login
            </button>
            <div className="mt-4 text-center">
              <a
                href="/reset-password"
                className="text-[#32a4e7] hover:text-[#04AA6D]"
              >
                Forgot Password?
              </a>
            </div>
          </form>
        </div>
      </main>
    </>
  )
}

export default LoginPage
