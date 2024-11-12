/*
  Warnings:

  - You are about to drop the column `officialId` on the `user` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[userId]` on the table `Official` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE `user` DROP FOREIGN KEY `User_officialId_fkey`;

-- DropIndex
DROP INDEX `User_officialId_key` ON `user`;

-- AlterTable
ALTER TABLE `official` ADD COLUMN `userId` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `user` DROP COLUMN `officialId`;

-- CreateIndex
CREATE UNIQUE INDEX `Official_userId_key` ON `Official`(`userId`);

-- AddForeignKey
ALTER TABLE `Official` ADD CONSTRAINT `Official_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
