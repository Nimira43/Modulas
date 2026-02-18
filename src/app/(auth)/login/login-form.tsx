'use client'

import { useActionState, useEffect } from 'react'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'
import { loginUser } from '@/actions/auth.actions'

const LoginForm = () => {
  const router = useRouter()
  const initialState = {
    success: false,
    message: ''
  }

  const [state, formAction] = useActionState(loginUser, initialState)

  useEffect(() => {
    if (state.success) {
      toast.success('Login successful.')
      router.push('/tickets')
      router.refresh()
    } else if (state.message){
      toast.error(state.message)
    }
  }, [state, router])

  return ( 
    <div className='min-h-screen flex items-center justify-center bg-main-dark px-4'>
      <div className='w-full max-w-md bg-light rounded-md p-8'>
        <h1 className='text-3xl font-medium mb-6 text-center text-main-dark'>Login</h1>
      
        <form 
          action={formAction}
          className='space-y-4 text-dark'
        >
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
            Login
          </button>
        </form>
      </div>
    </div>
   )
}
 
export default LoginForm