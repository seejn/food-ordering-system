import { db } from 'src/lib/db'

export const restaurantMenus = () => {
  return db.restaurantMenu.findMany()
}

export const restaurantMenu = ({ id }) => {
  return db.restaurantMenu.findUnique({
    where: { id },
  })
}

export const createRestaurantMenu = ({ input }) => {
  return db.restaurantMenu.create({
    data: input,
  })
}

export const updateRestaurantMenu = ({ id, input }) => {
  return db.restaurantMenu.update({
    data: input,
    where: { id },
  })
}

export const deleteRestaurantMenu = ({ id }) => {
  return db.restaurantMenu.delete({
    where: { id },
  })
}

export const RestaurantMenu = {
  menu: (_obj, { root }) => {
    return db.restaurantMenu.findUnique({ where: { id: root?.id } }).menu()
  },
  restaurant: (_obj, { root }) => {
    return db.restaurantMenu
      .findUnique({ where: { id: root?.id } })
      .restaurant()
  },
}
