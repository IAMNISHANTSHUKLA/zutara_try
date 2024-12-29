"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Autoplay from "embla-carousel-autoplay";

const testimonials = [
  {
    name: "Nishant Shukla",
    role: "Architect",
    content:
      "ZuTara has provided me with a platform to showcase my talent and connect with clients who appreciate my work. It's been an amazing experience!",
    image: "https://i.pravatar.cc/150?img=7",
  },
  {
    name: "Harshavardhan Kurri",
    role: "Designer",
    content:
      "Thanks to ZuTara, I’ve been able to land high-quality projects and work with clients from around the globe. It’s a game-changer!",
    image: "https://i.pravatar.cc/150?img=6",
  },
  {
    name: "Rishab Thutheja",
    role: "Interior Designer",
    content:
      "ZuTara has been instrumental in helping me get recognition for my designs. The exposure and opportunities here are unmatched.",
    image: "https://i.pravatar.cc/150?img=7",
  },
  {
    name: "Sujal Acharya",
    role: "Urban Planner",
    content:
      "ZuTara is the go-to platform for professionals like me to connect with clients and earn the recognition we deserve.",
    image: "https://i.pravatar.cc/150?img=8",
  },
];

const TestimonialsCarousel = () => {
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 5000,
        }),
      ]}
      className="w-full mx-auto"
    >
      <CarouselContent>
        {testimonials.map((testimonial, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <Card className="h-full">
              <CardContent className="flex flex-col justify-between h-full p-6">
                <p className="text-gray-600 mb-4">
                  &quot;{testimonial.content}&quot;
                </p>
                <div className="flex items-center mt-4">
                  <Avatar className="h-12 w-12 mr-4">
                    <AvatarImage
                      src={testimonial.image}
                      alt={testimonial.name}
                    />
                    <AvatarFallback>
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default TestimonialsCarousel;
