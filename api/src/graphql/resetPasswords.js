// api/src/graphql/resetPasswords.js

import {
  requestResetPassword,
  createResetPassword,
  updateResetPassword,
  deleteResetPassword,
  verifyResetPasswordToken
} from 'src/services/resetPasswords/resetPasswords'

export const Mutation = {
  requestResetPassword,
  createResetPassword,
  updateResetPassword,
  deleteResetPassword,
  verifyResetPasswordToken
}