export const schema = gql`
  type User {
    id: Int!
    name: String!
    email: String!
    password: String!
    role: Role!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  enum Role {
    USER
    RESTAURANT
    DELIVERY
  }

  type Query {
    users: [User!]! @requireAuth
    user(id: Int!): User @requireAuth
  }

  type LogInPayload {
    token: String!
    user: User!
  }

  input LogInInput {
    email: String!
    password: String!
  }


  input CreateUserInput {
    name: String!
    email: String!
    password: String!
    role: Role!
  }

  input UpdateUserInput {
    name: String
    email: String
    password: String
    role: Role
  }

  type Mutation {
    logIn(input: LogInInput!): LogInPayload! @skipAuth
    createUser(input: CreateUserInput!): User! @skipAuth
    updateUser(id: Int!, input: UpdateUserInput!): User! @requireAuth
    deleteUser(id: Int!): User! @requireAuth
  }
`
