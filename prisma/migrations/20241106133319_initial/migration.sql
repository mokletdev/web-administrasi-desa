-- CreateTable
CREATE TABLE `City` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    INDEX `City_name_idx`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `District` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `cityId` INTEGER NOT NULL,

    INDEX `District_cityId_idx`(`cityId`),
    INDEX `District_name_idx`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SubDistrict` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `districtId` INTEGER NOT NULL,

    INDEX `SubDistrict_districtId_idx`(`districtId`),
    INDEX `SubDistrict_name_idx`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Citizen` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nik` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `subDistrictId` INTEGER NOT NULL,

    UNIQUE INDEX `Citizen_nik_key`(`nik`),
    INDEX `Citizen_subDistrictId_idx`(`subDistrictId`),
    INDEX `Citizen_nik_idx`(`nik`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Document` (
    `id` VARCHAR(191) NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `content` VARCHAR(191) NOT NULL,
    `status` ENUM('PENDING_APPROVAL', 'APPROVED', 'REJECTED', 'READY_FOR_SIGNATURE', 'SIGNED') NOT NULL DEFAULT 'PENDING_APPROVAL',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `level` ENUM('CITIZEN', 'CITY_ADMIN', 'DISTRICT_ADMIN', 'SUBDISTRICT_ADMIN') NOT NULL,
    `userId` VARCHAR(191) NOT NULL,

    INDEX `Document_userId_idx`(`userId`),
    INDEX `Document_status_idx`(`status`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Sign` (
    `id` VARCHAR(191) NOT NULL,
    `documentId` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,

    INDEX `Sign_documentId_idx`(`documentId`),
    INDEX `Sign_userId_idx`(`userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SignRequest` (
    `id` VARCHAR(191) NOT NULL,
    `status` ENUM('REQUESTED', 'SIGNED') NOT NULL DEFAULT 'REQUESTED',
    `userId` VARCHAR(191) NOT NULL,
    `submissionId` CHAR(36) NOT NULL,

    INDEX `SignRequest_userId_status_idx`(`userId`, `status`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `FieldValidation` (
    `id` VARCHAR(191) NOT NULL,
    `type` VARCHAR(191) NOT NULL,
    `value` VARCHAR(191) NOT NULL,
    `message` VARCHAR(191) NOT NULL,
    `fieldTypeId` INTEGER NOT NULL,

    UNIQUE INDEX `FieldValidation_fieldTypeId_key`(`fieldTypeId`),
    INDEX `FieldValidation_fieldTypeId_idx`(`fieldTypeId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `FieldRelation` (
    `id` VARCHAR(191) NOT NULL,
    `targetTable` VARCHAR(191) NOT NULL,
    `targetField` VARCHAR(191) NOT NULL,
    `valueField` VARCHAR(191) NOT NULL,
    `fieldTypeId` INTEGER NOT NULL,

    UNIQUE INDEX `FieldRelation_fieldTypeId_key`(`fieldTypeId`),
    INDEX `FieldRelation_fieldTypeId_idx`(`fieldTypeId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `FieldType` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `label` VARCHAR(191) NOT NULL,
    `placeholder` VARCHAR(191) NULL,
    `defaultValue` VARCHAR(191) NULL,

    INDEX `FieldType_label_idx`(`label`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Field` (
    `field_id` INTEGER NOT NULL AUTO_INCREMENT,
    `label` VARCHAR(191) NOT NULL,
    `baseType` ENUM('text', 'number', 'email', 'password', 'longtext', 'radio', 'checkbox', 'relation', 'date', 'datetime', 'time', 'file', 'phone') NOT NULL,
    `required` BOOLEAN NOT NULL DEFAULT false,
    `formId` VARCHAR(191) NOT NULL,
    `fieldNumber` INTEGER NOT NULL DEFAULT 1,
    `fieldTypeId` INTEGER NOT NULL,

    INDEX `Field_formId_idx`(`formId`),
    INDEX `Field_fieldTypeId_idx`(`fieldTypeId`),
    PRIMARY KEY (`field_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Form` (
    `id` VARCHAR(191) NOT NULL,
    `documentId` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NULL,

    UNIQUE INDEX `Form_documentId_key`(`documentId`),
    INDEX `Form_userId_idx`(`userId`),
    PRIMARY KEY (`id`)
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
    `formId` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `cityId` INTEGER NULL,
    `districtId` INTEGER NULL,
    `subDistrictId` INTEGER NULL,
    `citizenId` INTEGER NULL,

    INDEX `Submission_formId_userId_idx`(`formId`, `userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SubmissionField` (
    `id` CHAR(36) NOT NULL,
    `submissionId` VARCHAR(191) NOT NULL,
    `fieldId` INTEGER NOT NULL,
    `value` LONGTEXT NOT NULL,

    INDEX `SubmissionField_submissionId_fieldId_idx`(`submissionId`, `fieldId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Approval` (
    `id` VARCHAR(191) NOT NULL,
    `documentId` VARCHAR(191) NOT NULL,
    `approvedById` VARCHAR(191) NULL,
    `status` ENUM('PENDING', 'APPROVED', 'REJECTED') NOT NULL DEFAULT 'PENDING',
    `approvedAt` DATETIME(3) NULL,

    INDEX `Approval_documentId_idx`(`documentId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `User` (
    `id` VARCHAR(191) NOT NULL,
    `username` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `role` ENUM('CITIZEN', 'CITY_ADMIN', 'DISTRICT_ADMIN', 'SUBDISTRICT_ADMIN') NOT NULL,
    `cityId` INTEGER NULL,
    `districtId` INTEGER NULL,
    `subDistrictId` INTEGER NULL,
    `citizenId` INTEGER NULL,

    UNIQUE INDEX `User_username_key`(`username`),
    UNIQUE INDEX `User_email_key`(`email`),
    INDEX `User_cityId_idx`(`cityId`),
    INDEX `User_districtId_idx`(`districtId`),
    INDEX `User_subDistrictId_idx`(`subDistrictId`),
    INDEX `User_citizenId_idx`(`citizenId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `District` ADD CONSTRAINT `District_cityId_fkey` FOREIGN KEY (`cityId`) REFERENCES `City`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SubDistrict` ADD CONSTRAINT `SubDistrict_districtId_fkey` FOREIGN KEY (`districtId`) REFERENCES `District`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Citizen` ADD CONSTRAINT `Citizen_subDistrictId_fkey` FOREIGN KEY (`subDistrictId`) REFERENCES `SubDistrict`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Document` ADD CONSTRAINT `Document_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Sign` ADD CONSTRAINT `Sign_documentId_fkey` FOREIGN KEY (`documentId`) REFERENCES `Document`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Sign` ADD CONSTRAINT `Sign_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SignRequest` ADD CONSTRAINT `SignRequest_submissionId_fkey` FOREIGN KEY (`submissionId`) REFERENCES `Submission`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SignRequest` ADD CONSTRAINT `SignRequest_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `FieldValidation` ADD CONSTRAINT `FieldValidation_fieldTypeId_fkey` FOREIGN KEY (`fieldTypeId`) REFERENCES `FieldType`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `FieldRelation` ADD CONSTRAINT `FieldRelation_fieldTypeId_fkey` FOREIGN KEY (`fieldTypeId`) REFERENCES `FieldType`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Field` ADD CONSTRAINT `Field_formId_fkey` FOREIGN KEY (`formId`) REFERENCES `Form`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Field` ADD CONSTRAINT `Field_fieldTypeId_fkey` FOREIGN KEY (`fieldTypeId`) REFERENCES `FieldType`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Form` ADD CONSTRAINT `Form_documentId_fkey` FOREIGN KEY (`documentId`) REFERENCES `Document`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Form` ADD CONSTRAINT `Form_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `FieldOption` ADD CONSTRAINT `FieldOption_fieldId_fkey` FOREIGN KEY (`fieldId`) REFERENCES `Field`(`field_id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Submission` ADD CONSTRAINT `Submission_formId_fkey` FOREIGN KEY (`formId`) REFERENCES `Form`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Submission` ADD CONSTRAINT `Submission_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Submission` ADD CONSTRAINT `Submission_cityId_fkey` FOREIGN KEY (`cityId`) REFERENCES `City`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Submission` ADD CONSTRAINT `Submission_districtId_fkey` FOREIGN KEY (`districtId`) REFERENCES `District`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Submission` ADD CONSTRAINT `Submission_subDistrictId_fkey` FOREIGN KEY (`subDistrictId`) REFERENCES `SubDistrict`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Submission` ADD CONSTRAINT `Submission_citizenId_fkey` FOREIGN KEY (`citizenId`) REFERENCES `Citizen`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SubmissionField` ADD CONSTRAINT `SubmissionField_submissionId_fkey` FOREIGN KEY (`submissionId`) REFERENCES `Submission`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SubmissionField` ADD CONSTRAINT `SubmissionField_fieldId_fkey` FOREIGN KEY (`fieldId`) REFERENCES `Field`(`field_id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Approval` ADD CONSTRAINT `Approval_documentId_fkey` FOREIGN KEY (`documentId`) REFERENCES `Document`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Approval` ADD CONSTRAINT `Approval_approvedById_fkey` FOREIGN KEY (`approvedById`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_subDistrictId_fkey` FOREIGN KEY (`subDistrictId`) REFERENCES `SubDistrict`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_cityId_fkey` FOREIGN KEY (`cityId`) REFERENCES `City`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_districtId_fkey` FOREIGN KEY (`districtId`) REFERENCES `District`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_citizenId_fkey` FOREIGN KEY (`citizenId`) REFERENCES `Citizen`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
