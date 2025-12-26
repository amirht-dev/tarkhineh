"use client";

import { addAddressAction } from "@/actions/user";
import Button, { ResponsiveButton } from "@/components/atoms/Button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/atoms/Dialog";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/atoms/Drawer";
import Field from "@/components/atoms/Field";
import { FieldTextTypeProps } from "@/components/atoms/Field/index.types";
import IconButton from "@/components/atoms/IconButton";
import { Edit2_Outline } from "@/components/atoms/icons/Content-Edit/Edit2";
import { Skeleton } from "@/components/atoms/Skeleton";
import Textarea from "@/components/atoms/Textarea";
import { AddressValue } from "@/components/molecules/AddressPicker/index.types";
import Responsive, { Visible } from "@/components/utils/Responsive";
import { addAddressFormSchema, AddAddressFormType } from "@/utils/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import dynamic from "next/dynamic";
import { ReactNode, useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";

const AddressPicker = dynamic(
  () => import("@/components/molecules/AddressPicker"),
  {
    ssr: false,
    loading: () => <Skeleton className="h-[500px]" />,
  },
);

const StaticMap = dynamic(() => import("@/components/molecules/StaticMap"), {
  ssr: false,
  loading: () => <Skeleton className="h-[247px] lg:hidden" />,
});

type AddAddressPopupProps = {
  onSuccessfullySubmit?: (data: AddAddressFormType) => void;
  trigger: ReactNode;
};

export default function AddAddressPopup({
  onSuccessfullySubmit,
  trigger,
}: AddAddressPopupProps) {
  const [open, setOpen] = useState(false);

  const form = (
    <AddressForm
      onCancellation={() => setOpen(false)}
      onSubmitSuccessfully={(data) => {
        setOpen(false);
        onSuccessfullySubmit?.(data);
      }}
    />
  );

  return (
    <>
      <Visible on="initial">
        <Drawer handleOnly open={open} onOpenChange={setOpen}>
          <DrawerTrigger asChild>{trigger}</DrawerTrigger>

          <DrawerContent className="flex flex-col">
            <DrawerHeader>
              <DrawerTitle className="text-heading-6 text-neutral-gray-8 col-start-2 shrink-0 text-center">
                افزودن آدرس
              </DrawerTitle>
            </DrawerHeader>

            <DrawerDescription className="sr-only">
              افزودن آدرس جدید
            </DrawerDescription>
            {form}
          </DrawerContent>
        </Drawer>
      </Visible>

      <Visible on="lg">
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>{trigger}</DialogTrigger>

          <DialogContent className="max-w-[600px] overflow-hidden lg:p-0">
            <DialogHeader className="grid grid-cols-3 items-center lg:p-6">
              <DialogTitle className="col-start-2 justify-self-center">
                افزودن آدرس
              </DialogTitle>

              <DialogClose className="col-start-3 justify-self-end max-lg:hidden lg:[&>svg]:size-8" />
            </DialogHeader>

            <DialogDescription className="sr-only">
              افزودن آدرس جدید
            </DialogDescription>

            {form}
          </DialogContent>
        </Dialog>
      </Visible>
    </>
  );
}

type AddressFormProps = {
  onCancellation?: () => void;
  onSubmitSuccessfully?: (data: AddAddressFormType) => void;
};

function AddressForm({
  onCancellation,
  onSubmitSuccessfully,
}: AddressFormProps) {
  const [isEditingAddress, setIsEditingAddress] = useState(true);

  const {
    register,
    setValue,
    control,
    handleSubmit,
    watch,
    formState: { isSubmitting, isSubmitted, isValid },
  } = useForm({
    defaultValues: {
      title: "",
      isUserRecipient: true,
      address: "",
    },
    resolver: zodResolver(addAddressFormSchema),
  });

  const handleChangeAddress = (value: AddressValue) => {
    setIsEditingAddress(false);
    setValue("address", value.address, {
      shouldDirty: true,
      shouldTouch: true,
      shouldValidate: true,
    });
    setValue("addressGeolocation", {
      lat: value.position.lat,
      lng: value.position.lng,
    });
  };

  const onSubmit: SubmitHandler<AddAddressFormType> = async (data) => {
    const res = await addAddressAction(data);

    if (res.success) onSubmitSuccessfully?.(data);
    else {
      console.error(res.error);
    }
  };

  const isUserRecipient = watch("isUserRecipient");

  const geolocation = watch("addressGeolocation");

  return isEditingAddress ? (
    <AddressPicker
      className="h-[500px]"
      initialCenter={geolocation}
      onChange={handleChangeAddress}
    />
  ) : (
    <div className="container flex flex-col gap-4 lg:p-6">
      {!!geolocation && (
        <StaticMap
          center={geolocation}
          className="relative h-[247px] rounded-lg lg:hidden"
          hasMarker
        >
          <IconButton
            className="absolute right-2 bottom-2 z-1000"
            onClick={() => setIsEditingAddress(true)}
          >
            <Edit2_Outline />
          </IconButton>
        </StaticMap>
      )}

      <form
        className="flex flex-col gap-4 lg:gap-6"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Controller
          control={control}
          name="title"
          render={({ field, fieldState }) => (
            <Responsive<FieldTextTypeProps>
              component={Field}
              label="عنوان آدرس"
              size={{ initial: "sm", lg: "md" }}
              {...field}
              error={fieldState.error?.message}
            />
          )}
        />
        <label className="flex max-w-fit items-center gap-1">
          <input
            className="accent-primary border-primary size-4"
            type="checkbox"
            {...register("isUserRecipient")}
          />
          <span className="text-caption-md text-neutral-gray-8">
            تحویل گیرنده خودم هستم.
          </span>
        </label>
        {isUserRecipient ? (
          <Controller
            control={control}
            name="userPhoneNumber"
            shouldUnregister
            defaultValue=""
            render={({ field, fieldState }) => (
              <Responsive<FieldTextTypeProps>
                component={Field}
                type="text"
                label="شماره همراه"
                size={{ initial: "sm", lg: "md" }}
                {...field}
                error={fieldState.error?.message}
              />
            )}
          />
        ) : (
          <>
            <Controller
              control={control}
              name="recipientFullName"
              shouldUnregister
              defaultValue=""
              render={({ field, fieldState }) => (
                <Responsive<FieldTextTypeProps>
                  component={Field}
                  label="نام و نام‌خانوادگی تحویل گیرنده"
                  size={{ initial: "sm", lg: "md" }}
                  {...field}
                  error={fieldState.error?.message}
                />
              )}
            />
            <Controller
              control={control}
              name="recipientPhoneNumber"
              shouldUnregister
              defaultValue=""
              render={({ field, fieldState }) => (
                <Responsive<FieldTextTypeProps>
                  component={Field}
                  label="شماره همراه تحویل گیرنده"
                  size={{ initial: "sm", lg: "md" }}
                  {...field}
                  error={fieldState.error?.message}
                />
              )}
            />
          </>
        )}
        <Controller
          control={control}
          name="address"
          render={({ field, fieldState }) => (
            <Responsive
              component={Textarea}
              label="آدرس دقیق شما"
              className="lg:h-[100px]"
              size={{ initial: "sm", lg: "md" }}
              {...field}
              error={fieldState.error?.message}
            />
          )}
        />

        <div className="flex gap-6 max-lg:mb-4">
          <Button
            variant="text"
            size="md"
            className="flex-1 max-lg:hidden"
            onClick={() => setIsEditingAddress(true)}
          >
            ویرایش آدرس انتخابی
          </Button>

          <Button
            variant="text"
            className="flex-1 lg:hidden"
            size="sm"
            onClick={onCancellation}
            type="button"
          >
            انصراف
          </Button>

          <ResponsiveButton
            size={{ initial: "sm", lg: "md" }}
            className="flex-1"
            disabled={isSubmitting || (isSubmitted && !isValid)}
            type="submit"
          >
            ثبت آدرس
          </ResponsiveButton>
        </div>
      </form>
    </div>
  );
}
