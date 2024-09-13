import * as React from "react"

const ScrollToTop = React.lazy(() => import("./components/custom/ScrollToTop"))
const About = React.lazy(() => import("./components/section/about"))
const Banner = React.lazy(() => import("./components/section/banner"))
const Footer = React.lazy(() => import("./components/section/footer"))
const Navbar = React.lazy(() => import("./components/section/navbar"))
const Portofolio = React.lazy(() => import("./components/section/portofolio"))
const Products = React.lazy(() => import("./components/section/products"))
const Services = React.lazy(() => import("./components/section/services"))
const Teams = React.lazy(() => import("./components/section/teams"))

export default function App() {
  return (
    <div id="home" className="">
      <Navbar />
      <Banner />
      <About />
      <Services />
      <div className="flex flex-col items-center justify-center">
        <Products />
        <Portofolio />
        <Teams />
      </div>
      <Footer />
      <ScrollToTop />
    </div>
  )
}
