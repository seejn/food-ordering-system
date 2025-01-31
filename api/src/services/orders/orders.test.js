import { orders, order, createOrder, updateOrder, deleteOrder } from './orders'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('orders', () => {
  scenario('returns all orders', async (scenario) => {
    const result = await orders()

    expect(result.length).toEqual(Object.keys(scenario.order).length)
  })

  scenario('returns a single order', async (scenario) => {
    const result = await order({ id: scenario.order.one.id })

    expect(result).toEqual(scenario.order.one)
  })

  scenario('creates a order', async (scenario) => {
    const result = await createOrder({
      input: {
        userId: scenario.order.two.userId,
        totalAmount: 2095734.850612654,
      },
    })

    expect(result.userId).toEqual(scenario.order.two.userId)
    expect(result.totalAmount).toEqual(2095734.850612654)
  })

  scenario('updates a order', async (scenario) => {
    const original = await order({ id: scenario.order.one.id })
    const result = await updateOrder({
      id: original.id,
      input: { totalAmount: 5753700.161709161 },
    })

    expect(result.totalAmount).toEqual(5753700.161709161)
  })

  scenario('deletes a order', async (scenario) => {
    const original = await deleteOrder({ id: scenario.order.one.id })
    const result = await order({ id: original.id })

    expect(result).toEqual(null)
  })
})
