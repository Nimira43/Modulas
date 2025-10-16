import { getTickets } from '@/actions/ticket.actions'
import { logEvent } from '@/utils/sentry'
import Link from 'next/link'

const TicketsPage = async () => {
  const tickets = await getTickets()
  
  return ( 
    <div className='min-h-screen bg-light p-8'>
      <h1 className='text-3xl font-medium text-main-dark text-center mb-8'>Support Tickets</h1>
      
    </div>
   )
}
 
export default TicketsPage