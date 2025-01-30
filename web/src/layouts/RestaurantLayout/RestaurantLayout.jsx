import { Link, routes, navigate } from '@redwoodjs/router'
import { useAuth } from 'src/hooks/useAuth'

const RestaurantLayout = ({ children }) => {
  const {logout} = useAuth()
  const handleLogout = () => {
    logout()
    navigate(routes.landing())
  }
  return (
    <>
      <div class="flex">
        <aside class="sticky top-0 w-64 bg-[#04AA6D] text-white h-screen p-6">
          <div class="text-2xl font-bold mb-12">Restaurant Dashboard</div>

          <nav>
            <ul class="space-y-4">
              <li>
                <Link
                  to={routes.restaurantOrder()}
                  class="block text-lg hover:bg-[#32a4e7] py-2 px-4 rounded-md"
                >
                  Orders
                </Link>
              </li>
              <li>
                <a
                  href="#delivery"
                  class="block text-lg hover:bg-[#32a4e7] py-2 px-4 rounded-md"
                >
                  Delivery
                </a>
              </li>
              <li>
                <a
                  href="#menus"
                  class="block text-lg hover:bg-[#32a4e7] py-2 px-4 rounded-md"
                >
                  Menus
                </a>
              </li>
              <li>
                <Link
                  to={routes.restaurantProfile()}
                  class="block text-lg hover:bg-[#32a4e7] py-2 px-4 rounded-md"
                >
                  Profile
                </Link>
              </li>
              <li>
                <a
                  onClick={handleLogout}
                  class="block text-lg hover:bg-[#32a4e7] py-2 px-4 rounded-md"
                >
                  Logout
                </a>
              </li>
            </ul>
          </nav>
        </aside>
        {children}
      </div>
    </>
  )
}

export default RestaurantLayout
