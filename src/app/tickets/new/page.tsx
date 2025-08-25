'use client'

import { useActionState } from 'react'
import { createTicket } from '@/actions/ticket.actions'

const NewTicketPage = () => {
  const [state, formAction] = useActionState(createTicket, {
    success: false,
    message: ''
  })


  return ( 
    <div className='min-h-screen bg-main-dark flex items-center justify-center px-4'>
      <div className='w-full max-wi-md bg-light rounded-md p-8'>
        <h1 className='text-3xl font-medium mb-6 text-center text-dark'>Submit A Support Ticket</h1>
        <form 
          action={formAction}
          className='space-y-4 text-dark'
        >
          <input 
            className='w-full border border-grey-medium p-3 rounded focus:outline-none' 
            type='text'
            name='subject'
            placeholder='Subject'
            required 
          />
          <textarea 
            className='w-full border border-grey-medium p-3 rounded focus:outline-none' 
            name='description'
            placeholder='Describe issue'
            required 
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
            className='w-full text-light uppercase font-medium bg-main-dark hover:bg-dark btn-hover p-3 rounded'
          >
            Submit
          </button>
        </form>
      </div>
    </div>
   )
}
 
export default NewTicketPage