import { Link, routes, navigate } from '@redwoodjs/router'
import { Metadata, useMutation } from '@redwoodjs/web'
import { useState } from 'react'
import { createAuthentication } from '@redwoodjs/auth'

const SignupPage = () => {
  const [formData, setFormData] = useState({
    role: 'USER',
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const CREATE_USER = gql`
    mutation createUserMutation($input: CreateUserInput!){
      createUser(input: $input){
        id
      }
    }
  `

  const [create] = useMutation(CREATE_USER);

  const handleSubmit = async (event) => {
    event.preventDefault()

    // Validate that password and confirm password match
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords don't match")
      return
    }

    try {
      const {confirmPassword, ...rest } = formData;
      await create({
        variables: {
          input: rest
        }
      });
      navigate(routes.login())
    } catch (error) {
      console.error('Signup failed:', error)
    }
  }

  return (
    <>
      <Metadata title="Signup" description="Signup page" />

      <main className="flex justify-center items-center min-h-screen">
        <div className="bg-white p-8 rounded-lg shadow-lg w-96">
          <h2 className="text-2xl font-bold text-[#04AA6D] mb-6 text-center">
            Sign Up
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-medium text-[#04AA6D]">
                Sign up as
              </label>
              <div className="flex items-center space-x-4 mt-2">
                {['restaurant', 'user', 'delivery'].map((role) => (
                  <label key={role} className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="role"
                      value={role.toUpperCase()}
                      className="text-[#04AA6D]"
                      checked={formData.role === role.toUpperCase()}
                      onChange={handleChange}
                    />
                    <span>{role.charAt(0).toUpperCase() + role.slice(1)}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-[#04AA6D]">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 mt-2 border border-gray-300 rounded-md"
                placeholder="Enter your full name"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-[#04AA6D]">
                Email
              </label>
              <input
                type="text"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 mt-2 border border-gray-300 rounded-md"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium text-[#04AA6D]">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full p-3 mt-2 border border-gray-300 rounded-md"
                placeholder="Enter your password"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-[#04AA6D]">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full p-3 mt-2 border border-gray-300 rounded-md"
                placeholder="Confirm your password"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-[#04AA6D] text-white font-semibold rounded-md hover:bg-[#32a4e7]"
            >
              Sign Up
            </button>

            <div className="mt-4 text-center">
              <p>
                Already have an account?{' '}
                <Link to={routes.login()} className="text-[#32a4e7] hover:text-[#04AA6D]">
                  Login
                </Link>
              </p>
            </div>
          </form>
        </div>
      </main>
    </>
  )
}

export default SignupPage
