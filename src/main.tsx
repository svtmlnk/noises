import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";
import { PlayerProvider } from "./context/playerContext.tsx";
import { Provider } from "react-redux";
import { store } from "./app/store.ts";
import { ModalProvider } from "./context/modalContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <PlayerProvider>
          <ModalProvider>
            <App />
          </ModalProvider>
        </PlayerProvider>
      </BrowserRouter>
    </Provider>
  </StrictMode>,
);
