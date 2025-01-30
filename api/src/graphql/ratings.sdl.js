export const schema = gql`
  type Rating {
    id: Int!
    user: String!
    rating: Int!
    restaurantId: Int!
    restaurant: Restaurant!
  }

  type Query {
    ratings: [Rating!]! @requireAuth
    rating(id: Int!): Rating @requireAuth
  }

  input CreateRatingInput {
    user: String!
    rating: Int!
    restaurantId: Int!
  }

  input UpdateRatingInput {
    user: String
    rating: Int
    restaurantId: Int
  }

  type Mutation {
    createRating(input: CreateRatingInput!): Rating! @requireAuth
    updateRating(id: Int!, input: UpdateRatingInput!): Rating! @requireAuth
    deleteRating(id: Int!): Rating! @requireAuth
  }
`
