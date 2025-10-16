import { getTicketById } from '@/actions/ticket.actions'
import { logEvent } from '@/utils/sentry'
import Link from 'next/link'
import { notFound } from 'next/navigation'

const getPriorityClass = (priority: string) => {
  switch(priority) {
    case 'High':
      return 'text-red-600 font-medium' 
    case 'Medium':
      return 'text-amber-600 font-medium' 
    case 'Low':
      return 'text-green-600 font-medium' 
  }
}

const TicketDetailsPage = () => {
  return ( 
    <div className='min-h-screen bg-main-dark p-8'>
      <h1>Ticket Details Page</h1>
    </div> 
  )
}

export default TicketDetailsPage