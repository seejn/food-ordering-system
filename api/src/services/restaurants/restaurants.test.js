import {
  restaurants,
  restaurant,
  createRestaurant,
  updateRestaurant,
  deleteRestaurant,
} from './restaurants'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('restaurants', () => {
  scenario('returns all restaurants', async (scenario) => {
    const result = await restaurants()

    expect(result.length).toEqual(Object.keys(scenario.restaurant).length)
  })

  scenario('returns a single restaurant', async (scenario) => {
    const result = await restaurant({ id: scenario.restaurant.one.id })

    expect(result).toEqual(scenario.restaurant.one)
  })

  scenario('creates a restaurant', async (scenario) => {
    const result = await createRestaurant({
      input: {
        userId: scenario.restaurant.two.userId,
        name: 'String',
        description: 'String',
        open: 'String',
        close: 'String',
        phone: 'String',
        website: 'String',
        city: 'String',
        state: 'String',
        zipcode: 'String',
        updatedAt: '2025-01-30T10:57:04.336Z',
      },
    })

    expect(result.userId).toEqual(scenario.restaurant.two.userId)
    expect(result.name).toEqual('String')
    expect(result.description).toEqual('String')
    expect(result.open).toEqual('String')
    expect(result.close).toEqual('String')
    expect(result.phone).toEqual('String')
    expect(result.website).toEqual('String')
    expect(result.city).toEqual('String')
    expect(result.state).toEqual('String')
    expect(result.zipcode).toEqual('String')
    expect(result.updatedAt).toEqual(new Date('2025-01-30T10:57:04.336Z'))
  })

  scenario('updates a restaurant', async (scenario) => {
    const original = await restaurant({
      id: scenario.restaurant.one.id,
    })
    const result = await updateRestaurant({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a restaurant', async (scenario) => {
    const original = await deleteRestaurant({
      id: scenario.restaurant.one.id,
    })
    const result = await restaurant({ id: original.id })

    expect(result).toEqual(null)
  })
})
