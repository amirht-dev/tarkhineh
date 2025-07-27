import {
  Embla,
  EmblaContainer,
  EmblaNextButton,
  EmblaPreButton,
  EmblaSlide,
  EmblaWrapper,
} from "@/components/atoms/Embla";
import ProductCard from "@/components/molecules/ProductCard";

const ProductCardSlider = () => {
  return (
    <Embla direction="rtl" skipSnaps>
      <EmblaWrapper className="container overflow-visible select-none">
        <EmblaContainer className="[--gap:theme(spacing.4)] [--slide-size:auto] lg:[--gap:theme(spacing.6)]">
          {Array.from({ length: 10 }, (_, idx) => (
            <EmblaSlide
              key={idx}
              className="transition-opacity [&:not(.is-in-view)]:opacity-40"
            >
              <ProductCard />
            </EmblaSlide>
          ))}
        </EmblaContainer>
      </EmblaWrapper>

      <div className="pointer-events-none absolute inset-x-0 top-[58%] container flex items-center justify-between max-lg:hidden">
        <EmblaPreButton className="bg-neutral-white border-neutral-gray-4 pointer-events-auto flex size-10 items-center justify-center rounded-lg border disabled:invisible" />
        <EmblaNextButton className="bg-neutral-white border-neutral-gray-4 pointer-events-auto flex size-10 items-center justify-center rounded-lg border disabled:invisible" />
      </div>
    </Embla>
  );
};

export default ProductCardSlider;
