import {useState, useEffect} from "react"
import { useCart } from "src/hooks/useCart"
import {v4 as uuidv4} from 'uuid'

export const QUERY = gql`
  query FindMenuQuery($id: Int!) {
    menu: menu(id: $id) {
      id
      name
      description
      price
      availability
      image
      ingredients
      Restaurant_Menu{
        restaurant{
          id
        }
      }
    }
  }
`



export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ menu }) => {
  const { addToCart } = useCart();

  const [item, setItems] = useState({
    image: menu?.image || "",
    menu: menu || null,
    quantity: 1,
    price: menu?.price || 0,
    total_price: menu?.price || 0,
    restaurantId: menu?.Restaurant_Menu[0]?.restaurant?.id || null,
  });

  const handleQuantityChange = (event) => {
    const newQuantity = parseInt(event.target.value, 10);
    const newPrice = menu.price * newQuantity;
    setItems(prevItem => ({
      ...prevItem,
      quantity: newQuantity,
      total_price: newPrice
    }));
  };


  const handleAddToCart = () => {
    addToCart({cartId: uuidv4(), ...item})
  }
  return (
    <>
      <main className="px-6 py-12">
        <div className="flex space-x-12">
          <div className="w-1/2">
            <img
              src={menu.image}
              alt="Menu Item"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
          <div className="w-1/2">
            <h2 className="text-3xl font-bold text-[#04AA6D] mb-4">
              { menu?.name }
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              {menu?.description}
            </p>
            <p className="text-md text-gray-600 mb-6">
              Ingredients: {menu?.ingredients}
            </p>

            <div className="flex items-center space-x-4 mb-6">
              <span className="text-xl font-bold text-[#d14836]">Rs. {menu?.price}</span>
              <div className="flex items-center space-x-2">
                <label htmlFor="quantity" className="text-lg font-semibold">
                  Quantity:
                </label>
                <input
                  type="number"
                  id="quantity"
                  name="quantity"
                  value={item.quantity}
                  onChange={handleQuantityChange}
                  min="1"
                  className="w-16 p-2 border border-gray-300 rounded-lg"
                />
              </div>
            </div>

            <button
              onClick={handleAddToCart}
              className="px-8 py-3 bg-[#04AA6D] text-white font-semibold rounded-lg hover:bg-[#32a4e7]"
            >
              Add to Cart
            </button>
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-[#04AA6D] mb-4">
            Description
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            Our Pizza Margherita is made with the finest ingredients. The dough
            is hand-stretched, and we use authentic Italian mozzarella. It's
            then topped with fresh basil leaves and drizzled with olive oil. The
            result is a delicious, crispy pizza that's sure to satisfy your
            taste buds.
          </p>
        </div>
      </main>
    </>
  )
}
