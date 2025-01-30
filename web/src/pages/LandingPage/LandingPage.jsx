// import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'
import RestaurantsCell from 'src/components/RestaurantsCell'
import MenusCell from 'src/components/MenusCell'

const LandingPage = ({ id }) => {
  return (
    <>
      <Metadata title="Landing" description="Landing page" />
      <div class="text-center text-3xl font-bold text-[#04AA6D]">
        <p>Welcome to our Food Ordering Service</p>
        <p>Your favorite food, delivered fast and fresh!</p>
      </div>
      <MenusCell />
      <RestaurantsCell />
    </>
  )
}

export default LandingPage
