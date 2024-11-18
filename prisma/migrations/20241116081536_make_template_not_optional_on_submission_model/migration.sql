/*
  Warnings:

  - Made the column `templateId` on table `Submission` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `Submission` DROP FOREIGN KEY `Submission_templateId_fkey`;

-- AlterTable
ALTER TABLE `Submission` MODIFY `templateId` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `Submission` ADD CONSTRAINT `Submission_templateId_fkey` FOREIGN KEY (`templateId`) REFERENCES `Template`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
