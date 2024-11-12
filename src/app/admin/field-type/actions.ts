"use server";

import prisma from "@/lib/prisma";
import { ActionResponse, ActionResponses, ErrorCode } from "@/types/actions";
import {
  BaseFieldType,
  FieldType,
  FieldValidation,
  Prisma,
} from "@prisma/client";
import { connect } from "http2";
import { revalidatePath } from "next/cache";

export const getAllTableNames = async (): Promise<ActionResponse<string[]>> => {
  try {
    const tableNames = Prisma.dmmf.datamodel.models.map((model) => model.name);

    return ActionResponses.success(tableNames);
  } catch (error) {
    console.error("Error getting table names:", error);
    return ActionResponses.serverError();
  }
};

export const getColumnNames = async (
  tableName: string,
): Promise<ActionResponse<string[]>> => {
  try {
    const modelDescription = Prisma.dmmf.datamodel.models.find(
      (model) => model.name === tableName,
    );

    if (!modelDescription) {
      throw new Error(`Model for table '${tableName}' not found.`);
    }

    const columnNames = modelDescription.fields.map((field) => field.name);

    return ActionResponses.success(columnNames);
  } catch (error) {
    console.error("Error getting column names:", error);
    return ActionResponses.serverError();
  }
};

type FieldTypeResponse = Prisma.FieldTypeGetPayload<object> & {
  relation?: {
    targetTable: string;
    targetField: string;
  } | null;
};

function validateInput(
  name: string,
  baseType: string,
  targetTable?: string,
  targetField?: string,
): ActionResponse<FieldTypeResponse> | null {
  if (!name || !baseType) {
    return ActionResponses.badRequest(
      "Name and base type are required",
      !name ? "name" : "baseType",
    );
  }

  if (baseType === "RELATION" && (!targetTable || !targetField)) {
    return ActionResponses.badRequest(
      "Target table and field are required for relation type",
      !targetTable ? "targetTable" : "targetField",
    );
  }

  return null;
}

export async function upsertFieldType(
  formData: FormData,
): Promise<ActionResponse<FieldTypeResponse>> {
  try {
    const rawId = formData.get("id");
    const id = rawId ? Number(rawId) : null;
    const name = formData.get("name") as string;
    const placeholder = (formData.get("placeholder") as string) || null;
    const defaultValue = (formData.get("defaultValue") as string) || null;
    const baseType = formData.get("baseType") as BaseFieldType;
    const targetTable = formData.get("targetTable") as string;
    const targetField = formData.get("targetField") as string;

    const validationError = validateInput(
      name,
      baseType,
      targetTable,
      targetField,
    );
    if (validationError) return validationError;

    if (baseType === "relation" && (!targetTable || !targetField)) {
      return ActionResponses.badRequest(
        "Target table and field are required for relation type",
        !targetTable ? "targetTable" : "targetField",
      );
    }

    const result = await prisma.$transaction(async (tx) => {
      const fieldTypeData = {
        name,
        placeholder: placeholder || null,
        defaultValue: defaultValue || null,
        baseType: baseType,
      };

      let fieldType: Prisma.FieldTypeGetPayload<{
        include: { relation: true };
      }>;

      if (id) {
        const existing = await tx.fieldType.findUnique({
          where: { id },
          include: { relation: true },
        });

        if (!existing) {
          throw new Error(ErrorCode.NOT_FOUND);
        }

        fieldType = await tx.fieldType.update({
          where: { id },
          data: fieldTypeData,
          include: { relation: true },
        });
      } else {
        fieldType = await tx.fieldType.create({
          data: fieldTypeData,
          include: { relation: true },
        });
      }

      if (baseType === "relation") {
        const relationData = {
          targetTable,
          targetField,
        };

        if (fieldType.relation) {
          await tx.fieldRelation.update({
            where: { fieldTypeId: fieldType.id },
            data: relationData,
          });
        } else {
          await tx.fieldRelation.create({
            data: {
              ...relationData,
              fieldTypeId: fieldType.id,
            },
          });
        }
      } else if (fieldType.relation) {
        await tx.fieldRelation.delete({
          where: { fieldTypeId: fieldType.id },
        });
      }

      const updatedFieldType = await tx.fieldType.findUniqueOrThrow({
        where: { id: fieldType.id },
        include: { relation: true },
      });

      return updatedFieldType;
    });
    const responseData: FieldTypeResponse = {
      id: result.id,
      name: result.name,
      placeholder: result.placeholder,
      defaultValue: result.defaultValue,
      baseType: result.baseType,
      relation: result.relation
        ? {
            targetTable: result.relation.targetTable,
            targetField: result.relation.targetField,
          }
        : null,
    };

    revalidatePath("/admin/field-type");
    return ActionResponses.success(responseData);
  } catch (error) {
    console.error("Error in upsertFieldType:", error);

    if (error instanceof Error) {
      if (error.message === ErrorCode.NOT_FOUND) {
        return ActionResponses.notFound("Field type not found");
      }
    }

    return ActionResponses.serverError("Failed to save field type");
  }
}

export async function deleteFieldType(
  id: number,
): Promise<ActionResponse<{ id: number }>> {
  try {
    if (!id) {
      return ActionResponses.badRequest("ID is required", "id");
    }

    await prisma.$transaction(async (tx) => {
      const fieldType = await tx.fieldType.findUnique({
        where: { id },
      });

      if (!fieldType) {
        throw new Error(ErrorCode.NOT_FOUND);
      }

      await tx.fieldType.delete({
        where: { id },
      });
    });

    revalidatePath("/admin/field-type");
    return ActionResponses.success({ id });
  } catch (error) {
    console.error("Error in deleteFieldType:", error);

    if (error instanceof Error) {
      if (error.message === ErrorCode.NOT_FOUND) {
        return ActionResponses.notFound("Field type not found");
      }
    }

    return ActionResponses.serverError("Failed to delete field type");
  }
}

function validateInputValidation(
  value: string,
  message: string,
): ActionResponse<FieldValidation> | null {
  if (!value || !message) {
    return ActionResponses.badRequest(
      "Name and base type are required",
      !value ? "name" : "baseType",
    );
  }

  return null;
}

export async function getFieldValidation(
  id: string,
): Promise<ActionResponse<FieldValidation | null>> {
  try {
    const fieldValidations = await prisma.fieldValidation.findUnique({
      where: { fieldTypeId: Number(id) },
    });
    return ActionResponses.success(fieldValidations);
  } catch (error) {
    console.error("Error in getFieldValidations:", error);

    return ActionResponses.serverError("Failed to fetch field validations");
  }
}

export async function upsertFieldValidation(
  formData: FormData,
): Promise<ActionResponse<FieldValidation>> {
  try {
    const id = formData.get("id") as string;
    const rawFieldId = formData.get("fieldId");
    const fieldId = rawFieldId ? Number(rawFieldId) : 0;
    const message = formData.get("message") as string;
    const value = formData.get("value") as string;

    const validationInputError = validateInputValidation(value, message);
    if (validationInputError) return validationInputError;
    const result = await prisma.$transaction(async (tx) => {
      const fieldValidationData = {
        id: id,
        fieldTypeid: fieldId,
        message: message,
        value: value,
        fieldType: { connect: { id: fieldId } },
      };

      let fieldValidation: Prisma.FieldValidationGetPayload<{}>;

      if (id) {
        const existing = await tx.fieldValidation.findUnique({
          where: { id: id },
        });

        if (!existing) {
          throw new Error(ErrorCode.NOT_FOUND);
        }

        fieldValidation = await tx.fieldValidation.update({
          where: { id },
          data: fieldValidationData,
        });
      } else {
        fieldValidation = await tx.fieldValidation.create({
          data: fieldValidationData,
        });
      }

      const updatedFieldType = await tx.fieldValidation.findUniqueOrThrow({
        where: { id: id },
      });

      return updatedFieldType;
    });
    const responseData: FieldValidation = {
      id: result.id,
      type: result.type,
      message: result.message,
      value: result.value,
      fieldTypeId: result.fieldTypeId,
    };

    revalidatePath("/admin/field-type");
    return ActionResponses.success(responseData);
  } catch (error) {
    console.error("Error in createFieldValidation:", error);

    return ActionResponses.serverError("Failed to create field validation");
  }
}

export async function deleteFieldValidation(
  id: string,
): Promise<ActionResponse<{ id: string }>> {
  try {
    if (!id) {
      return ActionResponses.badRequest("ID is required", "id");
    }

    await prisma.fieldValidation.delete({
      where: { id },
    });

    revalidatePath("/admin/field-type");

    return ActionResponses.success({ id });
  } catch (error) {
    console.error("Error in deleteFieldValidation:", error);

    if (error instanceof Error) {
      if (error.message === ErrorCode.NOT_FOUND) {
        return ActionResponses.notFound("Field validation not found");
      }
    }

    return ActionResponses.serverError("Failed to delete field validation");
  }
}
