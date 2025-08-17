const NewTicketPage = () => {
  return ( 
    <div className='min-h-screen bg-main-dark flex items-center justify-center px-4'>
      <div className='w-full max-wi-md bg-light rounded-md p-8'>
        <h1 className='text-3xl font-medium mb-6 text-center text-main-dark uppercase'>Submit A Support Ticket</h1>
        <form className='space-y-4 text-dark'>
          <input 
            className='w-full border border-grey-medium p-3 rounded focus:outline-none' 
            type='text'
            name='subject'
            placeholder='Subject'
            required 
          />
        </form>
      </div>
    </div>
   )
}
 
export default NewTicketPage