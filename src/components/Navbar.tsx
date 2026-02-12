import Link from 'next/link'
import { getCurrentUser } from '@/lib/current-user'
import LogoutButton from './LogoutButton'

const Navbar = async () => {
  const user = await getCurrentUser()

  return ( 
    <nav className='bg-dark border-b border-light px-6 py-4 flex justify-between items-center'>
      <div>
        <Link
          href='/'
          className='logo text-xl font-medium text-support'
        >
          Modulas
        </Link>
      </div>
      <div className='flex items-center space-x-4 uppercase '>
        {user
          ? (
            <>             
              <Link
                href='/tickets/new'
                className='navbar-link btn-hover'
              >
                New Ticket
              </Link>
              <Link
                href='/tickets'
                className='navbar-link btn-hover'
              >
                Live Tickets
              </Link>
              <LogoutButton />
            </>
          )
        
          : (
            <>
              <Link
                href='/login'
                className='navbar-btn btn-hover'
              >
                Login
              </Link>
              <Link
                href='/register'
                className='navbar-btn btn-hover'
              >
                Register
              </Link>
            </>
          )
        }
      </div>
    </nav>
  )
}
 
export default Navbar