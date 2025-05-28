import AboutSection from "@/components/organisms/AboutSection";
import HeroSlider from "@/components/organisms/HeroSlider";
import RestaurantMenuSection from "@/components/organisms/RestaurantMenuSection";

export default function Home() {
  return (
    <div className="mb-6 space-y-6 lg:mb-12 lg:space-y-12">
      <HeroSlider />
      <RestaurantMenuSection />
      <AboutSection />
    </div>
  );
}
