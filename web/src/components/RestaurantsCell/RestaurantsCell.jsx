import Restaurant from "src/components/Restaurant"
export const QUERY = gql`
  query RestaurantsQuery {
    restaurants {
      id
      name
      image
      description
      open
      close
      phone
      website
      city
      state
      zipcode
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ restaurants }) => {
  const restaurantsUI = restaurants.map(restaurant => <Restaurant restaurant={restaurant} />)
  return (
    <>
      <h1 className='text-3xl font-bold'>Restaurants</h1>
      <div className='flex gap-5'>
        {restaurantsUI}
      </div>
    </>
  )
}
