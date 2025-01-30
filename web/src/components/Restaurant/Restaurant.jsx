import { Link, routes } from '@redwoodjs/router';

const Restaurant = ({restaurant}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <img
        src={restaurant?.image}
        alt="Restaurant"
        className="w-full h-48 object-cover mb-4 rounded-lg"
      />
      <Link to={routes.restaurant({id: restaurant?.id})}>
        <h3 className="text-xl font-semibold">{restaurant?.name}</h3>
      </Link>
      <p className="text-sm text-gray-600">
        {restaurant?.description.length > 40 ? restaurant?.description.slice(0,40) + ' ...' : restaurant?.description}
      </p>
      <p className="mt-2 font-bold text-[#d14836]">Location: {restaurant?.city}</p>
    </div>
  )
}

export default Restaurant
