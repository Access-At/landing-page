import { Button } from "../ui/button"

// FIXME: title, description, and button mau ada apa ngga?
export default function Banner() {
  return (
    <section className="banner" id="home">
      <div className="banner-container">
        <div className="banner-wrapper">
          <h1 className="title">Welcome to Our Awesome Site</h1>
          <p className="description">
            Discover amazing features and services that will revolutionize your
            experience.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button size="lg" className="w-full sm:w-auto">
              Get Started
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full bg-transparent sm:w-auto"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
      <div className="polygon"></div>
    </section>
  )
}
