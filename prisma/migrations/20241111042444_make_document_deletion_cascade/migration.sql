/*
  Warnings:

  - You are about to alter the column `type` on the `fieldvalidation` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Enum(EnumId(3))`.

*/
-- DropForeignKey
ALTER TABLE `form` DROP FOREIGN KEY `Form_documentId_fkey`;

-- DropForeignKey
ALTER TABLE `sign` DROP FOREIGN KEY `Sign_documentId_fkey`;

-- DropForeignKey
ALTER TABLE `sign` DROP FOREIGN KEY `Sign_positionId_fkey`;

-- DropForeignKey
ALTER TABLE `signrequest` DROP FOREIGN KEY `SignRequest_submissionId_fkey`;

-- AlterTable
ALTER TABLE `fieldvalidation` MODIFY `type` ENUM('MIN', 'MAX', 'PATTERN') NOT NULL DEFAULT 'PATTERN';

-- AddForeignKey
ALTER TABLE `Sign` ADD CONSTRAINT `Sign_documentId_fkey` FOREIGN KEY (`documentId`) REFERENCES `Document`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Sign` ADD CONSTRAINT `Sign_positionId_fkey` FOREIGN KEY (`positionId`) REFERENCES `Position`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SignRequest` ADD CONSTRAINT `SignRequest_submissionId_fkey` FOREIGN KEY (`submissionId`) REFERENCES `Submission`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Form` ADD CONSTRAINT `Form_documentId_fkey` FOREIGN KEY (`documentId`) REFERENCES `Document`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
