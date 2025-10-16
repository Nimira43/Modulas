import { getTickets } from '@/actions/ticket.actions'
import { logEvent } from '@/utils/sentry'
import Link from 'next/link'

const TicketsPage = async () => {
  const tickets = await getTickets()
  console.log(tickets)

  return ( 
    <>
      Tickets Page
    </>
   )
}
 
export default TicketsPage