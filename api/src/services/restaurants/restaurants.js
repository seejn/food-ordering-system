import { db } from 'src/lib/db'

export const restaurants = () => {
  return db.restaurant.findMany()
}

export const restaurant = ({ id }) => {
  return db.restaurant.findUnique({
    where: { id },
  })
}

export const createRestaurant = ({ input }) => {
  return db.restaurant.create({
    data: input,
  })
}

export const updateRestaurant = ({ id, input }) => {
  return db.restaurant.update({
    data: input,
    where: { id },
  })
}

export const deleteRestaurant = ({ id }) => {
  return db.restaurant.delete({
    where: { id },
  })
}

export const Restaurant = {
  user: (_obj, { root }) => {
    return db.restaurant.findUnique({ where: { id: root?.id } }).user()
  },
  ratings: (_obj, { root }) => {
    return db.restaurant.findUnique({ where: { id: root?.id } }).ratings()
  },
  Restaurant_Menu: (_obj, { root }) => {
    return db.restaurant
      .findUnique({ where: { id: root?.id } })
      .Restaurant_Menu()
  },
}
