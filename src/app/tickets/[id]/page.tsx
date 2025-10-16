import { getTicketById } from '@/actions/ticket.actions'
import { logEvent } from '@/utils/sentry'
import Link from 'next/link'
import { notFound } from 'next/navigation'

const TicketDetailsPage = () => {
  return ( 
    <>
      <h1>Ticket Details Page</h1>
    </> 
  )
}

export default TicketDetailsPage