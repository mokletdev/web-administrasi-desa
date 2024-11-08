/*
  Warnings:

  - You are about to drop the column `documentId` on the `Approval` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `Document` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Sign` table. All the data in the column will be lost.
  - Added the required column `positionId` to the `Sign` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Approval` DROP FOREIGN KEY `Approval_documentId_fkey`;

-- DropForeignKey
ALTER TABLE `Sign` DROP FOREIGN KEY `Sign_userId_fkey`;

-- DropIndex
DROP INDEX `Document_status_idx` ON `Document`;

-- AlterTable
ALTER TABLE `Approval` DROP COLUMN `documentId`,
    ADD COLUMN `submissionId` CHAR(36) NULL;

-- AlterTable
ALTER TABLE `Document` DROP COLUMN `status`;

-- AlterTable
ALTER TABLE `Sign` DROP COLUMN `userId`,
    ADD COLUMN `positionId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `Submission` ADD COLUMN `status` ENUM('PENDING_APPROVAL', 'APPROVED', 'REJECTED', 'READY_FOR_SIGNATURE', 'SIGNED') NOT NULL DEFAULT 'PENDING_APPROVAL';

-- CreateTable
CREATE TABLE `Position` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,
    `cityId` INTEGER NULL,
    `districtId` INTEGER NULL,
    `subDistrictId` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Official` (
    `id` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `positionId` INTEGER NOT NULL,

    INDEX `Official_userId_idx`(`userId`),
    INDEX `Official_positionId_idx`(`positionId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE INDEX `Approval_submissionId_idx` ON `Approval`(`submissionId`);

-- AddForeignKey
ALTER TABLE `Position` ADD CONSTRAINT `Position_cityId_fkey` FOREIGN KEY (`cityId`) REFERENCES `City`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Position` ADD CONSTRAINT `Position_districtId_fkey` FOREIGN KEY (`districtId`) REFERENCES `District`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Position` ADD CONSTRAINT `Position_subDistrictId_fkey` FOREIGN KEY (`subDistrictId`) REFERENCES `SubDistrict`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Official` ADD CONSTRAINT `Official_positionId_fkey` FOREIGN KEY (`positionId`) REFERENCES `Position`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Official` ADD CONSTRAINT `Official_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Sign` ADD CONSTRAINT `Sign_positionId_fkey` FOREIGN KEY (`positionId`) REFERENCES `Position`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Approval` ADD CONSTRAINT `Approval_submissionId_fkey` FOREIGN KEY (`submissionId`) REFERENCES `Submission`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
