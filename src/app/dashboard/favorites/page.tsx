import emptyDesktopImage from "@/assets/images/vectors/empty-desktop.png";
import Button from "@/components/atoms/Button";
import SearchBox from "@/components/atoms/SearchBox";
import {
  Section,
  SectionActionIconButton,
  SectionBody,
  SectionHeader,
  SectionTitle,
} from "@/components/atoms/Section";
import { ChevronLeft_Outline } from "@/components/atoms/icons/Arrow/ChevronLeft";
import { ChevronRight_Outline } from "@/components/atoms/icons/Arrow/ChevronRight";
import { ChipsList, ChipsListItem } from "@/components/molecules/ChipsList";
import FavoriteCard from "@/components/molecules/FavoriteCard";
import Image from "next/image";
import Link from "next/link";

const FavoritesPage = () => {
  const favorites = 5;

  return (
    <Section className="lg:border-neutral-gray-4 lg:rounded-xl lg:border lg:p-6">
      <SectionHeader className="lg:border-neutral-gray-4 grid grid-cols-3 lg:border-b lg:pb-2">
        <SectionActionIconButton className="lg:hidden" asChild>
          <Link href="/dashboard">
            <ChevronRight_Outline />
          </Link>
        </SectionActionIconButton>
        <SectionTitle className="max-lg:col-start-2 max-lg:justify-self-center">
          علاقمندی‌ها
        </SectionTitle>
      </SectionHeader>

      <SectionBody>
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
          <ChipsList
            wrapperClassName="flex-1 shrink min-w-0"
            emblaNavigationButtonClassName="max-lg:hidden"
            emblaWrapperClassName="max-lg:overflow-visible"
          >
            <ChipsListItem selected>همه</ChipsListItem>
            <ChipsListItem icon={<ChevronLeft_Outline />}>
              غذای اصلی
            </ChipsListItem>
            <ChipsListItem icon={<ChevronLeft_Outline />}>
              پیش غذا
            </ChipsListItem>
            <ChipsListItem icon={<ChevronLeft_Outline />}>دسر</ChipsListItem>
            <ChipsListItem icon={<ChevronLeft_Outline />}>
              نوشیدنی
            </ChipsListItem>
          </ChipsList>

          <SearchBox
            fullWidth={false}
            className="w-full shrink-0 lg:w-[496px]"
          />
        </div>

        <div className="mt-6">
          {favorites > 0 ? (
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4">
              {Array.from({ length: favorites }, (_, idx) => (
                <FavoriteCard key={idx} />
              ))}
            </div>
          ) : (
            <EmptyFavorites />
          )}
        </div>
      </SectionBody>
    </Section>
  );
};

export default FavoritesPage;

function EmptyFavorites() {
  return (
    <div className="max-lg:border-neutral-gray-4 relative flex h-[256px] flex-col items-center justify-center gap-4 max-lg:rounded-xl max-lg:border lg:h-[380px] lg:gap-8">
      <Image
        src={emptyDesktopImage}
        alt="empty"
        className="absolute w-[200px] lg:w-[325px]"
      />
      <p className="text-caption-md text-neutral-gray-7 lg:text-body-xl mt-12">
        شما در حال حاضر هیچ محصولی را به علاقه‌مندی‌ها اضافه نکرده‌اید!
      </p>
      <Button
        variant="outline"
        size="responsive"
        className="relative w-38 justify-center"
        asChild
      >
        <Link href="#">منوی رستوران</Link>
      </Button>
    </div>
  );
}
