import Button from "@/components/atoms/Button";
import {
  Embla,
  EmblaContainer,
  EmblaNavigation,
  EmblaNextButton,
  EmblaPreButton,
  EmblaSlide,
  EmblaWrapper,
} from "@/components/atoms/Embla";
import { heroSlides } from "@/constants";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import Link from "next/link";

const HeroSlider = () => {
  return (
    <Embla
      direction="rtl"
      loop
      plugins={[Autoplay({ delay: 4000, stopOnInteraction: false })]}
    >
      <section className="relative">
        <EmblaWrapper>
          <EmblaContainer className="h-[176px] lg:h-[336px]">
            {heroSlides.map((slide, idx) => (
              <EmblaSlide key={idx} className="relative select-none">
                <Image
                  src={slide.imageSrc}
                  alt={slide.title}
                  fill
                  className="object-cover object-center"
                  draggable={false}
                />

                <div
                  className="pointer-events-none absolute inset-0"
                  style={{
                    backgroundImage:
                      "linear-gradient(90deg,black 0%, rgba(0,0,0,0.55) 20%, rgba(0,0,0,0.55) 80%, black 100%)",
                  }}
                />

                <div className="absolute top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center">
                  <h2 className="text-primary-tint-1 text-heading-6 lg:text-heading-2 text-center text-nowrap">
                    {slide.title}
                  </h2>

                  {!!slide.action && (
                    <>
                      <Button asChild size="md" className="mt-10 max-lg:hidden">
                        <Link href={slide.action.href}>
                          {slide.action.label}
                        </Link>
                      </Button>
                      <Button asChild size="sm" className="mt-4 lg:hidden">
                        <Link href={slide.action.href}>
                          {slide.action.label}
                        </Link>
                      </Button>
                    </>
                  )}
                </div>
              </EmblaSlide>
            ))}
          </EmblaContainer>
        </EmblaWrapper>

        <EmblaPreButton className="text-neutral-white absolute top-1/2 right-6 size-8 -translate-y-1/2 max-lg:hidden" />
        <EmblaNextButton className="text-neutral-white absolute top-1/2 left-6 size-8 -translate-y-1/2 max-lg:hidden" />

        <EmblaNavigation
          className="bg-neutral-white absolute bottom-0 left-1/2 h-[19px] -translate-x-1/2 mask-[url(/images/slider-navigation-mask.png)] mask-[size:100%_100%] px-4 lg:h-[33px] lg:px-10"
          dotProps={{
            className:
              "bg-neutral-gray-5 size-1 lg:size-2 data-[state=active]:size-2 lg:data-[state=active]:size-3 data-[state=active]:bg-primary outline-primary-tint-1 data-[state=active]:outline-2",
          }}
        />
      </section>
    </Embla>
  );
};

export default HeroSlider;
