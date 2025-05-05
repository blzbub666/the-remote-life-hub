
import { Card, CardContent } from "@/components/ui/card";

export function Testimonials() {
  const testimonials = [
    {
      quote: "This tool helped me find a perfect winter destination with great internet and affordable living costs. Highly recommend!",
      author: "Jamie K.",
      title: "Software Developer & Digital Nomad",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    },
    {
      quote: "As a vanlifer, finding places with good overnight parking and reliable cell coverage can be tough. This makes it so much easier!",
      author: "Mike T.",
      title: "Full-time Vanlifer",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    },
    {
      quote: "The climate comparison tool is incredibly accurate. I was able to escape harsh winters without sacrificing my internet needs.",
      author: "Sarah P.",
      title: "Remote Marketing Consultant",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
    },
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What Our Users Say</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Hear from remote workers and vanlifers who've found their perfect match with our platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-none shadow-lg overflow-hidden">
              <CardContent className="p-0">
                <div className="h-64 overflow-hidden relative">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.author} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <p className="mb-4 italic">"{testimonial.quote}"</p>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm opacity-80">{testimonial.title}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
