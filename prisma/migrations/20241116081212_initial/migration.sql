-- CreateTable
CREATE TABLE `AdministrativeUnit` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `administrativeLevel` ENUM('CITY', 'DISTRICT', 'SUBDISTRICT') NOT NULL,

    UNIQUE INDEX `AdministrativeUnit_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `AdministrativeService` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `skipStep` ENUM('SUBDISTRICT', 'DISTRICT', 'SUBDISTRICT_DISTRICT') NULL,
    `administrativeUnitId` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ServiceRequest` (
    `id` VARCHAR(191) NOT NULL,
    `status` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Official` (
    `id` VARCHAR(191) NOT NULL,
    `positionId` INTEGER NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NULL,
    `administrativeUnitId` VARCHAR(191) NULL,

    UNIQUE INDEX `Official_userId_key`(`userId`),
    INDEX `Official_positionId_idx`(`positionId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Template` (
    `id` VARCHAR(191) NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `content` LONGTEXT NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `level` ENUM('CITY', 'DISTRICT', 'SUBDISTRICT') NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `administrativeServiceId` VARCHAR(191) NULL,

    INDEX `Template_userId_idx`(`userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Sign` (
    `id` VARCHAR(191) NOT NULL,
    `coordX` DOUBLE NOT NULL,
    `coordY` DOUBLE NOT NULL,
    `size` DOUBLE NOT NULL,
    `templateId` VARCHAR(191) NOT NULL,

    INDEX `Sign_templateId_idx`(`templateId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SignRequest` (
    `id` VARCHAR(191) NOT NULL,
    `signedPdf` LONGTEXT NOT NULL,
    `submissionId` CHAR(36) NOT NULL,
    `officialId` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `FieldRelation` (
    `id` VARCHAR(191) NOT NULL,
    `targetTable` VARCHAR(191) NOT NULL,
    `targetField` VARCHAR(191) NOT NULL,
    `fieldTypeId` INTEGER NOT NULL,

    UNIQUE INDEX `FieldRelation_fieldTypeId_key`(`fieldTypeId`),
    INDEX `FieldRelation_fieldTypeId_idx`(`fieldTypeId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `FieldType` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `label` VARCHAR(191) NOT NULL,
    `placeholder` VARCHAR(191) NULL,
    `baseType` ENUM('text', 'number', 'email', 'password', 'longtext', 'radio', 'checkbox', 'relation', 'date', 'datetime', 'time', 'file', 'phone') NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Field` (
    `field_id` INTEGER NOT NULL AUTO_INCREMENT,
    `label` VARCHAR(191) NULL,
    `required` BOOLEAN NULL DEFAULT false,
    `templateId` VARCHAR(191) NOT NULL,
    `fieldNumber` INTEGER NOT NULL DEFAULT 1,
    `fieldTypeId` INTEGER NOT NULL,

    INDEX `Field_templateId_idx`(`templateId`),
    INDEX `Field_fieldTypeId_idx`(`fieldTypeId`),
    PRIMARY KEY (`field_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `FieldOption` (
    `id` VARCHAR(191) NOT NULL,
    `value` VARCHAR(191) NOT NULL,
    `fieldId` INTEGER NOT NULL,

    INDEX `FieldOption_fieldId_idx`(`fieldId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Submission` (
    `id` CHAR(36) NOT NULL,
    `status` ENUM('PENDING_APPROVAL', 'APPROVED', 'REJECTED', 'READY_FOR_SIGNATURE', 'SIGNED') NOT NULL DEFAULT 'PENDING_APPROVAL',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `signedPdf` LONGTEXT NULL,
    `unsignedPdf` LONGTEXT NOT NULL,
    `serviceRequestId` VARCHAR(191) NULL,
    `userId` VARCHAR(191) NULL,
    `templateId` VARCHAR(191) NULL,

    INDEX `Submission_templateId_idx`(`templateId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SubmissionField` (
    `id` CHAR(36) NOT NULL,
    `value` LONGTEXT NOT NULL,
    `submissionId` VARCHAR(191) NOT NULL,
    `fieldId` INTEGER NOT NULL,

    INDEX `SubmissionField_submissionId_fieldId_idx`(`submissionId`, `fieldId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Approval` (
    `id` VARCHAR(191) NOT NULL,
    `status` ENUM('PENDING', 'APPROVED', 'REJECTED') NOT NULL DEFAULT 'PENDING',
    `approvedAt` DATETIME(3) NULL,
    `registerNumber` VARCHAR(191) NULL,
    `approvedById` VARCHAR(191) NULL,
    `submissionId` VARCHAR(191) NULL,

    INDEX `Approval_submissionId_idx`(`submissionId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `User` (
    `id` VARCHAR(191) NOT NULL,
    `username` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `NIK` VARCHAR(191) NULL,
    `name` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `role` ENUM('CITIZEN', 'CITY_ADMIN', 'DISTRICT_ADMIN', 'SUBDISTRICT_ADMIN', 'SUPERADMIN', 'OFFICIAL') NOT NULL,
    `administrativeUnitId` VARCHAR(191) NULL,

    UNIQUE INDEX `User_username_key`(`username`),
    UNIQUE INDEX `User_email_key`(`email`),
    UNIQUE INDEX `User_NIK_key`(`NIK`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_ParentChild` (
    `A` VARCHAR(191) NOT NULL,
    `B` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `_ParentChild_AB_unique`(`A`, `B`),
    INDEX `_ParentChild_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `AdministrativeService` ADD CONSTRAINT `AdministrativeService_administrativeUnitId_fkey` FOREIGN KEY (`administrativeUnitId`) REFERENCES `AdministrativeUnit`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ServiceRequest` ADD CONSTRAINT `ServiceRequest_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Official` ADD CONSTRAINT `Official_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Official` ADD CONSTRAINT `Official_administrativeUnitId_fkey` FOREIGN KEY (`administrativeUnitId`) REFERENCES `AdministrativeUnit`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Template` ADD CONSTRAINT `Template_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Template` ADD CONSTRAINT `Template_administrativeServiceId_fkey` FOREIGN KEY (`administrativeServiceId`) REFERENCES `AdministrativeService`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Sign` ADD CONSTRAINT `Sign_templateId_fkey` FOREIGN KEY (`templateId`) REFERENCES `Template`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SignRequest` ADD CONSTRAINT `SignRequest_submissionId_fkey` FOREIGN KEY (`submissionId`) REFERENCES `Submission`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SignRequest` ADD CONSTRAINT `SignRequest_officialId_fkey` FOREIGN KEY (`officialId`) REFERENCES `Official`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `FieldRelation` ADD CONSTRAINT `FieldRelation_fieldTypeId_fkey` FOREIGN KEY (`fieldTypeId`) REFERENCES `FieldType`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Field` ADD CONSTRAINT `Field_templateId_fkey` FOREIGN KEY (`templateId`) REFERENCES `Template`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Field` ADD CONSTRAINT `Field_fieldTypeId_fkey` FOREIGN KEY (`fieldTypeId`) REFERENCES `FieldType`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `FieldOption` ADD CONSTRAINT `FieldOption_fieldId_fkey` FOREIGN KEY (`fieldId`) REFERENCES `Field`(`field_id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Submission` ADD CONSTRAINT `Submission_serviceRequestId_fkey` FOREIGN KEY (`serviceRequestId`) REFERENCES `ServiceRequest`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Submission` ADD CONSTRAINT `Submission_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Submission` ADD CONSTRAINT `Submission_templateId_fkey` FOREIGN KEY (`templateId`) REFERENCES `Template`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SubmissionField` ADD CONSTRAINT `SubmissionField_submissionId_fkey` FOREIGN KEY (`submissionId`) REFERENCES `Submission`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SubmissionField` ADD CONSTRAINT `SubmissionField_fieldId_fkey` FOREIGN KEY (`fieldId`) REFERENCES `Field`(`field_id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Approval` ADD CONSTRAINT `Approval_approvedById_fkey` FOREIGN KEY (`approvedById`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Approval` ADD CONSTRAINT `Approval_submissionId_fkey` FOREIGN KEY (`submissionId`) REFERENCES `Submission`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_administrativeUnitId_fkey` FOREIGN KEY (`administrativeUnitId`) REFERENCES `AdministrativeUnit`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_ParentChild` ADD CONSTRAINT `_ParentChild_A_fkey` FOREIGN KEY (`A`) REFERENCES `AdministrativeUnit`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_ParentChild` ADD CONSTRAINT `_ParentChild_B_fkey` FOREIGN KEY (`B`) REFERENCES `AdministrativeUnit`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
