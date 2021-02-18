import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { StateProvider } from "./StateProvider";
import reducer, { initialState } from "./reducer";
import "./services/i18n";

ReactDOM.render(
  <React.StrictMode>
    <React.Suspense fallback="Laddar...">
      <StateProvider initialState={initialState} reducer={reducer}>
        <App />
      </StateProvider>
    </React.Suspense>
  </React.StrictMode>,
  document.getElementById("root")
);

