import {
  restaurantMenus,
  restaurantMenu,
  createRestaurantMenu,
  updateRestaurantMenu,
  deleteRestaurantMenu,
} from './restaurantMenus'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('restaurantMenus', () => {
  scenario('returns all restaurantMenus', async (scenario) => {
    const result = await restaurantMenus()

    expect(result.length).toEqual(Object.keys(scenario.restaurantMenu).length)
  })

  scenario('returns a single restaurantMenu', async (scenario) => {
    const result = await restaurantMenu({
      id: scenario.restaurantMenu.one.id,
    })

    expect(result).toEqual(scenario.restaurantMenu.one)
  })

  scenario('creates a restaurantMenu', async (scenario) => {
    const result = await createRestaurantMenu({
      input: {
        menuId: scenario.restaurantMenu.two.menuId,
        restaurantId: scenario.restaurantMenu.two.restaurantId,
      },
    })

    expect(result.menuId).toEqual(scenario.restaurantMenu.two.menuId)
    expect(result.restaurantId).toEqual(
      scenario.restaurantMenu.two.restaurantId
    )
  })

  scenario('updates a restaurantMenu', async (scenario) => {
    const original = await restaurantMenu({
      id: scenario.restaurantMenu.one.id,
    })
    const result = await updateRestaurantMenu({
      id: original.id,
      input: { menuId: scenario.restaurantMenu.two.menuId },
    })

    expect(result.menuId).toEqual(scenario.restaurantMenu.two.menuId)
  })

  scenario('deletes a restaurantMenu', async (scenario) => {
    const original = await deleteRestaurantMenu({
      id: scenario.restaurantMenu.one.id,
    })
    const result = await restaurantMenu({ id: original.id })

    expect(result).toEqual(null)
  })
})
