import { Card, CardContent } from "@/components/ui/card";
import { project } from "./../../constant/index";
import { Button } from "../ui/button";

export default function Portofolio() {
  return (
    <section className="w-full md:w-fit py-16 px-4 md:px-8" id="portofolio">
      <div>
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">Portofolio</h2>
      </div>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {project.slice(0, 8).map((item, index) => (
            <Card className="relative overflow-hidden cursor-pointer" key={index}>
              <CardContent className="flex aspect-square items-center justify-center p-0">
                <img src={item.image} alt={`Project ${item.title}`} className="w-full h-full object-cover" />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <div className="flex flex-col space-y-2 text-center p-2">
                    <span className="text-lg sm:text-xl md:text-2xl font-semibold text-white">{item.title}</span>
                    <span className="text-xs sm:text-sm font-medium text-white">{item.description}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        {/* FIXME: jika project lebih dari 8, tampilkan button view all project mau gitu kah ? atau gimana ? */}
        {project.length > 8 && (
          <div className="flex justify-center mt-8">
            <Button variant="outline" size="lg" className="border-primary text-primary font-semibold hover:bg-primary hover:text-white text-base">
              View All Projects
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
