/*
  Warnings:

  - You are about to drop the column `userId` on the `Template` table. All the data in the column will be lost.
  - Added the required column `createdById` to the `AdministrativeService` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updateAt` to the `AdministrativeService` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Template` DROP FOREIGN KEY `Template_userId_fkey`;

-- AlterTable
ALTER TABLE `AdministrativeService` ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `createdById` VARCHAR(191) NOT NULL,
    ADD COLUMN `updateAt` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `AdministrativeUnit` ADD COLUMN `letterhead` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `Template` DROP COLUMN `userId`;

-- AddForeignKey
ALTER TABLE `AdministrativeService` ADD CONSTRAINT `AdministrativeService_createdById_fkey` FOREIGN KEY (`createdById`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
