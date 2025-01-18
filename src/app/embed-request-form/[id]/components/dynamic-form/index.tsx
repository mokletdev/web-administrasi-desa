"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { Prisma } from "@prisma/client";
import { FC, ReactNode, useState } from "react";
import { Control, Controller, FieldValues, useForm } from "react-hook-form";
import { ConfirmationDialog } from "./confirmation-dialog";
import FileInput from "./input";

type Field = Prisma.FieldGetPayload<{
  include: { options: true; fieldType: true };
}> & {
  variableName: string;
};

type FormAnswer = {
  name: string;
  value: string;
};

type FileData = {
  name: string;
  value: File | undefined;
};

interface DynamicFormProps {
  fields: Array<Field>;
  serviceId: string;
  userId: string;
}

// Components
const InputContainer: FC<{ children?: ReactNode }> = ({ children }) => (
  <div className="mb-4 flex flex-col gap-y-1">{children}</div>
);

const RequiredMark: FC = () => (
  <span className="font-bold text-destructive"> *</span>
);

const ErrorMessage: FC<{ message?: string }> = ({ message }) =>
  message ? <span className="text-red-500">{message}</span> : null;

// Field Renderers
const renderTextInput = (
  field: Field,
  control: Control<FieldValues>,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  errors: any,
  type: "text" | "email" | "password" | "longtext",
) => {
  const { label, required, variableName, fieldType } = field;
  const isTextArea = type === "longtext";
  const InputComponent = isTextArea ? Textarea : Input;
  const inputProps = isTextArea ? { rows: 6 } : { type };

  return (
    <InputContainer key={field.id}>
      <Label>
        {label ?? fieldType.label}
        {required && <RequiredMark />}
      </Label>
      <Controller
        name={variableName}
        control={control}
        rules={{ required: required ?? false }}
        defaultValue=""
        render={({ field: formField }) => (
          <InputComponent {...formField} {...inputProps} />
        )}
      />
      <ErrorMessage
        message={label ? errors[label]?.message?.toString() : undefined}
      />
    </InputContainer>
  );
};

const renderRadioGroup = (
  field: Field,
  control: Control<FieldValues>,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  errors: any,
) => {
  const { label, required, variableName, options } = field;

  return (
    <InputContainer key={field.id}>
      <Label className="mb-2">
        {label}
        {required && <RequiredMark />}
      </Label>
      <Controller
        name={variableName}
        control={control}
        rules={{ required: required ?? false }}
        render={({ field: formField }) => (
          <RadioGroup
            onValueChange={formField.onChange}
            defaultValue={formField.value}
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
      <ErrorMessage
        message={label ? errors[label]?.message?.toString() : undefined}
      />
    </InputContainer>
  );
};

const renderCheckboxGroup = (
  field: Field,
  control: Control<FieldValues>,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  errors: any,
) => {
  const { label, required, variableName, options } = field;

  return (
    <InputContainer key={field.id}>
      <Label>
        {label}
        {required && <RequiredMark />}
      </Label>
      {options?.map((option) => (
        <div key={option.id} className="my-2 flex items-center gap-x-2">
          <Controller
            name={variableName}
            control={control}
            defaultValue={[]}
            render={({ field: formField }) => (
              <Checkbox
                checked={formField.value?.includes(option.value)}
                onCheckedChange={(checked) => {
                  const newValue = checked
                    ? [...(formField.value || []), option.value]
                    : formField.value?.filter(
                        (value: string) => value !== option.value,
                      );
                  formField.onChange(newValue);
                }}
              />
            )}
          />
          <Label htmlFor={option.value}>{option.value}</Label>
        </div>
      ))}
      <ErrorMessage
        message={label ? errors[label]?.message?.toString() : undefined}
      />
    </InputContainer>
  );
};

// Main Component
export const DynamicForm: FC<DynamicFormProps> = ({
  fields,
  serviceId,
  userId,
}) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [loading, setLoading] = useState(false);
  const [confirmationOpen, setConfirmationOpen] = useState(false);
  const [answers, setAnswers] = useState<FormAnswer[]>([]);
  const [files, setFiles] = useState<FileData[]>(
    fields
      .filter((field) => field.fieldType.baseType === "file")
      .map((field) => ({ name: field.variableName, value: undefined })),
  );

  const processFiles = async (formData: FieldValues) => {
    const filePromises = files.map(async (file) => {
      if (!file.value) return null;
      const arrayBuffer = await file.value.arrayBuffer();
      const base64File = Buffer.from(arrayBuffer).toString("base64");
      return {
        name: file.name,
        value: `data:${file.value.type};base64,${base64File}`,
      };
    });

    const processedFiles = (await Promise.all(filePromises)).filter(Boolean);
    return Object.entries(formData)
      .map(([key, value]) => ({
        name: key,
        value: Array.isArray(value) ? value.join(", ") : value,
      }))
      .concat(processedFiles as FormAnswer[]);
  };

  const onSubmit = handleSubmit(async (data) => {
    const processedAnswers = await processFiles(data);
    setAnswers(processedAnswers);
    setConfirmationOpen(true);
  });

  const renderField = (field: Field) => {
    const { fieldType } = field;

    switch (fieldType.baseType) {
      case "text":
      case "email":
      case "password":
        return renderTextInput(field, control, errors, fieldType.baseType);
      case "longtext":
        return renderTextInput(field, control, errors, "longtext");
      case "radio":
        return renderRadioGroup(field, control, errors);
      case "checkbox":
        return renderCheckboxGroup(field, control, errors);
      case "file":
        return (
          <FileInput
            key={field.id}
            fieldName={field.label ?? ""}
            required={field.required ?? false}
            accept={["image/png", "image/jpeg"]}
            centerText="Upload file"
            id={field.id.toString()}
            name={field.variableName}
            files={files}
            setFiles={setFiles}
          />
        );
      case "relation":
        return renderTextInput(field, control, errors, "text");
      default:
        return null;
    }
  };

  return (
    <>
      <form onSubmit={onSubmit} className="w-full space-y-6">
        <div className="mb-4">
          <h3 className="mb-4">Input</h3>
          {fields
            .filter((field) => field.fieldType.baseType !== "file")
            .map(renderField)}
        </div>

        {fields.some((field) => field.fieldType.baseType === "file") && (
          <div>
            <h3 className="mb-4">Persyaratan</h3>
            {fields
              .filter((field) => field.fieldType.baseType === "file")
              .map(renderField)}
          </div>
        )}

        <Button
          type="submit"
          variant="default"
          className="w-full"
          disabled={loading}
          size="lg"
        >
          Submit
        </Button>
      </form>

      <ConfirmationDialog
        open={confirmationOpen}
        setIsOpen={setConfirmationOpen}
        setLoading={setLoading}
        serviceId={serviceId}
        userId={userId}
        answers={answers}
      />
    </>
  );
};
