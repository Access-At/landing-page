import { teams } from "@/constant";
import { Card, CardContent } from "../ui/card";

// FIXME: Images
export default function Teams() {
  return (
    <section className="w-full md:w-fit py-16 px-4 md:px-8" id="teams">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">Meet Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teams.map((member) => (
            <Card key={member.name} className="bg-transparent">
              <CardContent className="flex flex-col items-center p-4">
                <img
                  alt={member.name}
                  className="rounded-full mb-4"
                  height="100"
                  src={member.image}
                  style={{
                    aspectRatio: "100/100",
                    objectFit: "cover",
                  }}
                  width="100"
                />
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">{member.position}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
