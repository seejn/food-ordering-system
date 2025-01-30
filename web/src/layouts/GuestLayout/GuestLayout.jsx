import { Link, routes } from '@redwoodjs/router';
const GuestLayout = ({ children }) => {
  return (
    <>
      <nav class="sticky top-0 flex justify-between items-center p-6 bg-[#04AA6D] text-white mb-8">
        <Link to={routes.landing()}>
          <div class="text-xl font-bold">Foodify</div>
        </Link>

        <div class="flex space-x-8">
          <Link to={routes.login()} class="hover:text-[#32a4e7]">
            Login
          </Link>
          <Link to={routes.signup()} class="hover:text-[#32a4e7]">
            Sign Up
          </Link>
          <Link to={routes.menus()} class="hover:text-[#32a4e7]">
            Foods
          </Link>
          <Link to={routes.restaurants()} class="hover:text-[#32a4e7]">
            Restaurants
          </Link>
        </div>
      </nav>

      <main class="flex flex-col gap-20 justify-center items-center min-h-[50vh]">

        {children}
      </main>

      <footer class="bg-[#04AA6D] text-white p-8 mt-8">
        <div class="flex justify-between">
          <Link to={routes.landing()}>
            <div class="text-xl font-bold">Foodify</div>
          </Link>

          <div class="space-y-4">
            <a href="#about" class="hover:text-[#32a4e7]">
              About Us
            </a>
            <a href="#contact" class="hover:text-[#32a4e7]">
              Contact
            </a>
          </div>
        </div>

        <div class="text-center text-sm mt-6">
          <p>&copy; 2025 Foodify. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}

export default GuestLayout
