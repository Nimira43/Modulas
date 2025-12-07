'use server'

import { prisma } from '@/db/prisma'
import bcrypt from 'bcryptjs'
import { logEvent } from '@/utils/sentry'
import { signAuthToken, setAuthCookie } from '@/lib/auth'

type ResponseResult = {
  success: boolean
  message: string
}

export async function registerUser(
  prevState: ResponseResult,
  formData: FormData
): Promise<ResponseResult> {
  try {
    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const password = formData.get('password') as string

    if (!name || !email || !password) {
      logEvent('Validation error: Miss register fields', 'auth', { name, email}, 'warning')
    }
  } catch (error) {

  }  
}