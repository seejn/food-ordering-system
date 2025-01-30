import {
  orderedItems,
  orderedItem,
  createOrderedItem,
  updateOrderedItem,
  deleteOrderedItem,
} from './orderedItems'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('orderedItems', () => {
  scenario('returns all orderedItems', async (scenario) => {
    const result = await orderedItems()

    expect(result.length).toEqual(Object.keys(scenario.orderedItem).length)
  })

  scenario('returns a single orderedItem', async (scenario) => {
    const result = await orderedItem({ id: scenario.orderedItem.one.id })

    expect(result).toEqual(scenario.orderedItem.one)
  })

  scenario('creates a orderedItem', async (scenario) => {
    const result = await createOrderedItem({
      input: {
        image: 'String',
        menuId: scenario.orderedItem.two.menuId,
        quantity: 6768213,
        price: 1972459.4980409371,
        totalPrice: 9090845.458548477,
        orderId: scenario.orderedItem.two.orderId,
      },
    })

    expect(result.image).toEqual('String')
    expect(result.menuId).toEqual(scenario.orderedItem.two.menuId)
    expect(result.quantity).toEqual(6768213)
    expect(result.price).toEqual(1972459.4980409371)
    expect(result.totalPrice).toEqual(9090845.458548477)
    expect(result.orderId).toEqual(scenario.orderedItem.two.orderId)
  })

  scenario('updates a orderedItem', async (scenario) => {
    const original = await orderedItem({
      id: scenario.orderedItem.one.id,
    })
    const result = await updateOrderedItem({
      id: original.id,
      input: { image: 'String2' },
    })

    expect(result.image).toEqual('String2')
  })

  scenario('deletes a orderedItem', async (scenario) => {
    const original = await deleteOrderedItem({
      id: scenario.orderedItem.one.id,
    })
    const result = await orderedItem({ id: original.id })

    expect(result).toEqual(null)
  })
})
