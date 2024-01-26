import * as Sentry from "@sentry/gatsby";

Sentry.init({
  dsn: "https://3d981740717e4fe8a72e44cce3060d6e@o339238.ingest.sentry.io/1875087",
  debug: true,
  integrations: [new Sentry.Replay()],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,

  // Capture Replay for 10% of all sessions,
  // plus for 100% of sessions with an error
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
});