import Link from "next/link"

const Navbar = () => {
  return ( 
    <nav className='bg-dark border-b border-light px-6 py-4 flex justify-between items-center'>
      <div>
        <Link
          href='/'
          className='logo text-xl font-medium text-light'
        >
          Modulas
        </Link>
      </div>
      <div className='flex items-center space-x-4'>
        <>
          <Link
            href='/tickets/new'
            className='text-light hover:text-support btn-hover'
          >
            New Ticket
          </Link>
          <Link
            href='/tickets'
            className='text-light hover:text-support btn-hover'
          >
            Live Tickets
          </Link>
          <Link
            href='/tickets/new'
            className='text-light hover:text-support btn-hover'
          >
            Logout
          </Link>
        </>
        
        
      </div>
    </nav>
  )
}
 
export default Navbar