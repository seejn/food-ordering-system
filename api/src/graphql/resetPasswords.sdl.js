// api/src/graphql/resetPasswords.sdl.js
export const schema = gql`
  type ResetPassword {
    id: Int!
    userId: Int!
    user: User!
    token: String!
    expiresAt: BigInt!
    email: String!
  }

  type Query {
    resetPasswords: [ResetPassword!]! @requireAuth
    resetPassword(id: Int!): ResetPassword @requireAuth
  }

  input CreateResetPasswordInput {
    userId: Int!
    token: String!
    expiresAt: BigInt!
  }

  input RequestResetPasswordInput {
    email: String!
  }

  input VerifyResetPasswordTokenInput {
    token: String!
    newPassword: String!
  }

  input UpdateResetPasswordInput {
    userId: Int
    token: String
    expiresAt: BigInt
  }

  type Mutation {
    requestResetPassword(input: RequestResetPasswordInput!): Boolean! @skipAuth
    verifyResetPasswordToken(input: VerifyResetPasswordTokenInput!): Boolean! @skipAuth
    createResetPassword(input: CreateResetPasswordInput!): ResetPassword! @skipAuth
    updateResetPassword(id: Int!, input: UpdateResetPasswordInput!): ResetPassword! @requireAuth
    deleteResetPassword(id: Int!): ResetPassword! @requireAuth
  }
`