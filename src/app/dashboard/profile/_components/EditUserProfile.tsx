"use client";

import Button from "@/components/atoms/Button";
import { Field, FieldErrorMessage, FieldInput } from "@/components/atoms/Field";
import { Edit_Outline } from "@/components/atoms/icons/Content-Edit/Edit";
import DatePicker from "@/components/molecules/DatePicker";
import { editUserProfileFormSchema } from "@/utils/schemas";
import { DevTool } from "@hookform/devtools";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";

const EditUserProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const { control, reset, handleSubmit } = useForm({
    resolver: zodResolver(editUserProfileFormSchema),
    disabled: !isEditing,
    defaultValues: {
      name: "",
      fname: "",
      email: "",
      phoneNumber: "",
      birthday: null,
      displayName: "",
    },
  });

  const handleCancel = () => {
    setIsEditing(false);
    reset();
  };

  const handleSaveChanges = handleSubmit(() => {});

  return (
    <>
      <div>
        <form onSubmit={handleSaveChanges}>
          <div className="grid grid-cols-1 gap-3 lg:grid-cols-2 lg:gap-4">
            <Controller
              control={control}
              name="name"
              render={({ field, fieldState }) => (
                <Field color={fieldState.error ? "error" : "dark"}>
                  <FieldInput
                    label="نام"
                    type="text"
                    size="responsive"
                    {...field}
                  />
                  {fieldState.error && (
                    <FieldErrorMessage>
                      {fieldState.error?.message}
                    </FieldErrorMessage>
                  )}
                </Field>
              )}
            />
            <Controller
              control={control}
              name="fname"
              render={({ field, fieldState }) => (
                <Field color={fieldState.error ? "error" : "dark"}>
                  <FieldInput
                    label="نام خانوادگی"
                    type="text"
                    size="responsive"
                    {...field}
                  />
                  {fieldState.error && (
                    <FieldErrorMessage>
                      {fieldState.error?.message}
                    </FieldErrorMessage>
                  )}
                </Field>
              )}
            />
            <Controller
              control={control}
              name="email"
              render={({ field, fieldState }) => (
                <Field color={fieldState.error ? "error" : "dark"}>
                  <FieldInput
                    label="آدرس ایمیل"
                    type="email"
                    size="responsive"
                    {...field}
                  />
                  {fieldState.error && (
                    <FieldErrorMessage>
                      {fieldState.error?.message}
                    </FieldErrorMessage>
                  )}
                </Field>
              )}
            />
            <Controller
              control={control}
              name="phoneNumber"
              render={({ field, fieldState }) => (
                <Field color={fieldState.error ? "error" : "dark"}>
                  <FieldInput
                    label="شماره همراه"
                    type="text"
                    size="responsive"
                    {...field}
                  />
                  {fieldState.error && (
                    <FieldErrorMessage>
                      {fieldState.error?.message}
                    </FieldErrorMessage>
                  )}
                </Field>
              )}
            />
            <Controller
              control={control}
              name="birthday"
              render={({ field, fieldState }) => (
                <Field color={fieldState.error ? "error" : "dark"}>
                  <DatePicker
                    type="text"
                    label="تاریخ تولد (اختیاری)"
                    size="responsive"
                    value={field.value}
                    onChange={(value) =>
                      field.onChange(value.toDate().toISOString())
                    }
                    disabled={field.disabled}
                    name={field.name}
                  />
                  {fieldState.error && (
                    <FieldErrorMessage>
                      {fieldState.error?.message}
                    </FieldErrorMessage>
                  )}
                </Field>
              )}
            />
            <Controller
              control={control}
              name="displayName"
              render={({ field, fieldState }) => (
                <Field color={fieldState.error ? "error" : "dark"}>
                  <FieldInput
                    label="نام نمایشی"
                    type="text"
                    size="responsive"
                    {...field}
                  />
                  {fieldState.error && (
                    <FieldErrorMessage>
                      {fieldState.error?.message}
                    </FieldErrorMessage>
                  )}
                </Field>
              )}
            />
          </div>

          {isEditing ? (
            <div className="mt-6 flex gap-4 lg:justify-end">
              <Button
                type="button"
                variant="outline"
                size="responsive"
                className="max-lg:flex-1"
                onClick={handleCancel}
              >
                انصراف
              </Button>
              <Button size="responsive" className="max-lg:flex-1" type="submit">
                ذخیره اطلاعات
              </Button>
            </div>
          ) : (
            <div className="mt-6 flex justify-center">
              <Button
                type="button"
                prefixIcon={<Edit_Outline />}
                onClick={() => setIsEditing(true)}
                variant="outline"
                size="responsive"
              >
                ویرایش اطلاعات شخصی
              </Button>
            </div>
          )}
        </form>
      </div>
      <DevTool control={control} />
    </>
  );
};

export default EditUserProfile;
