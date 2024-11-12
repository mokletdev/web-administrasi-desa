"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Prisma } from "@prisma/client";
import { useRouter } from "next/navigation";
import { FC, ReactNode, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { submitForm } from "../../actions";

type Field = Prisma.FieldGetPayload<{
  include: { options: true; fieldType: true };
}>;

const InputContainer: FC<{ children?: ReactNode }> = ({ children }) => {
  return <div className="mb-4 flex flex-col gap-y-1">{children}</div>;
};

export const DynamicForm: FC<{
  fields: Field[];
  formId: string;
  userId: string;
}> = ({ fields, formId, userId }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = useState(false);
  const { toast, dismiss } = useToast();
  const router = useRouter();

  const onSubmit = handleSubmit(async (data) => {
    setLoading(true);

    const loadingToast = toast({
      title: "Mengirim...",
      description: "Permintaan pengajuan surat anda sedang diproses",
    });

    const answers = Object.entries(data).map(([key, value]) => ({
      name: key,
      value: Array.isArray(value) ? value.join(", ") : value, // Handle checkboxes if needed
    }));

    const submissionResult = await submitForm({ userId, formId, answers });

    if (submissionResult?.error) {
      setLoading(false);
      dismiss(loadingToast.id);
      return toast({
        title: "Gagal Mengirim!",
        description: `Gagal mengirim data (${submissionResult.error.message})`,
      });
    }

    dismiss(loadingToast.id);
    toast({
      title: "Berhasil Menambahkan!",
      description: `Berhasil mengirim data formulir pengajuan surat. Anda akan diarahkan ke riwayat permintaan anda.`,
    });
    setLoading(false);
    return router.push("/dashboard/request");
  });

  const renderField = (field: Field) => {
    const { id, fieldType, label, required, options } = field;

    switch (fieldType.baseType) {
      case "text":
      case "email":
      case "password":
        return (
          <InputContainer key={field.id}>
            <Label>{label}</Label>
            <Controller
              name={id.toString()}
              control={control}
              rules={{
                required,
                // validate: (value) => validateField(validations, value),
              }}
              defaultValue={""}
              render={({ field }) => (
                <Input {...field} type={fieldType.baseType} />
              )}
            />
            {errors[label] && (
              <span className="text-red-500">
                {errors[label]?.message?.toString()}
              </span>
            )}
          </InputContainer>
        );

      case "longtext":
        return (
          <InputContainer key={field.id}>
            <Label>{label}</Label>
            <Controller
              name={id.toString()}
              control={control}
              rules={{
                required,
                // validate: (value) => validateField(validations, value),
              }}
              defaultValue={""}
              render={({ field }) => <Textarea {...field} rows={6} />}
            />
            {errors[label] && (
              <span className="text-red-500">
                {errors[label]?.message?.toString()}
              </span>
            )}
          </InputContainer>
        );

      case "radio":
        return (
          <InputContainer key={field.id}>
            <Label className="mb-2">{label}</Label>
            <Controller
              name={id.toString()}
              control={control}
              rules={{ required }}
              render={({ field }) => (
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-col space-y-1"
                >
                  {options?.map((option) => (
                    <div
                      key={option.id}
                      className="flex items-center space-x-3 space-y-0"
                    >
                      <RadioGroupItem value={option.value} id={option.id} />
                      <Label htmlFor={option.id}>{option.value}</Label>
                    </div>
                  ))}
                </RadioGroup>
              )}
            />
            {errors[label] && (
              <span className="text-red-500">
                {errors[label]?.message?.toString()}
              </span>
            )}
          </InputContainer>
        );

      case "checkbox":
        return (
          <InputContainer key={field.id}>
            <Label>{label}</Label>
            {options?.map((option) => (
              <div key={option.id} className="my-2 flex items-center gap-x-2">
                <Controller
                  name={id.toString()}
                  control={control}
                  defaultValue={[]}
                  render={({ field }) => {
                    return (
                      <Checkbox
                        checked={field.value?.includes(option.value)}
                        onCheckedChange={(checked) => {
                          return checked
                            ? field.onChange([...field.value, option.value])
                            : field.onChange(
                                field.value?.filter(
                                  (value: string) => value !== option.value,
                                ),
                              );
                        }}
                      />
                    );
                  }}
                />
                <Label htmlFor={option.value}>{option.value}</Label>
              </div>
            ))}
            {errors[label] && (
              <span className="text-red-500">
                {errors[label]?.message?.toString()}
              </span>
            )}
          </InputContainer>
        );

      case "relation":
        // TODO: Handle autofill and auto-complete by relation
        return (
          <InputContainer key={field.id}>
            <Label>{label}</Label>
            <Controller
              name={id.toString()}
              control={control}
              rules={{
                required,
                // validate: (value) => validateField(validations, value),
              }}
              defaultValue={""}
              render={({ field }) => <Input {...field} type={"text"} />}
            />
            {errors[label] && (
              <span className="text-red-500">
                {errors[label]?.message?.toString()}
              </span>
            )}
          </InputContainer>
        );

      default:
        return null;
    }
  };

  // const validateField = (validations, value) => {
  //   if (!validations) return true;

  //   for (let validation of validations) {
  //     switch (validation.type) {
  //       case "MIN":
  //         if (value.length < parseInt(validation.value)) {
  //           return (
  //             validation.message || `Minimum length is ${validation.value}`
  //           );
  //         }
  //         break;
  //       case "MAX":
  //         if (value.length > parseInt(validation.value)) {
  //           return (
  //             validation.message || `Maximum length is ${validation.value}`
  //           );
  //         }
  //         break;
  //       case "PATTERN":
  //         if (!new RegExp(validation.value).test(value)) {
  //           return validation.message || "Invalid format";
  //         }
  //         break;
  //       default:
  //         break;
  //     }
  //   }
  //   return true;
  // };

  return (
    <form onSubmit={onSubmit} className="w-full space-y-6">
      {fields.map((field) => renderField(field))}
      <Button
        type="submit"
        variant={"default"}
        className="w-full"
        disabled={loading}
        size={"lg"}
      >
        Submit
      </Button>
    </form>
  );
};
