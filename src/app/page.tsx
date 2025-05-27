import HeroSlider from "@/components/organisms/HeroSlider";
import RestaurantMenuSection from "@/components/organisms/RestaurantMenuSection";

export default function Home() {
  return (
    <div className="space-y-6 lg:space-y-12">
      <HeroSlider />
      <RestaurantMenuSection />
    </div>
  );
}
