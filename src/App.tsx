import Banner from "./components/section/banner"
import Footer from "./components/section/footer"
import Navbar from "./components/section/navbar"
import Portofolio from "./components/section/portofolio"
import Services from "./components/section/services"
import Teams from "./components/section/teams"

export default function App() {
  return (
    /**
      TODO: Create Section Componnet About
      TODO: Create Section Componnet Products
    */
    <div id="home" className="">
      <Navbar />
      <Banner />
      <Services />
      <div className="flex flex-col items-center justify-center">
        <Portofolio />
        <Teams />
      </div>
      <Footer />
    </div>
  )
}
