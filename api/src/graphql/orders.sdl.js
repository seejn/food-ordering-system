export const schema = gql`
  type Order {
    id: Int!
    userId: Int!
    customer: User!
    restaurantId: Int!
    restaurant: Restaurant!
    totalAmount: Float!
    paymentMethod: PaymentMethod!
    orderedItem: [OrderedItem]!
  }

  enum PaymentMethod {
    CASH_ON_DELIVERY
  }

  type Query {
    orders: [Order!]! @requireAuth
    order(id: Int!): Order @requireAuth
  }

  input CreateOrderInput {
    userId: Int!
    restaurantId: Int!
    totalAmount: Float!
    paymentMethod: PaymentMethod!
  }

  input UpdateOrderInput {
    userId: Int
    restaurantId: Int
    totalAmount: Float
    paymentMethod: PaymentMethod
  }

  type Mutation {
    createOrder(input: CreateOrderInput!): Order! @requireAuth
    updateOrder(id: Int!, input: UpdateOrderInput!): Order! @requireAuth
    deleteOrder(id: Int!): Order! @requireAuth
  }
`
