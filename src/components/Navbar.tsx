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
      <div className='flex items-center space-x-4 uppercase '>
        <>
          <Link
            href='/tickets/new'
            className='font-medium text-light hover:text-support btn-hover'
          >
            New Ticket
          </Link>
          <Link
            href='/tickets'
            className='font-medium text-light hover:text-support btn-hover'
          >
            Live Tickets
          </Link>
          <Link
            href='/tickets/new'
            className='font-medium px-4 py-2 rounded text-light bg-main hover:bg-support btn-hover '
          >
            Logout
          </Link>
        </>
        <>
          <Link
            href='/login'
            className='font-medium px-4 py-2 rounded text-light bg-main hover:bg-support btn-hover '
          >
            Login
          </Link>
          <Link
            href='/register'
            className='font-medium px-4 py-2 rounded text-light bg-main hover:bg-support btn-hover'
          >
            Register
          </Link>
        </>
        
        
      </div>
    </nav>
  )
}
 
export default Navbar