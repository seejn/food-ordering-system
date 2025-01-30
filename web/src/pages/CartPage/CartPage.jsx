import { useState } from 'react'
import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

import { useCart } from 'src/hooks/useCart'


const CartPage = () => {
  const { items, setItems, addToCart, removeFromCart, getTotal } = useCart();

  const CartRow = ({item}) => {

    const handleChange = (event, id) => {
      console.log(id, items)
      const { name, value } = event.target

      setItems(prevItems => {
        return prevItems.map(item => {
          if(item.cartId === id){
            let newTotalPrice = item.price * value;
            return {...item, [name]: parseInt(value), total_price: newTotalPrice}
          }
          return item
        })
      })
    }

    const handleRemoveFromCart = (e, id) => {
      console.log("delete", id)
      removeFromCart(id)
    }

    return (
      <>
        <tr className="border-b">
          <td className="py-4 px-4">
            <div className="flex items-center">
              <img
                src={item.image}
                alt="Food Item"
                className="w-12 h-12 object-cover mr-4 rounded-lg"
              />
              <br />
            </div>
          </td>
          <td>
            <span className="font-semibold">{item.menu.name}</span>
          </td>
          <td className="py-4 px-4">Rs {item.price}</td>
          <td className="py-4 px-4">
            <input
              type="number"
              name="quantity"
              value={item.quantity}
              onChange={(e) => handleChange(e, item.cartId)}
              className="w-16 p-2 border border-gray-300 rounded-lg"
              min="1"
            />
          </td>
          <td className="py-4 px-4">Rs {item.total_price}</td>
          <td className="py-4 px-4">
              <button onClick={(e) => handleRemoveFromCart(e, item.cartId)} className="px-4 py-2 bg-red-400 text-white font-semibold rounded-lg hover:bg-red-300">
                Delete
              </button>
          </td>
        </tr>
      </>
    )
  }

  return (
    <>
      <Metadata title="Cart" description="Cart page" />

      <main className="px-6 py-12">
        <h2 className="text-3xl font-bold text-[#04AA6D] mb-8">Your Cart</h2>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="overflow-x-auto">
            <table className="w-full table-auto text-left">
              <thead>
                <tr className="border-b">
                  <th className="py-2 px-4">Image</th>
                  <th className="py-2 px-4">Name</th>
                  <th className="py-2 px-4">Price</th>
                  <th className="py-2 px-4">Quantity</th>
                  <th className="py-2 px-4">Total</th>
                  <th className="py-2 px-4">Action</th>
                </tr>
              </thead>
              <tbody>

                {
                  items.map(item => <CartRow item={item} />)
                }


              </tbody>
            </table>
          </div>

          <div className="mt-8 flex justify-between items-center">
            <div className="text-lg font-semibold text-[#32a4e7]">
              <p>
                Grand Total:{' '}
                <span className="font-bold text-[#d14836]">Rs {`${getTotal()}`}</span>
              </p>
            </div>
            <Link to={routes.placeOrder()}>
              <button className="px-8 py-3 bg-[#04AA6D] text-white font-semibold rounded-lg hover:bg-[#32a4e7]">
                Place Order
              </button>
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}

export default CartPage
