import * as Sentry from '@sentry/nextjs'

Sentry.init({
  dsn: 'https://f9c77eada70dddc7a61e4580b66c1cf4@o4507187792052224.ingest.de.sentry.io/4509797993218128',
  tracesSampleRate: 1,
  enableLogs: true,
  debug: false,
})
