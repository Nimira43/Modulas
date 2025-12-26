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
    <div className='min-h-screen flex items-center justify-center bg-main-dark'>
      <div className='w-full max-w-md bg-light rounded-md p-8'>
        
      </div>
    </div>
   )
}
 
export default RegisterPage