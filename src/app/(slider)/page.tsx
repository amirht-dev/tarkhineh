import SearchBox from "@/components/atoms/SearchBox";
import AboutSection from "@/components/organisms/AboutSection";
import BranchesSection from "@/components/organisms/BranchesSection";
import RestaurantMenuSection from "@/components/organisms/RestaurantMenuSection";

export default function Home() {
  return (
    <div className="my-6 space-y-6 lg:my-12 lg:space-y-12">
      <section className="container lg:hidden">
        <SearchBox />
      </section>
      <RestaurantMenuSection />
      <AboutSection />
      <BranchesSection />
    </div>
  );
}
