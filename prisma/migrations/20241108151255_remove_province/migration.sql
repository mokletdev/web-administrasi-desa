/*
  Warnings:

  - The values [PROVINCE] on the enum `Position_level` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterTable
ALTER TABLE `position` MODIFY `level` ENUM('CITY', 'DISTRICT', 'SUBDISTRICT') NOT NULL;
