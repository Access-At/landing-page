import "./global.css"

import { LazyMotion, domAnimation } from "framer-motion"

import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import App from "./App"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <LazyMotion features={domAnimation}>
      <App />
      {/* {children} */}
    </LazyMotion>
  </StrictMode>,
)
