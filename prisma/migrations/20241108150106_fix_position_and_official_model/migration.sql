/*
  Warnings:

  - You are about to drop the column `cityId` on the `Position` table. All the data in the column will be lost.
  - You are about to drop the column `districtId` on the `Position` table. All the data in the column will be lost.
  - You are about to drop the column `subDistrictId` on the `Position` table. All the data in the column will be lost.
  - Added the required column `level` to the `Position` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Position` DROP FOREIGN KEY `Position_cityId_fkey`;

-- DropForeignKey
ALTER TABLE `Position` DROP FOREIGN KEY `Position_districtId_fkey`;

-- DropForeignKey
ALTER TABLE `Position` DROP FOREIGN KEY `Position_subDistrictId_fkey`;

-- AlterTable
ALTER TABLE `Official` ADD COLUMN `cityId` INTEGER NULL,
    ADD COLUMN `districtId` INTEGER NULL,
    ADD COLUMN `subDistrictId` INTEGER NULL;

-- AlterTable
ALTER TABLE `Position` DROP COLUMN `cityId`,
    DROP COLUMN `districtId`,
    DROP COLUMN `subDistrictId`,
    ADD COLUMN `level` ENUM('PROVINCE', 'CITY', 'DISTRICT', 'SUBDISTRICT') NOT NULL;

-- AddForeignKey
ALTER TABLE `Official` ADD CONSTRAINT `Official_cityId_fkey` FOREIGN KEY (`cityId`) REFERENCES `City`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Official` ADD CONSTRAINT `Official_districtId_fkey` FOREIGN KEY (`districtId`) REFERENCES `District`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Official` ADD CONSTRAINT `Official_subDistrictId_fkey` FOREIGN KEY (`subDistrictId`) REFERENCES `SubDistrict`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
