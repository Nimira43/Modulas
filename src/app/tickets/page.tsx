import { getTickets } from '@/actions/ticket.actions'
import { logEvent } from '@/utils/sentry'
import Link from 'next/link'

const TicketsPage = async () => {
  const tickets = await getTickets()
  
  return ( 
    <div className='min-h-screen bg-main-dark p-8'>
      <h1 className='text-3xl font-medium text-light text-center mb-8'>Support Tickets</h1>
      {tickets.length === 0 ? (
        <p className='text-center text-light'>No tickets to show.</p>
      ) : (
        <div className='space-y-4 max-w-3xl'>
          { tickets.map((ticket) => (
            <div 
              key={ticket.id}
              className='flex justify-between item-center bg-light rounded-lg shadow p-6'
            >
              <h2 className='text-xl font-medium text-main-dark'>{ticket.subject}</h2>
            </div>
          ))}
        </div>
      )}
    </div>
   )
}
 
export default TicketsPage