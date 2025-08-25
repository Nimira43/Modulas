'use server'

export async function createTicket(formData: FormData) {
  const subject = formData.get('subject') as string
  const description = formData.get('description') as string
  const priority = formData.get('priority') as string
}