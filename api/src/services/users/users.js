import { db } from 'src/lib/db'
import bcrypt from 'bcryptjs';

export const users = () => {
  return db.user.findMany()
}

export const user = ({ id }) => {
  return db.user.findUnique({
    where: { id },
  })
}

export const createUser = async ({ input }) => {
  const hashedPassword = await bcrypt.hash(input.password, 10)
  console.log("while signing up", hashedPassword, input.password)
  const user = await db.user.create({
    data: {
      name: input.name,
      email: input.email,
      password: hashedPassword,
      role: input.role || 'USER',
    },
  })
  return user
}


export const updateUser = ({ id, input }) => {
  return db.user.update({
    data: input,
    where: { id },
  })
}

export const deleteUser = ({ id }) => {
  return db.user.delete({
    where: { id },
  })
}
