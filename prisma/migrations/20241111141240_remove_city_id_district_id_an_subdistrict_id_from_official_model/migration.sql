/*
  Warnings:

  - You are about to drop the column `cityId` on the `official` table. All the data in the column will be lost.
  - You are about to drop the column `districtId` on the `official` table. All the data in the column will be lost.
  - You are about to drop the column `subDistrictId` on the `official` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `official` DROP FOREIGN KEY `Official_cityId_fkey`;

-- DropForeignKey
ALTER TABLE `official` DROP FOREIGN KEY `Official_districtId_fkey`;

-- DropForeignKey
ALTER TABLE `official` DROP FOREIGN KEY `Official_subDistrictId_fkey`;

-- AlterTable
ALTER TABLE `official` DROP COLUMN `cityId`,
    DROP COLUMN `districtId`,
    DROP COLUMN `subDistrictId`;
