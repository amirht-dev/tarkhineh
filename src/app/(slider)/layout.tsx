import HeroSlider from "@/components/organisms/HeroSlider";
import { NextLayout } from "@/types/next";

const SliderLayout: NextLayout = ({ children }) => {
  return (
    <div className="mb-6 space-y-6 lg:mb-12 lg:space-y-12">
      <HeroSlider />
      {children}
    </div>
  );
};

export default SliderLayout;
