-- CreateTable
CREATE TABLE `JenisKelamin` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `kode_jk` INTEGER NOT NULL,
    `nama` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `JenisKelamin_kode_jk_key`(`kode_jk`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Agama` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `kd_agama` INTEGER NOT NULL,
    `nama` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Agama_kd_agama_key`(`kd_agama`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Pendidikan` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `kode_pddk_akhir` INTEGER NOT NULL,
    `nama` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Pendidikan_kode_pddk_akhir_key`(`kode_pddk_akhir`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Pekerjaan` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `kode_pekerjaan` INTEGER NOT NULL,
    `nama` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Pekerjaan_kode_pekerjaan_key`(`kode_pekerjaan`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `StatusKawin` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `status` INTEGER NOT NULL,
    `nama` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `StatusKawin_status_key`(`status`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `HubunganDalamKeluarga` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `kodeshdk` INTEGER NOT NULL,
    `nama` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `HubunganDalamKeluarga_kodeshdk_key`(`kodeshdk`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `GolonganDarah` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `kode_gdr` INTEGER NOT NULL,
    `nama` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `GolonganDarah_kode_gdr_key`(`kode_gdr`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `penduduk` (
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
    `wni` BOOLEAN NOT NULL,

    UNIQUE INDEX `penduduk_no_nik_key`(`no_nik`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `penduduk` ADD CONSTRAINT `penduduk_kode_jk_fkey` FOREIGN KEY (`kode_jk`) REFERENCES `JenisKelamin`(`kode_jk`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `penduduk` ADD CONSTRAINT `penduduk_kd_agama_fkey` FOREIGN KEY (`kd_agama`) REFERENCES `Agama`(`kd_agama`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `penduduk` ADD CONSTRAINT `penduduk_kode_pddk_akhir_fkey` FOREIGN KEY (`kode_pddk_akhir`) REFERENCES `Pendidikan`(`kode_pddk_akhir`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `penduduk` ADD CONSTRAINT `penduduk_kode_pekerjaan_fkey` FOREIGN KEY (`kode_pekerjaan`) REFERENCES `Pekerjaan`(`kode_pekerjaan`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `penduduk` ADD CONSTRAINT `penduduk_status_fkey` FOREIGN KEY (`status`) REFERENCES `StatusKawin`(`status`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `penduduk` ADD CONSTRAINT `penduduk_kodeshdk_fkey` FOREIGN KEY (`kodeshdk`) REFERENCES `HubunganDalamKeluarga`(`kodeshdk`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `penduduk` ADD CONSTRAINT `penduduk_kode_gdr_fkey` FOREIGN KEY (`kode_gdr`) REFERENCES `GolonganDarah`(`kode_gdr`) ON DELETE SET NULL ON UPDATE CASCADE;
