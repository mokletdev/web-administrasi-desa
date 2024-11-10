/*
  Warnings:

  - You are about to alter the column `type` on the `FieldValidation` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Enum(EnumId(3))`.

*/
-- AlterTable
ALTER TABLE `FieldValidation` MODIFY `type` ENUM('MIN', 'MAX', 'PATTERN') NOT NULL DEFAULT 'PATTERN';
