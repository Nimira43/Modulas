'use server'
import * as Sentry from '@sentry/nextjs'

export async function createTicket(
  prevState: {
    success: boolean
    message: string
  },  
  formData: FormData
): Promise<{
  success: boolean,
  message: string
}> {
  try {
    
  } catch (error) {
    
  }


  const subject = formData.get('subject') as string
  const description = formData.get('description') as string
  const priority = formData.get('priority') as string

  if (!subject || !description || !priority) {
    Sentry.captureMessage('Validation Error: Missing ticket fields.', 'warning')
    return {
      success: false,
      message: 'All fields are required.'
    }
  }

  return {
    success: true,
    message: 'Ticket created successfully.'
  }
}

