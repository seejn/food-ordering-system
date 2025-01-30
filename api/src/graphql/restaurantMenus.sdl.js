export const schema = gql`
  type RestaurantMenu {
    id: Int!
    menuId: Int!
    restaurantId: Int!
    menu: Menu!
    restaurant: Restaurant!
  }

  type Query {
    restaurantMenus: [RestaurantMenu!]! @requireAuth
    restaurantMenu(id: Int!): RestaurantMenu @requireAuth
  }

  input CreateRestaurantMenuInput {
    menuId: Int!
    restaurantId: Int!
  }

  input UpdateRestaurantMenuInput {
    menuId: Int
    restaurantId: Int
  }

  type Mutation {
    createRestaurantMenu(input: CreateRestaurantMenuInput!): RestaurantMenu!
      @requireAuth
    updateRestaurantMenu(
      id: Int!
      input: UpdateRestaurantMenuInput!
    ): RestaurantMenu! @requireAuth
    deleteRestaurantMenu(id: Int!): RestaurantMenu! @requireAuth
  }
`
