// import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'
import RestaurantsCell from 'src/components/RestaurantsCell'

const RestaurantsPage = () => {
  return (
    <>
      <Metadata title="Restaurants" description="Restaurants page" />

      <RestaurantsCell />
    </>
  )
}

export default RestaurantsPage
