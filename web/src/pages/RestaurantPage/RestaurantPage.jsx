// import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'
import RestaurantCell from 'src/components/RestaurantCell'

const RestaurantPage = ({ id }) => {
  return (
    <>
      <Metadata title="Restaurant" description="Restaurant page" />

      <RestaurantCell id={id} />
      {/*
           My default route is named `restaurant`, link to me with:
           `<Link to={routes.restaurant()}>Restaurant</Link>`
        */}
    </>
  )
}

export default RestaurantPage
