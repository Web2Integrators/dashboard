import { component$, useContextProvider, useStore } from "@builder.io/qwik";
import {
  QwikCityProvider,
  RouterOutlet,
  ServiceWorkerRegister,
} from "@builder.io/qwik-city";
import { RouterHead } from "./components/router-head/router-head";

import "./global.css";
import { ThemeScript } from "qwik-theme-toggle";
import type { AppState } from "./_state/app-state.type";
import { APP_STATE_CONTEXT_ID } from "./_state/app-state-context-id";

export default component$(() => {
  /**
   * The root of a QwikCity site always start with the <QwikCityProvider> component,
   * immediately followed by the document's <head> and <body>.
   *
   * Don't remove the `<head>` and `<body>` elements.
   */
  console.log('root component'  );
  const appState = useStore<AppState>({
    mode: 'light',
    isSidebarOpened: false,
    featureFlags: {
      showFluffy: import.meta.env.DEV,
    },
    designMode: true
  });

  useContextProvider(APP_STATE_CONTEXT_ID, appState);

  return (
    <QwikCityProvider>
      <head>
        <meta charSet="utf-8" />
        <link rel="manifest" href="/manifest.json" />
        <RouterHead />
        <ThemeScript themeStorageKey="theme" />
      </head>
      <body class="debug-screens" lang="en">
        <RouterOutlet />
        <ServiceWorkerRegister />
      </body>
    </QwikCityProvider>
  );
});
