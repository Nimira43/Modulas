'use client'

import { useActionState, useEffect } from 'react'
import { toast } from 'sonner'
import { useRouter } from 'next/router'
import { registerUser } from '@/actions/auth.actions'

const RegisterPage = () => {
  const initialState = {
    success: false,
    message: ''
  }

  const [state, formAction] = useActionState(registerUser, initialState)

  return ( 
    <div className='min-h-screen flex items-center justify-center bg-main-dark px-4'>
      <div className='w-full max-w-md bg-light rounded-md p-8'>
        <h1 className='text-3xl font-medium mb-6 text-center text-main-dark'>Register</h1>
      </div>
    </div>
   )
}
 
export default RegisterPage