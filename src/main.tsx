import "./global.css"

import { LazyMotion, domAnimation } from "framer-motion"
import { companyName, companyTextSubHeading } from "./constant"

import { StrictMode, Suspense } from "react"
import { createRoot } from "react-dom/client"
import { SuperSEO } from "react-super-seo"
import App from "./App"
import Loading from "./components/ui/loading"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SuperSEO
      title={companyName}
      description={companyTextSubHeading}
      lang="id"
      robots="index, follow"
      openGraph={{
        ogImage: {
          ogImage: "http://placekitten.com/1200/630",
          ogImageAlt: companyName,
          ogImageWidth: 1200,
          ogImageHeight: 630,
          ogImageType: "image/jpeg",
        },
      }}

      //   twitter={{
      //     twitterSummaryCard: {
      //       summaryCardImage: "http://placekitten.com/1200/630",
      //       summaryCardImageAlt: companyName,
      //       summaryCardSiteUsername: "justinmahar",
      //     },
      //   }}
    />
    <Suspense fallback={<Loading />}>
      <LazyMotion features={domAnimation}>
        <App />
      </LazyMotion>
    </Suspense>
  </StrictMode>,
)
