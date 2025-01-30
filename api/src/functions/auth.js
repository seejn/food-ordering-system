import { DbAuthHandler } from '@redwoodjs/auth-dbauth-api'
import { db } from 'src/lib/db'

export const handler = async (event, context) => {
  const dbAuth = new DbAuthHandler(event, context, {
    dbClient: db,
    userModelName: 'User', // Ensure this matches your Prisma model (case-sensitive)
    authFields: {
      id: 'id',
      username: 'email',  // Ensure this is the correct field for authentication
      hashedPassword: 'password',
    },
    cookie: {
      HttpOnly: true,
      Path: '/',
      SameSite: 'Strict',
      Secure: process.env.NODE_ENV === 'production',
    },
    login: {
      handler: (user) => user,
    },
    signup: {
      handler: (user) => user,
    },
  })

  return dbAuth.invoke()
}
