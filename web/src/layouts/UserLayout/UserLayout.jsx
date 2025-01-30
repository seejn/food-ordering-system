import { Link, navigate, routes } from '@redwoodjs/router';
import {useAuth} from "src/hooks/useAuth"
import { useCart } from 'src/hooks/useCart';

const UserLayout = ({ children }) => {
  const {logout} = useAuth()
  const {items} = useCart()
  const handleLogout = () => {
    logout()
    navigate(routes.login())
  }
   return (
    <>
      <header className="sticky top-0 bg-[#04AA6D] text-white py-4 px-6">
        <div className="flex justify-between items-center">
        <Link to={routes.userHome()}>
          <div className="text-xl font-bold">Foodify</div>
        </Link>

          <nav className="flex items-center space-x-6 text-lg">
            <Link to={routes.menus()} className="hover:text-[#32a4e7]">
              Foods
            </Link>
            <Link to={routes.restaurants()} className="hover:text-[#32a4e7]">
              Restaurants
            </Link>

            <div className="relative">
              <input
                type="text"
                className="px-4 py-2 rounded-lg w-72 text-white outline-white  focus:outline-white"
                placeholder="Search for food, restaurant..."
              />
              <button className="absolute top-0 right-0 bg-[#32a4e7] text-white rounded-r-lg p-2">
                <i className="fas fa-search"></i>
              </button>
            </div>

            <div className="relative">
              <Link to={routes.cart()} className="hover:text-[#32a4e7]">

                <i className="fas fa-shopping-cart fa-2x"></i>
                <span className="absolute top-0 right-0 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {items.length}
                </span>
              </Link>
            </div>
            <a href="#" onClick={handleLogout} className="hover:text-[#32a4e7]">
              Logout
            </a>
          </nav>
        </div>
      </header>
      <main className="flex flex-col gap-20 justify-center items-center min-h-[50vh]">
        {children}
      </main>
      <footer className="bg-[#04AA6D] text-white p-8 mt-12">
        <div className="flex justify-between">
        <Link to={routes.userHome()}>
          <div className="text-xl font-bold">Foodify</div>
        </Link>
          <div className="space-y-4">
            <a href="#about" className="hover:text-[#32a4e7]">
              About Us
            </a>
            <a href="#contact" className="hover:text-[#32a4e7]">
              Contact
            </a>
          </div>
        </div>
        <div className="text-center text-sm mt-6">
          <p>&copy; 2025 Foodify. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}

export default UserLayout
