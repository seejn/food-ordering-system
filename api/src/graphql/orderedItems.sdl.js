export const schema = gql`
  type OrderedItem {
    id: Int!
    image: String!
    menuId: Int!
    menu: Menu!
    quantity: Int!
    price: Float!
    totalPrice: Float!
    orderId: Int!
    order: Order!
  }

  type Query {
    orderedItems: [OrderedItem!]! @requireAuth
    orderedItem(id: Int!): OrderedItem @requireAuth
  }

  input CreateOrderedItemInput {
    image: String!
    menuId: Int!
    quantity: Int!
    price: Float!
    totalPrice: Float!
    orderId: Int!
  }

  input UpdateOrderedItemInput {
    image: String
    menuId: Int
    quantity: Int
    price: Float
    totalPrice: Float
    orderId: Int
  }

  type Mutation {
    createOrderedItem(input: CreateOrderedItemInput!): OrderedItem! @requireAuth
    updateOrderedItem(id: Int!, input: UpdateOrderedItemInput!): OrderedItem!
      @requireAuth
    deleteOrderedItem(id: Int!): OrderedItem! @requireAuth
  }
`
