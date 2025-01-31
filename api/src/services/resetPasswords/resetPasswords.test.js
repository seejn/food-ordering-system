import {
  resetPasswords,
  resetPassword,
  createResetPassword,
  updateResetPassword,
  deleteResetPassword,
} from './resetPasswords'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('resetPasswords', () => {
  scenario('returns all resetPasswords', async (scenario) => {
    const result = await resetPasswords()

    expect(result.length).toEqual(Object.keys(scenario.resetPassword).length)
  })

  scenario('returns a single resetPassword', async (scenario) => {
    const result = await resetPassword({ id: scenario.resetPassword.one.id })

    expect(result).toEqual(scenario.resetPassword.one)
  })

  scenario('creates a resetPassword', async (scenario) => {
    const result = await createResetPassword({
      input: {
        userId: scenario.resetPassword.two.userId,
        token: 'String',
        expiresAt: 1135873n,
      },
    })

    expect(result.userId).toEqual(scenario.resetPassword.two.userId)
    expect(result.token).toEqual('String')
    expect(result.expiresAt).toEqual(1135873n)
  })

  scenario('updates a resetPassword', async (scenario) => {
    const original = await resetPassword({
      id: scenario.resetPassword.one.id,
    })
    const result = await updateResetPassword({
      id: original.id,
      input: { token: 'String2' },
    })

    expect(result.token).toEqual('String2')
  })

  scenario('deletes a resetPassword', async (scenario) => {
    const original = await deleteResetPassword({
      id: scenario.resetPassword.one.id,
    })
    const result = await resetPassword({ id: original.id })

    expect(result).toEqual(null)
  })
})
