import { db } from 'src/lib/db'

export const orderedItems = () => {
  return db.orderedItem.findMany()
}

export const orderedItem = ({ id }) => {
  return db.orderedItem.findUnique({
    where: { id },
  })
}

export const createOrderedItem = ({ input }) => {
  return db.orderedItem.create({
    data: input,
  })
}

export const updateOrderedItem = ({ id, input }) => {
  return db.orderedItem.update({
    data: input,
    where: { id },
  })
}

export const deleteOrderedItem = ({ id }) => {
  return db.orderedItem.delete({
    where: { id },
  })
}

export const OrderedItem = {
  menu: (_obj, { root }) => {
    return db.orderedItem.findUnique({ where: { id: root?.id } }).menu()
  },
  order: (_obj, { root }) => {
    return db.orderedItem.findUnique({ where: { id: root?.id } }).order()
  },
  restaurant: (_obj, { root }) => {
    return db.orderedItem.findUnique({ where: { id: root?.id } }).restaurant()
  },
}
