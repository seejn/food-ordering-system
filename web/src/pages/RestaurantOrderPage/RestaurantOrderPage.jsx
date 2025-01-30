// import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

const RestaurantOrderPage = () => {
  return (
    <>
      <Metadata title="RestaurantOrder" description="RestaurantOrder page" />

      <div class="max-w-full p-6 grow">
        <div class="space-y-8 grid-cols-1 w-full">
          <div class="bg-white p-6 rounded-lg shadow-md">
            <h2 class="text-2xl font-semibold text-[#32a4e7]">New Orders</h2>
            <table class="w-full mt-4 border-collapse">
              <thead>
                <tr>
                  <th class="py-3 px-4 border-b text-left text-lg">Order ID</th>
                  <th class="py-3 px-4 border-b text-left text-lg">Customer</th>
                  <th class="py-3 px-4 border-b text-left text-lg">Total</th>
                  <th class="py-3 px-4 border-b text-left text-lg">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="py-3 px-4 border-b">#001</td>
                  <td class="py-3 px-4 border-b">John Doe</td>
                  <td class="py-3 px-4 border-b">$35.00</td>
                  <td class="py-3 px-4 border-b flex space-x-4">
                    <button class="bg-[#04AA6D] text-white px-4 py-2 rounded-md">
                      Confirm
                    </button>
                    <button class="bg-[#d14836] text-white px-4 py-2 rounded-md">
                      Reject
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="bg-white p-6 rounded-lg shadow-md">
            <h2 class="text-2xl font-semibold text-[#32a4e7]">
              Manage Order Status
            </h2>
            <form class="mt-4">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    for="order-id"
                    class="block text-lg font-medium text-gray-700"
                  >
                    Order ID
                  </label>
                  <input
                    type="text"
                    id="order-id"
                    class="w-full p-3 border rounded-md"
                    placeholder="Enter order ID"
                    value="#001"
                  />
                </div>
                <div>
                  <label
                    for="order-status"
                    class="block text-lg font-medium text-gray-700"
                  >
                    Order Status
                  </label>
                  <select
                    id="order-status"
                    class="w-full p-3 border rounded-md"
                  >
                    <option value="pending" selected>
                      Pending
                    </option>
                    <option value="preparing">Preparing</option>
                    <option value="ready">Ready for Delivery</option>
                    <option value="completed">Completed</option>
                  </select>
                </div>
              </div>
              <button
                type="submit"
                class="mt-4 bg-[#04AA6D] text-white px-6 py-3 rounded-md"
              >
                Update Status
              </button>
            </form>
          </div>

          <div class="bg-white p-6 rounded-lg shadow-md">
            <h2 class="text-2xl font-semibold text-[#32a4e7]">
              Assign Order to Delivery Personnel
            </h2>
            <form class="mt-4">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    for="order-id-delivery"
                    class="block text-lg font-medium text-gray-700"
                  >
                    Order ID
                  </label>
                  <input
                    type="text"
                    id="order-id-delivery"
                    class="w-full p-3 border rounded-md"
                    placeholder="Enter order ID"
                    value="#001"
                  />
                </div>
                <div>
                  <label
                    for="delivery-personnel"
                    class="block text-lg font-medium text-gray-700"
                  >
                    Assign To
                  </label>
                  <select
                    id="delivery-personnel"
                    class="w-full p-3 border rounded-md"
                  >
                    <option value="john" selected>
                      John Smith
                    </option>
                    <option value="mary">Mary Jane</option>
                    <option value="lucas">Lucas Brown</option>
                  </select>
                </div>
              </div>
              <button
                type="submit"
                class="mt-4 bg-[#04AA6D] text-white px-6 py-3 rounded-md"
              >
                Assign Delivery
              </button>
            </form>
          </div>

          <div class="bg-white p-6 rounded-lg shadow-md">
            <h2 class="text-2xl font-semibold text-[#32a4e7]">Order History</h2>
            <table class="w-full mt-4 border-collapse">
              <thead>
                <tr>
                  <th class="py-3 px-4 border-b text-left text-lg">Order ID</th>
                  <th class="py-3 px-4 border-b text-left text-lg">Customer</th>
                  <th class="py-3 px-4 border-b text-left text-lg">Total</th>
                  <th class="py-3 px-4 border-b text-left text-lg">Status</th>
                  <th class="py-3 px-4 border-b text-left text-lg">Date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="py-3 px-4 border-b">#001</td>
                  <td class="py-3 px-4 border-b">John Doe</td>
                  <td class="py-3 px-4 border-b">$35.00</td>
                  <td class="py-3 px-4 border-b">Completed</td>
                  <td class="py-3 px-4 border-b">2025-01-20</td>
                </tr>
                <tr>
                  <td class="py-3 px-4 border-b">#002</td>
                  <td class="py-3 px-4 border-b">Alice Cooper</td>
                  <td class="py-3 px-4 border-b">$15.50</td>
                  <td class="py-3 px-4 border-b">Pending</td>
                  <td class="py-3 px-4 border-b">2025-01-22</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}

export default RestaurantOrderPage
