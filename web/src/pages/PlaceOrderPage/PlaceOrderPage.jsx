import { Link, routes, navigate } from '@redwoodjs/router'
import { Metadata, useMutation } from '@redwoodjs/web'
import { useCart } from 'src/hooks/useCart'
import { useAuth } from 'src/hooks/useAuth'
import {v4 as uuidv4} from "uuid"

import { toast } from '@redwoodjs/web/toast'

const ItemRow = ({item}) => {
  return (
    <>
      <tr>
        <td className="py-3 px-4 border-b">{item.menu.name}</td>
        <td className="py-3 px-4 border-b">{item.quantity}</td>
        <td className="py-3 px-4 border-b">Rs. {item.total_price}</td>
      </tr>
    </>
  )
}

const CREATE_ORDER = gql`
  mutation createOrderMutation($input: CreateOrderInput!){
    createOrder(input: $input){
      id
      userId
      totalAmount
      paymentMethod
    }
  }
`

const CREATE_ORDERED_ITEM = gql`
  mutation createOrderedItemMutation($input: CreateOrderedItemInput!){
    createOrderedItem(input: $input){
      id
      menuId
      image
      quantity
      price
      totalPrice
      orderId
      restaurantId
    }
  }
`

const PlaceOrderPage = () => {
  const { items, getTotal, clearCart } = useCart()
  const {getUser} = useAuth()
  const {id: userId} = getUser()
  console.log(items)

  const [createOrder] = useMutation(CREATE_ORDER);
  const [createOrderedItem] = useMutation(CREATE_ORDERED_ITEM);

  const orderPayload = {
    userId: userId,
    totalAmount: getTotal(),
    paymentMethod: "CASH_ON_DELIVERY",
  }

  const createOrderedItemPayload = (orderId) => {
    return items.map(item => {
      return{
        menuId: item.menu.id,
        image: item.image,
        quantity: item.quantity,
        price: item.price,
        totalPrice: item.total_price,
        orderId: orderId,
        restaurantId: item.restaurantId,
    }
    })
  }

  const itemsUI = items.length > 0 ? items.map(item => <ItemRow key={uuidv4()}  item={item} />) : <p className='text-red-400 text-center text-xl font-bold'>No Items in Cart</p>

  const handleConfirmOrder = async (e) => {
    e.preventDefault()

    try{
      const response = await createOrder({
        variables: {
          input: orderPayload
        }
      });

      const {id} = response.data.createOrder;

      const orderedItemPayloads = createOrderedItemPayload(id);
      const orderedItemPromises = orderedItemPayloads.map(payload =>
          createOrderedItem({ variables: { input: payload } })
      );


      await Promise.all(orderedItemPromises);
      clearCart();
      toast.success("Your order has been placed successfully");
      navigate(routes.userHome())
    }catch(error){
      console.error('Error creating order or ordered items:', error);
    }
  }

  return (
    <>
      <Metadata title="PlaceOrder" description="PlaceOrder page" />

      <div className="max-w-full p-6">
        <header className="mb-8">
          <h1 className="text-3xl font-semibold text-[#04AA6D]">Payment Details</h1>
        </header>

        <div className="flex gap-10 bg-white p-6 rounded-lg shadow-md space-y-8">
          <div>
            <h2 className="text-2xl font-semibold text-[#32a4e7]">Order Summary</h2>
            <table className="w-full mt-4 border-collapse">
              <thead>
                <tr>
                  <th className="py-3 px-4 border-b text-left text-lg">Item</th>
                  <th className="py-3 px-4 border-b text-left text-lg">Quantity</th>
                  <th className="py-3 px-4 border-b text-left text-lg">Price</th>
                </tr>
              </thead>
              <tbody>
                {itemsUI}
              </tbody>
            </table>
          </div>
          <div>
            {/* <div className="mt-6 flex justify-between">
              <h3 className="text-xl font-medium">Subtotal</h3>
              <span className="text-lg">$22.00</span>
            </div>
            <div className="mt-2 flex justify-between">
              <h3 className="text-xl font-medium">Delivery Fee</h3>
              <span className="text-lg">$5.00</span>
            </div> */}
            <div className="mt-2 flex justify-between">
              <h3 className="text-xl font-medium">Grand Total</h3>
              <span className="text-lg font-semibold">Rs. {getTotal()}</span>
            </div>

            <div className="mt-6">
              <h2 className="text-2xl font-semibold text-[#32a4e7]">
                Payment Method
              </h2>
              <form className="mt-4">
                <div className="flex items-center space-x-4">
                  <input
                    type="radio"
                    id="cash-on-delivery"
                    name="payment-method"
                    value="cash-on-delivery"
                    className="h-5 w-5 text-[#04AA6D]"
                    checked
                  />
                  <label htmlFor="cash-on-delivery" className="text-lg">
                    Cash on Delivery
                  </label>
                </div>

                <button
                  type="submit"
                  className="mt-6 bg-[#04AA6D] text-white px-6 py-3 rounded-md w-full"
                  onClick={handleConfirmOrder}
                >
                  Confirm Order
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PlaceOrderPage
