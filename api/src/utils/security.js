import bcrypt from 'bcryptjs'
import crypto from 'crypto'

export const generateToken = () => {
  return crypto.randomBytes(32).toString('hex')
}

export const hashToken = async (token) => {
  const saltRounds = 10
  const hashedToken = await bcrypt.hash(token, saltRounds)
  return hashedToken
}

export const addMinutesToDate = (date, minutes) => {
  return new Date(date.getTime() + minutes * 60000)
}