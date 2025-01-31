// api/src/services/resetPasswords/resetPasswords.js

import { db } from 'src/lib/db'
import { hashToken, generateToken, addMinutesToDate } from 'src/utils/security'
import { sendResetPasswordEmail } from 'src/lib/email'
import { updateUser } from "src/services/users/users"
import bcrypt from "bcryptjs"

export const verifyResetPasswordToken = async ({ input }) => {
  const { token, newPassword } = input
  const resetPassword = await db.resetPassword.findUnique({
    where: { token: token },
  })

  if (!resetPassword) {
    throw new Error('Invalid token!')
  }

  if(Date.now() > resetPassword.expiresAt){
    throw new Error("Token Expired!")
  }
  const { userId } = resetPassword;
  const hashedPassword = await bcrypt.hash(newPassword, 10)
  await updateUser({id: userId, input: {password: hashedPassword}})

  return true
}

export const requestResetPassword = async ({ input }) => {
  const { email } = input
  const user = await db.user.findUnique({
    where: { email },
  })

  if (!user) {
    throw new Error('User not found')
  }

  const token = generateToken()
  const expiresAt = Date.now() + 600000
  await db.resetPassword.create({
    data: {
      userId: user.id,
      token: token,
      expiresAt,
    },
  })

  await sendResetPasswordEmail(email, token)

  return true
}

export const createResetPassword = ({ input }) => {
  return db.resetPassword.create({
    data: input,
  })
}

export const updateResetPassword = ({ id, input }) => {
  return db.resetPassword.update({
    where: { id },
    data: input,
  })
}

export const deleteResetPassword = ({ id }) => {
  return db.resetPassword.delete({
    where: { id },
  })
}