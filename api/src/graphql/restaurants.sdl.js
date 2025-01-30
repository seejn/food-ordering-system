export const schema = gql`
  type Restaurant {
    id: Int!
    userId: Int!
    user: User!
    name: String!
    description: String!
    open: String!
    close: String!
    image: String
    ratings: [Rating]!
    phone: String!
    website: String!
    city: String!
    state: String!
    zipcode: String!
    createdAt: DateTime!
    updatedAt: DateTime!
    Restaurant_Menu: [RestaurantMenu]!
  }

  type Query {
    restaurants: [Restaurant!]! @requireAuth
    restaurant(id: Int!): Restaurant @requireAuth
  }

  input CreateRestaurantInput {
    userId: Int!
    name: String!
    description: String!
    open: String!
    close: String!
    image: String
    phone: String!
    website: String!
    city: String!
    state: String!
    zipcode: String!
  }

  input UpdateRestaurantInput {
    userId: Int
    name: String
    description: String
    open: String
    close: String
    image: String
    phone: String
    website: String
    city: String
    state: String
    zipcode: String
  }

  type Mutation {
    createRestaurant(input: CreateRestaurantInput!): Restaurant! @requireAuth
    updateRestaurant(id: Int!, input: UpdateRestaurantInput!): Restaurant!
      @requireAuth
    deleteRestaurant(id: Int!): Restaurant! @requireAuth
  }
`
