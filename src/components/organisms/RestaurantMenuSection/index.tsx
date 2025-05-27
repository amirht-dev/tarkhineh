import MenuCard from "@/components/atoms/MenuCard";
import {
  Section,
  SectionBody,
  SectionHeader,
  SectionTitle,
} from "@/components/atoms/Section";
import { menus } from "@/constants";

const RestaurantMenuSection = () => {
  return (
    <Section className="container">
      <SectionHeader>
        <SectionTitle>منوی رستوران</SectionTitle>
      </SectionHeader>

      <SectionBody className="grid grid-cols-2 items-end gap-4 lg:-mt-4 lg:grid-cols-4 lg:gap-6">
        {Object.values(menus).map((menuItem) => (
          <MenuCard
            key={menuItem.label}
            label={menuItem.label}
            imageSrc={menuItem.imageSrc}
            {...(menuItem.label === "نوشیدنی" && {
              imageClassName: "-mb-[60%] lg:-mb-[50%] w-[80%]",
            })}
          />
        ))}
      </SectionBody>
    </Section>
  );
};

export default RestaurantMenuSection;
