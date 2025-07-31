import HeroSlider from "@/components/organisms/HeroSlider";
import { NextLayout } from "@/types/next";

const SliderLayout: NextLayout = ({ children }) => {
  return (
    <>
      <HeroSlider />
      {children}
    </>
  );
};

export default SliderLayout;
