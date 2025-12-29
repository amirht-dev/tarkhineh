import HeroSlider from "@/components/organisms/HeroSlider";

const SliderLayout = ({ children }: LayoutProps<"/">) => {
  return (
    <>
      <HeroSlider />
      {children}
    </>
  );
};

export default SliderLayout;
