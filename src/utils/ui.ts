export const getPriorityClass = (priority: string) => {
  switch(priority) {
    case 'High':
      return 'text-red-600 font-medium' 
    case 'Medium':
      return 'text-amber-600 font-medium' 
    case 'Low':
      return 'text-green-600 font-medium' 
  }
}