import { getTicketById } from '@/actions/ticket.actions'
import { logEvent } from '@/utils/sentry'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getPriorityClass } from '@/utils/ui'

const TicketDetailsPage = async (props: {
  params: Promise<{id: string}>
}) => {
  const { id } = await props.params
  const ticket = await getTicketById(id)

  if (!ticket) {
    notFound()
  }

  logEvent('Viewing ticket details', 'ticket', { ticketId: ticket.id }, 'info')

  return ( 
    <div className='min-h-screen bg-main-dark p-8'>
      <h1>Ticket Details Page: {id}</h1>
    </div> 
  )
}

export default TicketDetailsPage