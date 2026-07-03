"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

export default function Banner({
  banners,
  controlButtons = false,
  duration = 5000,
  height = 400,
}) {
  const [api, setApi] = useState();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  const plugins = useMemo(
    () => [
      Autoplay({
        delay: duration,
        stopOnInteraction: false,
      }),
    ],
    [duration],
  );

  const updateCarouselState = useCallback(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());
  }, [api]);

  useEffect(() => {
    if (!api) return;

    api.on("select", updateCarouselState);
    api.on("reInit", updateCarouselState);

    queueMicrotask(updateCarouselState);

    return () => {
      api.off("select", updateCarouselState);
      api.off("reInit", updateCarouselState);
    };
  }, [api, updateCarouselState]);

  return (
    <div className="w-full">
      <Carousel
        setApi={setApi}
        plugins={plugins}
        className="w-full px-2 md:px-0"
      >
        <CarouselContent className="ml-0 md:ml-auto">
          {banners.map(({ src, alt }, index) => (
            <CarouselItem
              key={index}
              style={{ "--banner-height": `${height}px` }}
              className={
                "relative h-25 md:h-(--banner-height) w-full overflow-hidden md:overflow-auto rounded-md md:rounded-none pl-0  border border-gray-200 md:border-none"
              }
            >
              <Image
                src={src}
                alt={alt}
                fill
                sizes="100%"
                preload={index === 0}
                className="object-cover object-top"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        {controlButtons && (
          <>
            <CarouselPrevious className="left-4 h-10 w-10 hidden md:inline-flex" />
            <CarouselNext className="right-4 h-10 w-10 hidden md:inline-flex" />
          </>
        )}
      </Carousel>
      <div className="mt-4 flex justify-center gap-2">
        {Array.from({ length: count }).map((_, index) => (
          <button
            key={index}
            onClick={() => api?.scrollTo(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`h-2 rounded-full transition-all duration-300 w-2 ${
              current === index ? "bg-black" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
