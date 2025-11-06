import { createRoot } from "react-dom/client";
import App from "./App";

// Defer main CSS loading to after first paint (critical CSS is inlined in index.html)
if ('requestIdleCallback' in window) {
  requestIdleCallback(() => import("./index.css"));
} else {
  setTimeout(() => import("./index.css"), 1);
}

createRoot(document.getElementById("root")!).render(<App />);
