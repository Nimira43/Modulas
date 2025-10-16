'use client'

import { useActionState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { createTicket } from '@/actions/ticket.actions'
import { toast } from 'sonner'

const NewTicketForm = () => {
  const [state, formAction] = useActionState(createTicket, {
    success: false,
    message: ''
  })

  const router = useRouter()

  useEffect(() => {
    if (state.success) {
      toast.success('Ticket submitted successfully.')
      router.push('/tickets')
    }
  }, [state.success, router])


  return ( 
    <div className='w-full max-wi-md bg-light rounded-md p-8'>
      <h1 className='text-3xl font-medium mb-6 text-center text-main-dark'>Submit A Support Ticket</h1>
      {
        state.message && !state.success && (
          <p className='text-red-600 mb-4 text-center'>{state.message}</p>
        )
      }
      <form 
        action={formAction}
        className='space-y-4 text-dark'
      >
        <input 
          className='w-full border border-grey-medium p-3 rounded focus:outline-none' 
          type='text'
          name='subject'
          placeholder='Subject'
          
        />
        <textarea 
          className='w-full border border-grey-medium p-3 rounded focus:outline-none' 
          name='description'
          placeholder='Describe issue'
            
        />
        <select 
          className='w-full border border-grey-medium p-3 rounded focus:outline-none' 
          name='priority'
          defaultValue='Low'
        >
          <option value='Low'>Low Priority</option>
          <option value='Medium'>Medium Priority</option>
          <option value='High'>High Priority</option>
        </select>
        <button
          className='w-full text-light uppercase font-medium bg-main-dark hover:bg-support btn-hover p-3 rounded'
        >
          Submit
        </button>
      </form>
    </div>
  )
}
 
export default NewTicketForm