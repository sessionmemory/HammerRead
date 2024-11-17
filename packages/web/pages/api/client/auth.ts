import type { NextApiRequest, NextApiResponse } from 'next'
import { serialize } from 'cookie'

const requestHandler = (req: NextApiRequest, res: NextApiResponse): void => {
  const cookieOptions = {
    httpOnly: true,
    secure: true,
    maxAge: 365 * 24 * 60 * 60 * 1000, // 1 year
    path: '/',
  }

  // Hardcoded token for single-user mode
  const hardcodedAuthToken = 'single_user_token'

  res.setHeader(
    'Set-Cookie',
    serialize('auth', hardcodedAuthToken, cookieOptions)
  )

  // Redirect to the home page or another relevant dashboard
  res.writeHead(302, {
    Location: '/home',
  })
  
  res.end()
}

export default requestHandler