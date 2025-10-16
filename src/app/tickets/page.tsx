import { getTickets } from '@/actions/ticket.actions'
import { logEvent } from '@/utils/sentry'
import Link from 'next/link'

const TicketsPage = async () => {
  const tickets = await getTickets()
  
  return ( 
    <div className='min-h-screen bg-light p-8'>
      <h1 className='text-3xl font-medium text-main-dark text-center mb-8'>Support Tickets</h1>
      {tickets.length === 0 ? (
        <p className='text-center text-grey-dark'>No tickets to show.</p>
      ) : (
        <div className='space-y-4 max-w-3xl'>
          <p>Tickets</p>
        </div>
      )}
    </div>
   )
}
 
export default TicketsPage