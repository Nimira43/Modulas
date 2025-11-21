import { SignJWT, jwtVerify } from 'jose'
import { cookies } from 'next/headers'
import { logEvent } from '@/utils/sentry'

const secret = new TextEncoder().encode(process.env.AUTH_SECRET)
const cookieName = 'auth-token'

export async function signAuthToken(payload: any) {
  try {
    const token = await new SignJWT(payload)
  } catch (error) {
    
  }
}