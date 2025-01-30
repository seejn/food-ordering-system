import { Link, routes } from '@redwoodjs/router';
const Menu = ({menu}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <img
        src={menu.image}
        alt="Food Item"
        className="w-full h-48 object-cover mb-4 rounded-lg"
      />
      <Link to={routes.menu({id: menu?.id})}>
        <h3 className="text-xl font-semibold">{menu?.name}</h3>
      </Link>
      <p className="text-sm text-gray-600">
      {menu?.description.length > 40 ? menu?.description.slice(0,40) + ' ...' : menu?.description}

      </p>
      <p className="mt-2 font-bold text-[#d14836]">Rs {menu?.price}</p>
    </div>
  )
}

export default Menu
