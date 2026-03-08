import type { Ticket } from '@/generated/prisma'
import { getPriorityClass } from '@/utils/ui'
import Link from 'next/link'

type TicketItemProps = {
  ticket: Ticket
}

const TicketItem = ({ ticket }: TicketItemProps) => {
  const isClosed = ticket.status === 'Closed'

  return (  
    <div 
      key={ticket.id}
      className={`
        flex justify-between items-center bg-light rounded-lg shadow p-6
        ${isClosed
          ? 'opacity-50'
          : ''
        }
      `}
    >
      <div>
        <h2 className='text-xl font-medium text-main-dark'>{ticket.subject}</h2>
      </div>
      <div className='text-right space-y-2'>
        <div className='text-sm text-dark'>
          Priority: {' '} 
          <span
            className={getPriorityClass(ticket.priority)}
          >
            {ticket.priority}
          </span>
        </div>
        <div className='text-xs text-grey-dark'>
          Created: {new Date(ticket.createdAt).toLocaleDateString()}
        </div>
        <Link 
          href={`/tickets/${ticket.id}`}
          className={`
            inline-block mt-2 text-sm px-2 py-1 rounded  text-center uppercase font-medium
            ${isClosed
            ? 'bg-grey-medium text-grey-light-extra cursor-not-allowed pointer-events-none'
            : 'bg-main-dark text-light hover:bg-support btn-hover'
            }
          `}
        >
          View
        </Link>
      </div>
    </div>
  )
}
 
export default TicketItem