export const QUERY = gql`
  query FindRestaurantQuery($id: Int!) {
    restaurant: restaurant(id: $id) {
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
      user {
        email
      }
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ restaurant }) => {
  return (
    <>
      <main class="px-6 py-12">
        <div class="grid grid-cols-2 gap-12">
          <div>
            <img
              src={restaurant?.image}
              alt="Restaurant Image"
              class="w-full h-auto rounded-lg shadow-lg"
            />
          </div>

          <div>
            <h2 class="text-3xl font-bold text-[#04AA6D] mb-4">
              {restaurant?.name}
            </h2>

            <p class="text-lg text-gray-700 mb-6">{restaurant?.description}</p>

            <div class="mb-6">
              <h3 class="text-xl font-semibold text-[#04AA6D]">Location</h3>
              <p class="text-gray-700">
                City: <span class="font-semibold">{restaurant?.city}</span>
              </p>
              <p class="text-gray-700">
                State: <span class="font-semibold">{restaurant.state}</span>
              </p>
              <p class="text-gray-700">
                Zip Code: <span class="font-semibold">{restaurant?.state}</span>
              </p>
            </div>

            <div class="mb-6">
              <h3 class="text-xl font-semibold text-[#04AA6D]">Contact</h3>
              <p class="text-gray-700">
                Phone: <span class="font-semibold">{restaurant?.phone}</span>
              </p>
              <p class="text-gray-700">
                Email:{' '}
                <span class="font-semibold">{restaurant.user.email}</span>
              </p>
              <p class="text-gray-700">
                Website:{' '}
                <a
                  href="https://www.restaurant.com"
                  class="text-[#32a4e7]"
                  target="_blank"
                >
                  {restaurant?.website}
                </a>
              </p>
            </div>

            <div class="mb-6">
              <h3 class="text-xl font-semibold text-[#04AA6D]">
                Opening Hours
              </h3>
              <div class="grid grid-cols-2 gap-4">
                <p class="text-gray-700">
                  <span class="font-semibold">
                    {restaurant.open} - {restaurant.close}
                  </span>
                </p>
              </div>
            </div>

            {/* <div class="mb-6">
              <h3 class="text-xl font-semibold text-[#04AA6D]">Menus</h3>
              <ul class="list-disc pl-5 text-gray-700">
                <li>Pizza Margherita</li>
                <li>Vegetarian Pasta</li>
                <li>Grilled Chicken</li>
                <li>Caesar Salad</li>
                <li>Chocolate Cake</li>
              </ul>
            </div> */}

            <div>
              <h3 class="text-xl font-semibold text-[#04AA6D]">Ratings</h3>
              <div class="flex items-center space-x-2">
                <span class="text-yellow-400">★★★★☆</span>
                <p class="text-gray-700">4.5/5 from 120 reviews</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
