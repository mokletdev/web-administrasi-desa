/*
  Warnings:

  - You are about to drop the column `valueField` on the `FieldRelation` table. All the data in the column will be lost.
  - You are about to drop the column `label` on the `FieldType` table. All the data in the column will be lost.
  - You are about to drop the column `citizenId` on the `Submission` table. All the data in the column will be lost.
  - You are about to drop the column `citizenId` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `Citizen` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `penduduk` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `name` to the `FieldType` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Citizen` DROP FOREIGN KEY `Citizen_subDistrictId_fkey`;

-- DropForeignKey
ALTER TABLE `Submission` DROP FOREIGN KEY `Submission_citizenId_fkey`;

-- DropForeignKey
ALTER TABLE `User` DROP FOREIGN KEY `User_citizenId_fkey`;

-- DropForeignKey
ALTER TABLE `penduduk` DROP FOREIGN KEY `penduduk_kd_agama_fkey`;

-- DropForeignKey
ALTER TABLE `penduduk` DROP FOREIGN KEY `penduduk_kode_gdr_fkey`;

-- DropForeignKey
ALTER TABLE `penduduk` DROP FOREIGN KEY `penduduk_kode_jk_fkey`;

-- DropForeignKey
ALTER TABLE `penduduk` DROP FOREIGN KEY `penduduk_kode_pddk_akhir_fkey`;

-- DropForeignKey
ALTER TABLE `penduduk` DROP FOREIGN KEY `penduduk_kode_pekerjaan_fkey`;

-- DropForeignKey
ALTER TABLE `penduduk` DROP FOREIGN KEY `penduduk_kodeshdk_fkey`;

-- DropForeignKey
ALTER TABLE `penduduk` DROP FOREIGN KEY `penduduk_status_fkey`;

-- DropIndex
DROP INDEX `FieldType_label_idx` ON `FieldType`;

-- AlterTable
ALTER TABLE `Document` MODIFY `content` LONGTEXT NOT NULL;

-- AlterTable
ALTER TABLE `FieldRelation` DROP COLUMN `valueField`;

-- AlterTable
ALTER TABLE `FieldType` DROP COLUMN `label`,
    ADD COLUMN `name` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `SignRequest` MODIFY `status` ENUM('REQUESTED', 'SIGNED', 'REJECTED') NOT NULL DEFAULT 'REQUESTED';

-- AlterTable
ALTER TABLE `Submission` DROP COLUMN `citizenId`;

-- AlterTable
ALTER TABLE `User` DROP COLUMN `citizenId`,
    ADD COLUMN `NIK` VARCHAR(191) NULL;

-- DropTable
DROP TABLE `Citizen`;

-- DropTable
DROP TABLE `penduduk`;

-- CreateTable
CREATE TABLE `Penduduk` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `no_nik` VARCHAR(191) NOT NULL,
    `no_kk` VARCHAR(191) NOT NULL,
    `nama` VARCHAR(191) NOT NULL,
    `tmpt_lhr` VARCHAR(191) NOT NULL,
    `tgl_lhr` DATETIME(3) NOT NULL,
    `kode_jk` INTEGER NOT NULL,
    `kd_agama` INTEGER NOT NULL,
    `kode_pddk_akhir` INTEGER NOT NULL,
    `kode_pekerjaan` INTEGER NOT NULL,
    `status` INTEGER NOT NULL,
    `kodeshdk` INTEGER NOT NULL,
    `kode_gdr` INTEGER NULL,
    `alamat` VARCHAR(191) NOT NULL,
    `dusun` VARCHAR(191) NOT NULL,
    `rt` INTEGER NOT NULL,
    `rw` INTEGER NOT NULL,
    `nik_ibu` VARCHAR(191) NULL,
    `nama_ibu` VARCHAR(191) NULL,
    `nik_ayah` VARCHAR(191) NULL,
    `nama_ayah` VARCHAR(191) NULL,
    `no_akta_lhr` VARCHAR(191) NULL,
    `no_akta_kwn` VARCHAR(191) NULL,
    `tgl_kwn` DATETIME(3) NULL,
    `no_akta_crai` VARCHAR(191) NULL,
    `tgl_crai` DATETIME(3) NULL,
    `pendatang` BOOLEAN NOT NULL DEFAULT false,
    `kelainan` BOOLEAN NOT NULL DEFAULT false,
    `subDistrictId` INTEGER NOT NULL,

    UNIQUE INDEX `Penduduk_no_nik_key`(`no_nik`),
    INDEX `Penduduk_kode_jk_idx`(`kode_jk`),
    INDEX `Penduduk_kd_agama_idx`(`kd_agama`),
    INDEX `Penduduk_kode_pddk_akhir_idx`(`kode_pddk_akhir`),
    INDEX `Penduduk_kode_pekerjaan_idx`(`kode_pekerjaan`),
    INDEX `Penduduk_status_idx`(`status`),
    INDEX `Penduduk_kodeshdk_idx`(`kodeshdk`),
    INDEX `Penduduk_kode_gdr_idx`(`kode_gdr`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_NIK_fkey` FOREIGN KEY (`NIK`) REFERENCES `Penduduk`(`no_nik`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Penduduk` ADD CONSTRAINT `Penduduk_subDistrictId_fkey` FOREIGN KEY (`subDistrictId`) REFERENCES `SubDistrict`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Penduduk` ADD CONSTRAINT `Penduduk_kode_jk_fkey` FOREIGN KEY (`kode_jk`) REFERENCES `JenisKelamin`(`kode_jk`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Penduduk` ADD CONSTRAINT `Penduduk_kd_agama_fkey` FOREIGN KEY (`kd_agama`) REFERENCES `Agama`(`kd_agama`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Penduduk` ADD CONSTRAINT `Penduduk_kode_pddk_akhir_fkey` FOREIGN KEY (`kode_pddk_akhir`) REFERENCES `Pendidikan`(`kode_pddk_akhir`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Penduduk` ADD CONSTRAINT `Penduduk_kode_pekerjaan_fkey` FOREIGN KEY (`kode_pekerjaan`) REFERENCES `Pekerjaan`(`kode_pekerjaan`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Penduduk` ADD CONSTRAINT `Penduduk_status_fkey` FOREIGN KEY (`status`) REFERENCES `StatusKawin`(`status`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Penduduk` ADD CONSTRAINT `Penduduk_kodeshdk_fkey` FOREIGN KEY (`kodeshdk`) REFERENCES `HubunganDalamKeluarga`(`kodeshdk`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Penduduk` ADD CONSTRAINT `Penduduk_kode_gdr_fkey` FOREIGN KEY (`kode_gdr`) REFERENCES `GolonganDarah`(`kode_gdr`) ON DELETE SET NULL ON UPDATE CASCADE;
