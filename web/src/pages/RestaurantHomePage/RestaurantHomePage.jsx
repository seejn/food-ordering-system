// import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

const RestaurantHomePage = () => {
  return (
    <>
      <Metadata title="RestaurantHome" description="RestaurantHome page" />

      <main class="flex-1 p-6">
        <div class="space-y-8">
          <section id="orders">
            <h2 class="text-2xl font-semibold text-[#04AA6D] mb-4">Orders</h2>
            <div class="bg-white p-6 rounded-lg shadow-md">
              <table class="w-full table-auto">
                <thead>
                  <tr>
                    <th class="px-4 py-2 border">Order ID</th>
                    <th class="px-4 py-2 border">Customer</th>
                    <th class="px-4 py-2 border">Status</th>
                    <th class="px-4 py-2 border">Total</th>
                    <th class="px-4 py-2 border">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="px-4 py-2 border">#1023</td>
                    <td class="px-4 py-2 border">John Doe</td>
                    <td class="px-4 py-2 border">Pending</td>
                    <td class="px-4 py-2 border">$45.00</td>
                    <td class="px-4 py-2 border">
                      <button class="bg-[#32a4e7] text-white px-4 py-2 rounded-md">
                        View
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td class="px-4 py-2 border">#1024</td>
                    <td class="px-4 py-2 border">Jane Smith</td>
                    <td class="px-4 py-2 border">Completed</td>
                    <td class="px-4 py-2 border">$32.00</td>
                    <td class="px-4 py-2 border">
                      <button class="bg-[#32a4e7] text-white px-4 py-2 rounded-md">
                        View
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section id="delivery">
            <h2 class="text-2xl font-semibold text-[#04AA6D] mb-4">Delivery</h2>
            <div class="bg-white p-6 rounded-lg shadow-md">
              <table class="w-full table-auto">
                <thead>
                  <tr>
                    <th class="px-4 py-2 border">Order ID</th>
                    <th class="px-4 py-2 border">Delivery Status</th>
                    <th class="px-4 py-2 border">Delivery Person</th>
                    <th class="px-4 py-2 border">Estimated Time</th>
                    <th class="px-4 py-2 border">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="px-4 py-2 border">#1023</td>
                    <td class="px-4 py-2 border">In Transit</td>
                    <td class="px-4 py-2 border">Mike</td>
                    <td class="px-4 py-2 border">45 min</td>
                    <td class="px-4 py-2 border">
                      <button class="bg-[#32a4e7] text-white px-4 py-2 rounded-md">
                        Track
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td class="px-4 py-2 border">#1022</td>
                    <td class="px-4 py-2 border">Delivered</td>
                    <td class="px-4 py-2 border">Sarah</td>
                    <td class="px-4 py-2 border">30 min</td>
                    <td class="px-4 py-2 border">
                      <button class="bg-[#32a4e7] text-white px-4 py-2 rounded-md">
                        View
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </main>
    </>
  )
}

export default RestaurantHomePage
