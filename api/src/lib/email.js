import nodemailer from 'nodemailer'

export const sendResetPasswordEmail = async (email, token) => {
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: 'seejn112@gmail.com',
      pass: 'sbna rbmp slgq xold',
    },
  })

  const mailOptions = {
    from: 'seejn112@gmail.com',
    to: email,
    subject: 'Password Reset Request',
    text: `You requested a password reset. Use the following token to reset your password: ${token}`,
  }

  await transporter.sendMail(mailOptions)
}