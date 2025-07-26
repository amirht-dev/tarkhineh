import SearchBox from "@/components/atoms/SearchBox";
import AboutSection from "@/components/organisms/AboutSection";
import BranchesSection from "@/components/organisms/BranchesSection";
import RestaurantMenuSection from "@/components/organisms/RestaurantMenuSection";

export default function Home() {
  return (
    <>
      <section className="container lg:hidden">
        <SearchBox />
      </section>
      <RestaurantMenuSection />
      <AboutSection />
      <BranchesSection />
    </>
  );
}
