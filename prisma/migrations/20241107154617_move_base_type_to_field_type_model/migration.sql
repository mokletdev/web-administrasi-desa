/*
  Warnings:

  - You are about to drop the column `baseType` on the `Field` table. All the data in the column will be lost.
  - Added the required column `baseType` to the `FieldType` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Field` DROP COLUMN `baseType`;

-- AlterTable
ALTER TABLE `FieldType` ADD COLUMN `baseType` ENUM('text', 'number', 'email', 'password', 'longtext', 'radio', 'checkbox', 'relation', 'date', 'datetime', 'time', 'file', 'phone') NOT NULL;
