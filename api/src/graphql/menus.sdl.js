export const schema = gql`
  type Menu {
    id: Int!
    name: String!
    description: String
    price: Float!
    availability: Boolean!
    image: String
    ingredients: String!
    createdAt: DateTime!
    updatedAt: DateTime!
    Restaurant_Menu: [RestaurantMenu]!
  }

  type Query {
    menus: [Menu!]! @requireAuth
    menu(id: Int!): Menu @requireAuth
  }

  input CreateMenuInput {
    name: String!
    description: String
    price: Float!
    availability: Boolean!
    image: String
    ingredients: String!
  }

  input UpdateMenuInput {
    name: String
    description: String
    price: Float
    availability: Boolean
    image: String
    ingredients: String
  }

  type Mutation {
    createMenu(input: CreateMenuInput!): Menu! @requireAuth
    updateMenu(id: Int!, input: UpdateMenuInput!): Menu! @requireAuth
    deleteMenu(id: Int!): Menu! @requireAuth
  }
`
