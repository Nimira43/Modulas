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
    <div>Register Page</div>
   )
}
 
export default RegisterPage