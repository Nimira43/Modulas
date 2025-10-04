import * as Sentry from '@sentry/nextjs'

type LogLevel = 'fatal' | 'error' | 'warning' | 'info' | 'debug'

export function logEvent(
  message: string,
  category: string = 'general',
  data?: Record<string, any>,  
  logLevel: LogLevel = 'info',
  error?: unknown
) {}