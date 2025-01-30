import {
  ratings,
  rating,
  createRating,
  updateRating,
  deleteRating,
} from './ratings'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('ratings', () => {
  scenario('returns all ratings', async (scenario) => {
    const result = await ratings()

    expect(result.length).toEqual(Object.keys(scenario.rating).length)
  })

  scenario('returns a single rating', async (scenario) => {
    const result = await rating({ id: scenario.rating.one.id })

    expect(result).toEqual(scenario.rating.one)
  })

  scenario('creates a rating', async (scenario) => {
    const result = await createRating({
      input: {
        user: 'String',
        rating: 1406225,
        restaurantId: scenario.rating.two.restaurantId,
      },
    })

    expect(result.user).toEqual('String')
    expect(result.rating).toEqual(1406225)
    expect(result.restaurantId).toEqual(scenario.rating.two.restaurantId)
  })

  scenario('updates a rating', async (scenario) => {
    const original = await rating({ id: scenario.rating.one.id })
    const result = await updateRating({
      id: original.id,
      input: { user: 'String2' },
    })

    expect(result.user).toEqual('String2')
  })

  scenario('deletes a rating', async (scenario) => {
    const original = await deleteRating({
      id: scenario.rating.one.id,
    })
    const result = await rating({ id: original.id })

    expect(result).toEqual(null)
  })
})
