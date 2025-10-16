import { getTicketById } from '@/actions/ticket.actions'
import { logEvent } from '@/utils/sentry'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getPriorityClass } from '@/utils/ui'

const TicketDetailsPage = () => {
  return ( 
    <div className='min-h-screen bg-main-dark p-8'>
      <h1>Ticket Details Page</h1>
    </div> 
  )
}

export default TicketDetailsPage