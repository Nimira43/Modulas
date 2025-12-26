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
      
        <form 
          action={formAction}
          className='space-y-4 text-dark'
        >
          <input 
            className='w-full border border-grey-medium p-3 rounded focus:outline-none' 
            type='text'
            name='name'
            placeholder='Name'
            autoComplete='name'  
            required
          />
          <input 
            className='w-full border border-grey-medium p-3 rounded focus:outline-none' 
            type='email'
            name='email'
            placeholder='Email'
            autoComplete='email'  
            required
          />
          <input 
            className='w-full border border-grey-medium p-3 rounded focus:outline-none' 
            type='password'
            name='password'
            placeholder='Password'
            autoComplete='password'  
            required
          />
        </form>
      </div>
    </div>
   )
}
 
export default RegisterPage