// import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

const UserProfilePage = ({id}) => {
  return (
    <>
      <Metadata title="UserProfile" description="UserProfile page" />

      <main class="min-h-screen px-8 py-12">
        <div class="max-w-6xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <h2 class="text-3xl font-bold text-[#04AA6D] mb-8 text-center">
            Your Profile
          </h2>

          <form
            action="/update-profile"
            method="POST"
            enctype="multipart/form-data"
          >
            <div class="text-center mb-8">
              <img
                src="https://via.placeholder.com/150"
                alt="Avatar"
                class="rounded-full w-32 h-32 mx-auto mb-4"
              />
              <input
                type="file"
                name="avatar"
                class="text-sm mt-2 bg-[#32a4e7] text-white px-4 py-2 rounded focus:outline-none w-full max-w-xs mx-auto"
              />
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label
                  for="first-name"
                  class="block text-sm font-medium text-[#04AA6D]"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="first-name"
                  name="first_name"
                  value="John"
                  class="w-full p-4 border border-gray-300 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-[#32a4e7]"
                  required
                />
              </div>

              <div>
                <label
                  for="last-name"
                  class="block text-sm font-medium text-[#04AA6D]"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="last-name"
                  name="last_name"
                  value="Doe"
                  class="w-full p-4 border border-gray-300 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-[#32a4e7]"
                  required
                />
              </div>

              <div>
                <label
                  for="email"
                  class="block text-sm font-medium text-[#04AA6D]"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value="john.doe@example.com"
                  class="w-full p-4 border border-gray-300 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-[#32a4e7]"
                  required
                />
              </div>

              <div>
                <label
                  for="location"
                  class="block text-sm font-medium text-[#04AA6D]"
                >
                  Location
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  value="New York, USA"
                  class="w-full p-4 border border-gray-300 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-[#32a4e7]"
                  required
                />
              </div>
            </div>

            <div class="mt-8 text-center">
              <button
                type="submit"
                class="bg-[#32a4e7] text-white py-3 px-8 rounded-lg focus:outline-none hover:bg-[#04AA6D] transition duration-200"
              >
                Save Changes
              </button>
            </div>
          </form>

          <div class="mt-6 text-center">
            <a
              href="account-settings.html"
              class="text-[#32a4e7] hover:text-[#04AA6D] text-sm"
            >
              Go to Account Settings
            </a>
          </div>
        </div>
      </main>
    </>
  )
}

export default UserProfilePage
