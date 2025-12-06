'use server'

import { prisma } from '@/db/prisma'
import bcrypt from 'bcryptjs'
import { logEvent } from '@/utils/sentry'
import { signAuthToken, setAuthCookie } from '@/lib/auth'

type ResponseResult = {
  success: boolean
  message: string
}

export async function registerUser(prevState, formData: FormData) {

}