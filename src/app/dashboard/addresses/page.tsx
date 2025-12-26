import emptyDesktopImage from "@/assets/images/vectors/empty-desktop.png";
import Button from "@/components/atoms/Button";
import {
  Section,
  SectionActionIconButton,
  SectionBody,
  SectionHeader,
  SectionTitle,
} from "@/components/atoms/Section";
import { ChevronRight_Outline } from "@/components/atoms/icons/Arrow/ChevronRight";
import { AddCircle_Outline } from "@/components/atoms/icons/Essential/AddCircle";
import AddAddressPopup from "@/components/molecules/AddAddressPopup";
import AddressCard from "@/components/molecules/AdressCard";
import Image from "next/image";
import Link from "next/link";

const AddressesPage = () => {
  const addresses = 5;

  return (
    <Section className="lg:border-neutral-gray-4 lg:rounded-xl lg:border lg:p-6">
      <SectionHeader className="lg:border-neutral-gray-4 grid grid-cols-3 lg:border-b lg:pb-2">
        <SectionActionIconButton className="lg:hidden" asChild>
          <Link href="/dashboard">
            <ChevronRight_Outline />
          </Link>
        </SectionActionIconButton>
        <SectionTitle className="max-lg:col-start-2 max-lg:justify-self-center">
          آدرس‌ها
        </SectionTitle>
        {addresses > 0 && (
          <SectionActionIconButton asChild>
            <AddAddressPopup
              trigger={
                <Button
                  className="col-start-3 justify-self-end max-lg:hidden"
                  size="sm"
                  variant="text"
                  prefixIcon={<AddCircle_Outline />}
                >
                  افزودن آدرس جدید
                </Button>
              }
            />
          </SectionActionIconButton>
        )}
      </SectionHeader>

      <SectionBody>
        <div className="mt-6">
          {addresses > 0 ? (
            <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:gap-4">
              {Array.from({ length: addresses }, (_, idx) => (
                <AddressCard key={idx} />
              ))}
            </div>
          ) : (
            <EmptyAddresses />
          )}

          <AddAddressPopup
            trigger={
              <Button
                size="sm"
                variant="outline"
                className="mx-auto mt-7 block lg:hidden"
              >
                افزودن آدرس جدید
              </Button>
            }
          />
        </div>
      </SectionBody>
    </Section>
  );
};

export default AddressesPage;

function EmptyAddresses() {
  return (
    <div className="max-lg:border-neutral-gray-4 relative flex h-[256px] flex-col items-center justify-center gap-4 max-lg:rounded-xl max-lg:border lg:h-[380px] lg:gap-8">
      <Image
        src={emptyDesktopImage}
        alt="empty"
        className="absolute w-[200px] lg:w-[325px]"
      />
      <p className="text-caption-md text-neutral-gray-7 lg:text-body-xl mt-12">
        شما در حال حاضر هیچ آدرسی ثبت نکرده‌اید!
      </p>
      <AddAddressPopup
        trigger={
          <Button
            variant="outline"
            size="responsive"
            className="relative w-38 justify-center"
          >
            افزودن آدرس
          </Button>
        }
      />
    </div>
  );
}
