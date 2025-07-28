"use client";

import Button from "@/components/atoms/Button";
import ImageSlider, { ImageSliderSlide } from "@/components/atoms/ImageSlider";
import { heroSlides } from "@/constants";
import Link from "next/link";

const HeroSlider = () => {
  return (
    <ImageSlider
      sidesNavigation
      dotNavigation
      prevButtonClassName="max-lg:hidden"
      nextButtonClassName="max-lg:hidden"
    >
      {heroSlides.map((slide, idx) => (
        <ImageSliderSlide src={slide.imageSrc} alt={slide.title} key={idx}>
          <div className="absolute top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center">
            <h2 className="text-primary-tint-1 text-heading-6 lg:text-heading-2 text-center text-nowrap">
              {slide.title}
            </h2>

            {!!slide.action && (
              <>
                <Button asChild size="md" className="mt-10 max-lg:hidden">
                  <Link href={slide.action.href}>{slide.action.label}</Link>
                </Button>
                <Button asChild size="sm" className="mt-4 lg:hidden">
                  <Link href={slide.action.href}>{slide.action.label}</Link>
                </Button>
              </>
            )}
          </div>
        </ImageSliderSlide>
      ))}
    </ImageSlider>
  );
};

export default HeroSlider;
