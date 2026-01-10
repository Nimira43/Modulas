'use client'

import { useActionState, useEffect } from 'react'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'
import { registerUser } from '@/actions/auth.actions'

const RegisterPage = () => {
  const router = useRouter()
  const initialState = {
    success: false,
    message: ''
  }

  const [state, formAction] = useActionState(registerUser, initialState)

  useEffect(() => {
    if (state.success) {
      toast.success('Registration successful.')
      router.push('/tickets')
      router.refresh()
    } else if (state.message){
      toast.error(state.message)
    }
  }, [state, router])

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
          <button
            className='w-full text-light uppercase font-medium bg-main-dark hover:bg-support btn-hover p-3 rounded'
          >
            Register
          </button>
        </form>
      </div>
    </div>
   )
}
 
export default RegisterPage