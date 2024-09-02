import { Card, CardContent } from "@/components/ui/card"

import { Button } from "../ui/button"
import { project } from "./../../constant/index"

export default function Portofolio() {
  return (
    <section className="w-full py-28" id="portofolio">
      <div>
        <h2 className="mb-8 text-center text-3xl font-bold tracking-tighter text-foreground sm:text-4xl md:text-5xl">
          Portofolio
        </h2>
      </div>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {project.slice(0, 8).map((item, index) => (
            <Card
              className="relative cursor-pointer overflow-hidden bg-card"
              key={index}
            >
              <CardContent className="flex aspect-square items-center justify-center p-0">
                <img
                  src={item.image}
                  alt={`Project ${item.title}`}
                  className="h-full w-full object-cover"
                />

                <div className="absolute inset-0 flex items-center justify-center bg-card-foreground bg-opacity-80 opacity-0 transition-opacity duration-300 hover:opacity-100">
                  <div className="flex flex-col space-y-2 p-2 text-center">
                    <h2 className="text-lg font-semibold text-card sm:text-xl md:text-2xl">
                      {item.title}s
                    </h2>
                    <span className="text-xs font-medium text-card sm:text-sm">
                      {item.description}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        {/* FIXME: jika project lebih dari 8, tampilkan button view all project mau gitu kah ? atau gimana ? */}
        {project.length > 8 && (
          <div className="mt-8 flex justify-center">
            <Button
              variant="outline"
              size="lg"
              className="border-primary text-base font-semibold text-primary hover:bg-primary hover:text-primary-foreground"
            >
              View All Projects
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}
