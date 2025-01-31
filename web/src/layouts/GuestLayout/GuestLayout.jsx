import { Link, routes } from '@redwoodjs/router';
const GuestLayout = ({ children }) => {
  return (
    <>
      <nav className="sticky top-0 flex justify-between items-center p-6 bg-[#04AA6D] text-white mb-8">
        <Link to={routes.landing()}>
          <div className="text-xl font-bold">Foodify</div>
        </Link>

        <div className="flex space-x-8">
          <Link to={routes.login()} className="hover:text-[#32a4e7]">
            Login
          </Link>
          <Link to={routes.signup()} className="hover:text-[#32a4e7]">
            Sign Up
          </Link>
          <Link to={routes.menus()} className="hover:text-[#32a4e7]">
            Foods
          </Link>
          <Link to={routes.restaurants()} className="hover:text-[#32a4e7]">
            Restaurants
          </Link>
        </div>
      </nav>

      <main className="flex flex-col gap-20 justify-center items-center min-h-[65vh]">

        {children}
      </main>

      <footer className="bg-[#04AA6D] text-white p-8 mt-8">
        <div className="flex justify-between">
          <Link to={routes.landing()}>
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

export default GuestLayout
