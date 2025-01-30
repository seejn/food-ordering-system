// import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'
import RestaurantsCell from 'src/components/RestaurantsCell'
import MenusCell from 'src/components/MenusCell'

const UserHomePage = () => {
  return (
    <>
      <Metadata title="UserHome" description="UserHome page" />
      <MenusCell />
      <RestaurantsCell />
    </>
  )
}

export default UserHomePage
