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
      <div className='max-w-2xl mx-auto bg-light rounded-lg p-8 space-y-6 shadow'>
        <h1 className='text-3xl text-medium text-main-dark'>
          {ticket.subject}
        </h1>
      </div>
    </div> 
  )
}

export default TicketDetailsPage