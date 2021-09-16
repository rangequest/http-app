import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";

Sentry.init({
  dsn: "https://4885944b90614ae9826de550b6bd3ce2@o1002268.ingest.sentry.io/5962420",
  integrations: [new Integrations.BrowserTracing()],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
