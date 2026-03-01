import { getTickets } from '@/actions/ticket.actions'
import Link from 'next/link'
import { getPriorityClass } from '@/utils/ui'
import { getCurrentUser } from '@/lib/current-user'
import { redirect } from 'next/navigation'

const TicketsPage = async () => {
  const user = await getCurrentUser()

  if (!user) {
    redirect('/login')
  }

  const tickets = await getTickets()
  
  return ( 
    <div className='min-h-screen bg-main-dark p-8'>
      <h1 className='text-3xl font-medium text-light text-center mb-8'>Support Tickets</h1>
      {tickets.length === 0 ? (
        <p className='text-center text-light'>No tickets to show.</p>
      ) : (
        <div className='space-y-4 max-w-3xl mx-auto'>
          { tickets.map((ticket) => (
            <div 
              key={ticket.id}
              className='flex justify-between items-center bg-light rounded-lg shadow p-6'
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
                  className='inline-block mt-2 bg-main-dark text-light text-sm px-2 py-1 rounded hover:bg-support btn-hover text-center uppercase font-medium'
                >
                  View
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
   )
}
 
export default TicketsPage