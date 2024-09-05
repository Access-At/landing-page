import ScrollToTop from "./components/custom/ScrollToTop"
import About from "./components/section/about"
import Banner from "./components/section/banner"
import Footer from "./components/section/footer"
import Navbar from "./components/section/navbar"
import Portofolio from "./components/section/portofolio"
import Products from "./components/section/products"
import Services from "./components/section/services"
import Teams from "./components/section/teams"

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
