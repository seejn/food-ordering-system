// import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

const RestaurantProfilePage = () => {
  return (
    <>
      <Metadata
        title="RestaurantProfile"
        description="RestaurantProfile page"
      />

      <form class="bg-white p-8 rounded-lg shadow-md space-y-6 grow">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label
              for="restaurant-name"
              class="block text-lg font-medium text-gray-700"
            >
              Restaurant Name
            </label>
            <input
              type="text"
              id="restaurant-name"
              class="w-full p-3 border rounded-md"
              placeholder="Enter restaurant name"
              value="Restaurant Name"
            />
          </div>
          <div>
            <label
              for="restaurant-description"
              class="block text-lg font-medium text-gray-700"
            >
              Restaurant Description
            </label>
            <textarea
              id="restaurant-description"
              class="w-full p-3 border rounded-md"
              placeholder="Enter restaurant description"
              rows="3"
            >
              A brief description of the restaurant.
            </textarea>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label for="city" class="block text-lg font-medium text-gray-700">
              City
            </label>
            <input
              type="text"
              id="city"
              class="w-full p-3 border rounded-md"
              placeholder="City"
              value="New York"
            />
          </div>
          <div>
            <label for="state" class="block text-lg font-medium text-gray-700">
              State
            </label>
            <input
              type="text"
              id="state"
              class="w-full p-3 border rounded-md"
              placeholder="State"
              value="New York"
            />
          </div>
          <div>
            <label
              for="zipcode"
              class="block text-lg font-medium text-gray-700"
            >
              Zipcode
            </label>
            <input
              type="text"
              id="zipcode"
              class="w-full p-3 border rounded-md"
              placeholder="Zipcode"
              value="10001"
            />
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label for="phone" class="block text-lg font-medium text-gray-700">
              Phone
            </label>
            <input
              type="text"
              id="phone"
              class="w-full p-3 border rounded-md"
              placeholder="Phone number"
              value="123-456-7890"
            />
          </div>
          <div>
            <label for="email" class="block text-lg font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              class="w-full p-3 border rounded-md"
              placeholder="Email"
              value="restaurant@example.com"
            />
          </div>
          <div>
            <label
              for="website"
              class="block text-lg font-medium text-gray-700"
            >
              Website
            </label>
            <input
              type="text"
              id="website"
              class="w-full p-3 border rounded-md"
              placeholder="Website URL"
              value="www.restaurantwebsite.com"
            />
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label for="sunday" class="block text-lg font-medium text-gray-700">
              Sunday
            </label>
            <div class="flex space-x-4">
              <input
                type="time"
                id="sunday-open"
                class="p-3 border rounded-md"
                value="09:00"
              />
              <input
                type="time"
                id="sunday-close"
                class="p-3 border rounded-md"
                value="21:00"
              />
            </div>
          </div>
          <div>
            <label for="monday" class="block text-lg font-medium text-gray-700">
              Monday
            </label>
            <div class="flex space-x-4">
              <input
                type="time"
                id="monday-open"
                class="p-3 border rounded-md"
                value="09:00"
              />
              <input
                type="time"
                id="monday-close"
                class="p-3 border rounded-md"
                value="21:00"
              />
            </div>
          </div>
        </div>

        <div class="mt-6 text-center">
          <button
            type="submit"
            class="bg-[#04AA6D] text-white px-6 py-3 rounded-md"
          >
            Update Information
          </button>
        </div>
      </form>
    </>
  )
}

export default RestaurantProfilePage
