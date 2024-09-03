import "./global.css"

import { LazyMotion, domAnimation } from "framer-motion"

import App from "./App"
import { StrictMode } from "react"
import { createRoot } from "react-dom/client"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <LazyMotion features={domAnimation}>
      <App />
      {/* {children} */}
    </LazyMotion>
  </StrictMode>,
)
