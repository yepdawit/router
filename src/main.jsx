import { createRoot } from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const root = document.getElementById("root");
createRoot(root).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
