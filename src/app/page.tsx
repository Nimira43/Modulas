import Link from 'next/link'
import { GiBattleGear } from 'react-icons/gi'

const HomePage = () => {
  return ( 
    <main className='flex flex-col text-center justify-center min-h-screen px-4 bg-main-dark'>
      <GiBattleGear 
        className='mx-auto mb-4 text-support'
        size={60} 
      />
      <h1 className='text-4xl md:text-5xl font-medium text-support logo mb-4'>Modulas</h1>
      <p className='text-lg text-light mb-8 uppercase'>Support Ticket Management System</p>
      <div className='flex flex-col md:flex-row gap-4 justify-center animate-slide opacity-0'>
        <Link
          href='tickets/new'
          className='bg-light text-main-dark uppercase font-medium px-6 py-3 rounded hover:bg-support btn-hover'
        >
          Submit Ticket
        </Link>
        <Link
          href='tickets'
          className='bg-light text-main-dark uppercase font-medium px-6 py-3 rounded hover:bg-support btn-hover'
        >
          View Ticket
        </Link>
      </div>
    </main>
   )
}
 
export default HomePage
