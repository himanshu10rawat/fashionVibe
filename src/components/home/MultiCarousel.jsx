import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";
import Image from "next/image";

export default function MultiCarousel() {
  const categories = [
    {
      src: "/modal-images/women1.jpg",
      alt: "Fashion women first",
      text: "western wear",
      url: "western-wear",
    },
    {
      src: "/modal-images/women1.jpg",
      alt: "Fashion women first",
      text: "western wear",
      url: "western-wear",
    },
    {
      src: "/modal-images/women1.jpg",
      alt: "Fashion women first",
      text: "western wear",
      url: "western-wear",
    },
    {
      src: "/modal-images/women1.jpg",
      alt: "Fashion women first",
      text: "western wear",
      url: "western-wear",
    },
    {
      src: "/modal-images/women1.jpg",
      alt: "Fashion women first",
      text: "western wear",
      url: "western-wear",
    },
  ];

  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full"
    >
      <CarouselContent>
        {categories.map(({ src, alt, text, url }, index) => (
          <CarouselItem key={index} className="basis-1/2 lg:basis-1/3">
            <Link
              href={`/${url}`}
              className="group block relative after:content-[''] after:transition-all after:ease-in-out after:duration-300 hover:after:bg-black/30 hover:after:inset-0 hover:after:absolute"
            >
              <div className="relative h-60 md:h-150">
                <Image
                  src={src}
                  alt={alt}
                  fill
                  sizes={"100%"}
                  className="object-cover object-top"
                />
              </div>
              <h3 className="font-bold text-white absolute -translate-1/2 left-1/2 bottom-1/2 z-10 opacity-0 text-lg w-max md:text-2xl uppercase transition-all ease-in-out duration-300 group-hover:opacity-100">
                {text}
              </h3>
            </Link>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-4 h-10 w-10 md:inline-flex" />
      <CarouselNext className="right-4 h-10 w-10 md:inline-flex" />
    </Carousel>
  );
}
