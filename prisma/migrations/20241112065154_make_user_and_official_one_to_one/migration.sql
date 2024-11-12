/*
  Warnings:

  - You are about to drop the column `userId` on the `official` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[officialId]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE `official` DROP FOREIGN KEY `Official_userId_fkey`;

-- DropIndex
DROP INDEX `Official_userId_key` ON `official`;

-- AlterTable
ALTER TABLE `official` DROP COLUMN `userId`;

-- AlterTable
ALTER TABLE `user` ADD COLUMN `officialId` VARCHAR(191) NULL;

-- CreateIndex
CREATE UNIQUE INDEX `User_officialId_key` ON `User`(`officialId`);

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_officialId_fkey` FOREIGN KEY (`officialId`) REFERENCES `Official`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
