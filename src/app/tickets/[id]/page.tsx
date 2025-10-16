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
        <h1 className='text-3xl font-medium text-main-dark'>
          {ticket.subject}
        </h1>
        <div className='text-dark'>
          <h2 className='text-lg font-medium mb-2'>Description</h2>
          <p>
            {ticket.description}
            </p>
        </div>
        <div className='text-dark'>
          <h2 className='text-lg font-medium mb-2'>Priority</h2>
          <p 
            className={
              getPriorityClass(ticket.priority)
            }
          >
            {ticket.priority}
          </p>
        </div>
        <div className='text-dark'>
          <h2 className='text-lg font-medium mb-2'>Created At</h2>
          <p>
            {new Date(ticket.createdAt).toLocaleString()}
          </p>
        </div>
        <Link 
          href='/tickets'
          className='inline-block mt-2 bg-main-dark text-light text-sm px-4 py-2 rounded hover:bg-support btn-hover text-center uppercase font-medium'
        >
          Back
        </Link>
      </div>
    </div> 
  )
}

export default TicketDetailsPage