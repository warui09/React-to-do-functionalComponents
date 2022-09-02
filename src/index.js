import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./functionBased/components/TodoContainer";

import "./functionBased/App.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
