/*
  Warnings:

  - You are about to drop the column `name` on the `FieldType` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[label]` on the table `FieldType` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `FieldType` DROP COLUMN `name`;

-- CreateIndex
CREATE UNIQUE INDEX `FieldType_label_key` ON `FieldType`(`label`);
