
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  skip,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  getRuntime
} = require('./runtime/library.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.22.0
 * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
 */
Prisma.prismaVersion = {
  client: "5.22.0",
  engine: "605197351a3c8bdd595af2d2a9bc3025bca48ea2"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}




  const path = require('path')

/**
 * Enums
 */
exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.AgamaScalarFieldEnum = {
  id: 'id',
  agama: 'agama'
};

exports.Prisma.Dapat_programScalarFieldEnum = {
  id: 'id',
  nik: 'nik',
  kis: 'kis',
  pkh: 'pkh',
  jamkesda: 'jamkesda',
  bpjs: 'bpjs',
  idds: 'idds',
  ket: 'ket',
  created_at: 'created_at',
  updated_at: 'updated_at',
  status: 'status',
  jamkesmas: 'jamkesmas'
};

exports.Prisma.DesaScalarFieldEnum = {
  id: 'id',
  desa: 'desa',
  id_kecamatan: 'id_kecamatan',
  kd: 'kd',
  namakades: 'namakades',
  nipkades: 'nipkades',
  nikkades: 'nikkades',
  alamat_kades: 'alamat_kades',
  alamat: 'alamat',
  pos: 'pos',
  web: 'web',
  namasekdes: 'namasekdes',
  niksekdes: 'niksekdes',
  nipsekdes: 'nipsekdes',
  alamat_sekdes: 'alamat_sekdes',
  logo: 'logo',
  noresmi: 'noresmi',
  golkades: 'golkades',
  logo2: 'logo2',
  wa: 'wa',
  created_at: 'created_at',
  updated_at: 'updated_at',
  kodekemendagri: 'kodekemendagri',
  sebutan_kades: 'sebutan_kades',
  sebutan_sekdes: 'sebutan_sekdes'
};

exports.Prisma.Desa_tempScalarFieldEnum = {
  id: 'id',
  id_kecamatan: 'id_kecamatan',
  desa: 'desa',
  namakades: 'namakades',
  nipkades: 'nipkades',
  namasekdes: 'namasekdes',
  nipsekdes: 'nipsekdes',
  alamat: 'alamat',
  pos: 'pos',
  wa: 'wa',
  noresmi: 'noresmi',
  logo: 'logo',
  created_at: 'created_at',
  updated_at: 'updated_at',
  web: 'web'
};

exports.Prisma.Dokumen_sppScalarFieldEnum = {
  id: 'id',
  kategori: 'kategori',
  nama: 'nama',
  keterangan: 'keterangan',
  nourut: 'nourut',
  status: 'status',
  link_download: 'link_download'
};

exports.Prisma.DusunScalarFieldEnum = {
  id: 'id',
  namadusun: 'namadusun',
  idds: 'idds',
  kadus: 'kadus',
  alamat: 'alamat',
  created_at: 'created_at',
  updated_at: 'updated_at',
  kode: 'kode'
};

exports.Prisma.Failed_jobsScalarFieldEnum = {
  id: 'id',
  uuid: 'uuid',
  connection: 'connection',
  queue: 'queue',
  payload: 'payload',
  exception: 'exception',
  failed_at: 'failed_at'
};

exports.Prisma.Gol_darScalarFieldEnum = {
  id: 'id',
  gol: 'gol'
};

exports.Prisma.Indikator_sktmScalarFieldEnum = {
  id_indikator: 'id_indikator',
  indikator: 'indikator',
  no_pertanyaan: 'no_pertanyaan',
  pertanyaan: 'pertanyaan',
  pilihan_jawaban: 'pilihan_jawaban',
  skor_jawaban: 'skor_jawaban'
};

exports.Prisma.JkScalarFieldEnum = {
  kode: 'kode',
  jk: 'jk'
};

exports.Prisma.KabupatenScalarFieldEnum = {
  id: 'id',
  id_provinsi: 'id_provinsi',
  kabupaten: 'kabupaten',
  nama_kab: 'nama_kab',
  type_kab: 'type_kab',
  id_provinsi_ex: 'id_provinsi_ex',
  id_kabupaten_ex: 'id_kabupaten_ex',
  kode_pos: 'kode_pos',
  logo: 'logo',
  created_at: 'created_at',
  updated_at: 'updated_at',
  kodekemendagri: 'kodekemendagri',
  id_cuaca: 'id_cuaca',
  alamat_capil: 'alamat_capil',
  telp_capil: 'telp_capil',
  fax_capil: 'fax_capil',
  kecamatan_capil: 'kecamatan_capil',
  website: 'website',
  fitur_sia: 'fitur_sia',
  fitur_regkec: 'fitur_regkec'
};

exports.Prisma.KecamatanScalarFieldEnum = {
  id: 'id',
  id_kabupaten: 'id_kabupaten',
  kecamatan: 'kecamatan',
  namacamat: 'namacamat',
  nipcamat: 'nipcamat',
  created_at: 'created_at',
  updated_at: 'updated_at',
  kodekemendagri: 'kodekemendagri'
};

exports.Prisma.KelScalarFieldEnum = {
  id: 'id',
  kel: 'kel'
};

exports.Prisma.KkScalarFieldEnum = {
  nokk: 'nokk',
  nama_kk: 'nama_kk',
  alamat: 'alamat',
  dusun: 'dusun',
  desa_idds: 'desa_idds',
  telp: 'telp',
  rt: 'rt',
  rw: 'rw',
  id: 'id'
};

exports.Prisma.Kk_tempScalarFieldEnum = {
  id: 'id',
  nik: 'nik',
  nama: 'nama',
  pengajuan_id: 'pengajuan_id',
  created_at: 'created_at'
};

exports.Prisma.KtpScalarFieldEnum = {
  id: 'id',
  nik: 'nik',
  tgl: 'tgl',
  ket: 'ket',
  idds: 'idds'
};

exports.Prisma.LahirScalarFieldEnum = {
  id: 'id',
  nomor: 'nomor',
  nomor_br: 'nomor_br',
  tempat_lahir: 'tempat_lahir',
  tgl_lahir: 'tgl_lahir',
  jk: 'jk',
  nik: 'nik',
  nokk: 'nokk',
  alamat: 'alamat',
  nama: 'nama',
  anak_ke: 'anak_ke',
  nik_ibu: 'nik_ibu',
  nama_ibu: 'nama_ibu',
  usia_ibu: 'usia_ibu',
  pekerjaan_ibu: 'pekerjaan_ibu',
  alamat_ibu: 'alamat_ibu',
  nik_ayah: 'nik_ayah',
  nama_ayah: 'nama_ayah',
  usia_ayah: 'usia_ayah',
  pekerjaan_ayah: 'pekerjaan_ayah',
  alamat_ayah: 'alamat_ayah',
  tgl: 'tgl',
  tgl_banjar: 'tgl_banjar',
  nik_saksi1: 'nik_saksi1',
  nama_saksi1: 'nama_saksi1',
  usia_saksi1: 'usia_saksi1',
  pekerjaan_saksi1: 'pekerjaan_saksi1',
  alamat_saksi1: 'alamat_saksi1',
  nik_saksi2: 'nik_saksi2',
  nama_saksi2: 'nama_saksi2',
  usia_saksi2: 'usia_saksi2',
  pekerjaan_saksi2: 'pekerjaan_saksi2',
  alamat_saksi2: 'alamat_saksi2',
  lahir_idds: 'lahir_idds',
  kua: 'kua',
  capil: 'capil',
  tgl_capil: 'tgl_capil',
  no_capil: 'no_capil',
  nikp: 'nikp',
  pukul: 'pukul',
  bb_bayi: 'bb_bayi',
  p_bayi: 'p_bayi',
  tolong: 'tolong',
  dusun: 'dusun',
  tdl: 'tdl',
  agama: 'agama',
  keperluan: 'keperluan',
  created_at: 'created_at',
  updated_at: 'updated_at',
  agama_ibu: 'agama_ibu',
  agama_ayah: 'agama_ayah',
  jenis_mutasi: 'jenis_mutasi',
  kk_saksi1: 'kk_saksi1',
  kk_saksi2: 'kk_saksi2',
  warga_saksi1: 'warga_saksi1',
  warga_saksi2: 'warga_saksi2',
  kk_ayah: 'kk_ayah',
  warga_ayah: 'warga_ayah',
  kk_ibu: 'kk_ibu',
  warga_ibu: 'warga_ibu',
  t_lahir_ayah: 't_lahir_ayah',
  tgl_lahir_ayah: 'tgl_lahir_ayah',
  t_lahir_ibu: 't_lahir_ibu',
  tgl_lahir_ibu: 'tgl_lahir_ibu',
  jenis_lahir: 'jenis_lahir'
};

exports.Prisma.LisensiScalarFieldEnum = {
  id: 'id',
  iduser: 'iduser',
  id_desa: 'id_desa',
  created_at: 'created_at',
  expired_at: 'expired_at',
  status: 'status',
  isdemo: 'isdemo',
  kode_agen: 'kode_agen',
  nama_pic: 'nama_pic',
  telp_pic: 'telp_pic',
  email_pic: 'email_pic',
  islifetime: 'islifetime',
  nominal_pembayaran: 'nominal_pembayaran',
  keterangan: 'keterangan',
  device_id: 'device_id',
  fitur_sia: 'fitur_sia',
  fitur_regkec: 'fitur_regkec',
  role: 'role',
  kode_referal: 'kode_referal'
};

exports.Prisma.Lisensi_copy1ScalarFieldEnum = {
  id: 'id',
  iduser: 'iduser',
  id_desa: 'id_desa',
  created_at: 'created_at',
  expired_at: 'expired_at',
  status: 'status',
  isdemo: 'isdemo',
  kode_agen: 'kode_agen',
  nama_pic: 'nama_pic',
  telp_pic: 'telp_pic',
  email_pic: 'email_pic',
  islifetime: 'islifetime',
  nominal_pembayaran: 'nominal_pembayaran',
  keterangan: 'keterangan',
  device_id: 'device_id',
  fitur_sia: 'fitur_sia',
  fitur_regkec: 'fitur_regkec',
  role: 'role',
  kode_referal: 'kode_referal'
};

exports.Prisma.Log_error_bsreScalarFieldEnum = {
  id: 'id',
  id_system: 'id_system',
  tipe_data: 'tipe_data',
  status: 'status',
  error: 'error',
  message: 'message',
  url_path: 'url_path',
  idds: 'idds',
  iduser_action: 'iduser_action',
  created_at: 'created_at'
};

exports.Prisma.Log_resetScalarFieldEnum = {
  id: 'id',
  iddesa: 'iddesa',
  tgl_reset: 'tgl_reset',
  tipe_reset: 'tipe_reset',
  iduser_reset: 'iduser_reset'
};

exports.Prisma.Master_siaScalarFieldEnum = {
  id: 'id',
  jenis: 'jenis',
  tipe: 'tipe',
  tipe_kegiatan: 'tipe_kegiatan',
  keterangan: 'keterangan',
  status: 'status',
  nourut: 'nourut',
  link_download: 'link_download',
  nama_file: 'nama_file'
};

exports.Prisma.Master_suratScalarFieldEnum = {
  id: 'id',
  nama_template: 'nama_template',
  isi_template: 'isi_template',
  idds: 'idds',
  jenis_surat: 'jenis_surat',
  created_at: 'created_at'
};

exports.Prisma.MatiScalarFieldEnum = {
  id: 'id',
  kk_nokk: 'kk_nokk',
  nomor: 'nomor',
  nomor_br: 'nomor_br',
  nik_mati: 'nik_mati',
  tgl_mati: 'tgl_mati',
  pukul: 'pukul',
  sebab: 'sebab',
  tempat: 'tempat',
  info: 'info',
  tgl_banjar: 'tgl_banjar',
  anak_ke: 'anak_ke',
  mati_idds: 'mati_idds',
  keperluan: 'keperluan',
  nik_ahliwaris: 'nik_ahliwaris',
  nik_ayah: 'nik_ayah',
  nik_ibu: 'nik_ibu',
  nama_ayah: 'nama_ayah',
  nama_ibu: 'nama_ibu',
  tgl_lahir_ayah: 'tgl_lahir_ayah',
  tgl_lahir_ibu: 'tgl_lahir_ibu',
  usia_ayah: 'usia_ayah',
  usia_ibu: 'usia_ibu',
  alamat_ayah: 'alamat_ayah',
  alamat_ibu: 'alamat_ibu',
  pekerjaan_ayah: 'pekerjaan_ayah',
  pekerjaan_ibu: 'pekerjaan_ibu',
  hub: 'hub',
  bukti: 'bukti',
  nik_pelapor: 'nik_pelapor',
  telp: 'telp',
  nama: 'nama',
  nik_saksi1: 'nik_saksi1',
  nik_saksi2: 'nik_saksi2',
  dusun: 'dusun',
  alamat: 'alamat',
  tgl: 'tgl',
  nama_pelapor: 'nama_pelapor',
  nokk_pelapor: 'nokk_pelapor',
  warga_pelapor: 'warga_pelapor',
  nama_saksi1: 'nama_saksi1',
  nokk_saksi1: 'nokk_saksi1',
  warga_saksi1: 'warga_saksi1',
  nama_saksi2: 'nama_saksi2',
  nokk_saksi2: 'nokk_saksi2',
  warga_saksi2: 'warga_saksi2',
  nama_ahliwaris: 'nama_ahliwaris',
  nokk_ahliwaris: 'nokk_ahliwaris',
  warga_ahliwaris: 'warga_ahliwaris',
  t_lahir_ayah: 't_lahir_ayah',
  t_lahir_ibu: 't_lahir_ibu',
  nokk_ayah: 'nokk_ayah',
  nokk_ibu: 'nokk_ibu',
  warga_ayah: 'warga_ayah',
  warga_ibu: 'warga_ibu'
};

exports.Prisma.MigrationsScalarFieldEnum = {
  id: 'id',
  migration: 'migration',
  batch: 'batch'
};

exports.Prisma.MutasiScalarFieldEnum = {
  id: 'id',
  tgl: 'tgl',
  nik: 'nik',
  mutasi: 'mutasi',
  ket: 'ket',
  alamat: 'alamat',
  dusun: 'dusun',
  rt: 'rt',
  rw: 'rw',
  desa_idds: 'desa_idds',
  masa_ktp: 'masa_ktp',
  shdk: 'shdk',
  pindah_id: 'pindah_id',
  datang_id: 'datang_id',
  mati_id: 'mati_id',
  lahir_id: 'lahir_id',
  mutasi_idds: 'mutasi_idds'
};

exports.Prisma.PekerjaanScalarFieldEnum = {
  id: 'id',
  pekerjaan: 'pekerjaan'
};

exports.Prisma.Pekerjaan_lamaScalarFieldEnum = {
  id: 'id',
  pekerjaan: 'pekerjaan'
};

exports.Prisma.PendidikanScalarFieldEnum = {
  id: 'id',
  pend: 'pend'
};

exports.Prisma.Pendidikan_lamaScalarFieldEnum = {
  id: 'id',
  pend: 'pend'
};

exports.Prisma.PendudukScalarFieldEnum = {
  nik: 'nik',
  nama: 'nama',
  t_lahir: 't_lahir',
  tgl_lahir: 'tgl_lahir',
  jk: 'jk',
  kel: 'kel',
  pend: 'pend',
  agama: 'agama',
  status: 'status',
  pekerjaan: 'pekerjaan',
  warga: 'warga',
  penghasilan: 'penghasilan',
  hub: 'hub',
  disabilitas: 'disabilitas',
  akte_lahir: 'akte_lahir',
  gol_dar: 'gol_dar',
  alamat: 'alamat',
  dusun: 'dusun',
  desa_idds: 'desa_idds',
  kk_nokk: 'kk_nokk',
  mutasi: 'mutasi',
  tgl_mutasi: 'tgl_mutasi',
  telp: 'telp',
  pendidikan: 'pendidikan',
  nik_ayah: 'nik_ayah',
  nama_ayah: 'nama_ayah',
  nik_ibu: 'nik_ibu',
  nama_ibu: 'nama_ibu',
  foto: 'foto',
  rt: 'rt',
  rw: 'rw',
  akta_lahir: 'akta_lahir',
  akta_lahir_baru: 'akta_lahir_baru',
  akta_kawin: 'akta_kawin',
  akta_kawin_baru: 'akta_kawin_baru',
  krama: 'krama',
  tgl_kawin: 'tgl_kawin',
  tgl_matipindah: 'tgl_matipindah',
  dasawisma1: 'dasawisma1',
  dasawisma2: 'dasawisma2',
  userid: 'userid',
  created_at: 'created_at',
  updated_at: 'updated_at',
  vaksin1: 'vaksin1',
  vaksin2: 'vaksin2',
  vaksin3: 'vaksin3',
  kelainan_fisik: 'kelainan_fisik',
  status_verifikasi: 'status_verifikasi',
  keterangan_verifikasi: 'keterangan_verifikasi',
  dokumen_verifkasi: 'dokumen_verifkasi',
  tgl_verifikasi: 'tgl_verifikasi',
  user_verifikasi: 'user_verifikasi'
};

exports.Prisma.Penduduk_kk_tempScalarFieldEnum = {
  nik: 'nik',
  nama: 'nama',
  t_lahir: 't_lahir',
  tgl_lahir: 'tgl_lahir',
  jk: 'jk',
  kel: 'kel',
  pend: 'pend',
  agama: 'agama',
  status: 'status',
  pekerjaan: 'pekerjaan',
  warga: 'warga',
  penghasilan: 'penghasilan',
  hub: 'hub',
  disabilitas: 'disabilitas',
  akte_lahir: 'akte_lahir',
  gol_dar: 'gol_dar',
  alamat: 'alamat',
  dusun: 'dusun',
  desa_idds: 'desa_idds',
  kk_nokk: 'kk_nokk',
  mutasi: 'mutasi',
  tgl_mutasi: 'tgl_mutasi',
  telp: 'telp',
  pendidikan: 'pendidikan',
  nik_ayah: 'nik_ayah',
  nama_ayah: 'nama_ayah',
  nik_ibu: 'nik_ibu',
  nama_ibu: 'nama_ibu',
  foto: 'foto',
  rt: 'rt',
  rw: 'rw',
  akta_lahir: 'akta_lahir',
  akta_lahir_baru: 'akta_lahir_baru',
  akta_kawin: 'akta_kawin',
  akta_kawin_baru: 'akta_kawin_baru',
  krama: 'krama',
  tgl_kawin: 'tgl_kawin',
  tgl_matipindah: 'tgl_matipindah',
  dasawisma1: 'dasawisma1',
  dasawisma2: 'dasawisma2',
  userid: 'userid',
  created_at: 'created_at',
  updated_at: 'updated_at',
  pengajuan_id: 'pengajuan_id'
};

exports.Prisma.PengajuanScalarFieldEnum = {
  id: 'id',
  nik: 'nik',
  keterangan: 'keterangan',
  surat: 'surat',
  created_at: 'created_at',
  updated_at: 'updated_at',
  idds: 'idds',
  iduser: 'iduser',
  status: 'status',
  nik_ayah: 'nik_ayah',
  nik_ibu: 'nik_ibu',
  tujuan: 'tujuan',
  jurusan: 'jurusan',
  bidang_usaha: 'bidang_usaha',
  nama_usaha: 'nama_usaha',
  alamat_usaha: 'alamat_usaha',
  npwp: 'npwp',
  nomor_surat: 'nomor_surat',
  nomor_banjar: 'nomor_banjar',
  tgl_surat: 'tgl_surat',
  data_berubah: 'data_berubah',
  perubahan: 'perubahan',
  semula: 'semula',
  dusun: 'dusun',
  sekolah: 'sekolah',
  tgl_kegiatan: 'tgl_kegiatan',
  acara_mulai: 'acara_mulai',
  nama_acara: 'nama_acara',
  nik_penerima: 'nik_penerima',
  nik_lahir_mati: 'nik_lahir_mati',
  jenis_kuasa: 'jenis_kuasa',
  nik_saksi1: 'nik_saksi1',
  nik_saksi2: 'nik_saksi2',
  kelianadat: 'kelianadat',
  rohaniawan: 'rohaniawan',
  nama_camat: 'nama_camat',
  tgl_akhir: 'tgl_akhir',
  nama_pasien: 'nama_pasien',
  no_telepon: 'no_telepon',
  jenis_penduduk: 'jenis_penduduk',
  nik_asing: 'nik_asing',
  nama_asing: 'nama_asing',
  jk_asing: 'jk_asing',
  tlahir_asing: 'tlahir_asing',
  tgllahir_asing: 'tgllahir_asing',
  agama_asing: 'agama_asing',
  status_asing: 'status_asing',
  warga_asing: 'warga_asing',
  alamat_asing: 'alamat_asing',
  telp_asing: 'telp_asing',
  nama_saksi1: 'nama_saksi1',
  nama_saksi2: 'nama_saksi2',
  tgl_pengajuan_tte: 'tgl_pengajuan_tte',
  no_registrasi: 'no_registrasi',
  tgl_registrasi: 'tgl_registrasi',
  nama_pejabat_registrasi: 'nama_pejabat_registrasi',
  stampel_registrasi: 'stampel_registrasi',
  nama_ayah: 'nama_ayah',
  nama_ibu: 'nama_ibu',
  scan_surat_tte: 'scan_surat_tte',
  verify_bidandesa: 'verify_bidandesa',
  verify_kadus: 'verify_kadus',
  verify_kasi: 'verify_kasi',
  scan_ktp: 'scan_ktp',
  scan_kk: 'scan_kk',
  scan_rujukan: 'scan_rujukan',
  template_custom: 'template_custom'
};

exports.Prisma.Pengajuan_belum_nikahScalarFieldEnum = {
  id: 'id',
  idds: 'idds',
  nomor_surat: 'nomor_surat',
  nomor_banjar: 'nomor_banjar',
  nik: 'nik',
  nama_lengkap: 'nama_lengkap',
  alamat: 'alamat',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Pengajuan_dinsosScalarFieldEnum = {
  id: 'id',
  id_pengajuan: 'id_pengajuan',
  tgl_pengajuan_register: 'tgl_pengajuan_register',
  no_registrasi: 'no_registrasi',
  tgl_registrasi: 'tgl_registrasi',
  nama_pejabat: 'nama_pejabat',
  file_lampiran: 'file_lampiran',
  keterangan: 'keterangan',
  scan_surat_tte: 'scan_surat_tte'
};

exports.Prisma.Pengajuan_indikator_sktmScalarFieldEnum = {
  id: 'id',
  id_pengajuan: 'id_pengajuan',
  nik: 'nik',
  id_indikator: 'id_indikator',
  no_pertanyaan: 'no_pertanyaan',
  skor_jawaban: 'skor_jawaban',
  keterangan: 'keterangan'
};

exports.Prisma.Pengajuan_panic_buttonScalarFieldEnum = {
  id_panic_button: 'id_panic_button',
  nik: 'nik',
  nama_pengajuan: 'nama_pengajuan',
  status: 'status',
  id_linmas: 'id_linmas',
  keterangan: 'keterangan',
  created_at: 'created_at'
};

exports.Prisma.Pengajuan_siaScalarFieldEnum = {
  id: 'id',
  nik: 'nik',
  email: 'email',
  foto_diri: 'foto_diri',
  jenis_pengajuan: 'jenis_pengajuan',
  status: 'status',
  keterangan: 'keterangan',
  created_at: 'created_at',
  updated_at: 'updated_at',
  validated_at: 'validated_at',
  desa_idds: 'desa_idds',
  iduser_pengajuan: 'iduser_pengajuan',
  iduser_verified: 'iduser_verified',
  tipe_kegiatan: 'tipe_kegiatan'
};

exports.Prisma.Pengajuan_sia_detailScalarFieldEnum = {
  id: 'id',
  id_pengajuan: 'id_pengajuan',
  id_kegiatan: 'id_kegiatan',
  lampiran: 'lampiran',
  status_lampiran: 'status_lampiran',
  created_at: 'created_at',
  updated_at: 'updated_at',
  validated_at: 'validated_at',
  keterangan: 'keterangan'
};

exports.Prisma.Pengajuan_sppScalarFieldEnum = {
  id: 'id',
  desa_idds: 'desa_idds',
  tgl_pengajuan: 'tgl_pengajuan',
  status: 'status',
  keterangan: 'keterangan',
  iduser_pengajuan: 'iduser_pengajuan',
  iduser_verified_kec: 'iduser_verified_kec',
  iduser_verified_dinas: 'iduser_verified_dinas',
  created_at: 'created_at',
  updated_at: 'updated_at',
  validated_kec_at: 'validated_kec_at',
  validated_dinas_at: 'validated_dinas_at',
  no_surat_camat: 'no_surat_camat',
  tgl_surat_camat: 'tgl_surat_camat',
  nama_camat: 'nama_camat',
  nip_camat: 'nip_camat',
  id_surat_desa: 'id_surat_desa',
  surat_pengantar_kec: 'surat_pengantar_kec'
};

exports.Prisma.Pengajuan_spp_detailScalarFieldEnum = {
  id: 'id',
  id_pengajuan: 'id_pengajuan',
  id_dokumen: 'id_dokumen',
  lampiran: 'lampiran',
  keterangan: 'keterangan',
  status_lampiran: 'status_lampiran',
  created_at: 'created_at',
  updated_at: 'updated_at',
  validated_at: 'validated_at',
  id_surat_pengantar: 'id_surat_pengantar'
};

exports.Prisma.Peraturan_daerahScalarFieldEnum = {
  id: 'id',
  idlokasi: 'idlokasi',
  role: 'role',
  peraturan: 'peraturan',
  created_at: 'created_at',
  updated_at: 'updated_at',
  idusers: 'idusers',
  nomor: 'nomor',
  tahun: 'tahun'
};

exports.Prisma.Personal_access_tokensScalarFieldEnum = {
  id: 'id',
  tokenable_type: 'tokenable_type',
  tokenable_id: 'tokenable_id',
  name: 'name',
  token: 'token',
  abilities: 'abilities',
  last_used_at: 'last_used_at',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.PindahScalarFieldEnum = {
  id: 'id',
  nomor: 'nomor',
  nomor_br: 'nomor_br',
  nik_pemohon: 'nik_pemohon',
  kk_nokk: 'kk_nokk',
  alasan: 'alasan',
  alamat: 'alamat',
  dusun: 'dusun',
  rt: 'rt',
  rw: 'rw',
  desa_idds: 'desa_idds',
  jenis: 'jenis',
  skt: 'skt',
  skp: 'skp',
  tgl: 'tgl',
  telp: 'telp',
  pos: 'pos',
  pindah_idds: 'pindah_idds',
  alasan_lain: 'alasan_lain',
  nama_pemohon: 'nama_pemohon',
  jenis_mutasi: 'jenis_mutasi',
  status: 'status',
  no_registrasi: 'no_registrasi',
  tgl_registrasi: 'tgl_registrasi',
  nama_pejabat_registrasi: 'nama_pejabat_registrasi',
  tgl_pengajuan_register: 'tgl_pengajuan_register',
  stampel_registrasi: 'stampel_registrasi'
};

exports.Prisma.PindahdatangScalarFieldEnum = {
  id: 'id',
  nomor: 'nomor',
  nomor_br: 'nomor_br',
  nik_pemohon: 'nik_pemohon',
  kk_nokk: 'kk_nokk',
  alasan: 'alasan',
  alamat: 'alamat',
  dusun: 'dusun',
  rt: 'rt',
  rw: 'rw',
  desa_idds: 'desa_idds',
  jenis: 'jenis',
  skt: 'skt',
  skp: 'skp',
  tgl: 'tgl',
  telp: 'telp',
  pos: 'pos',
  pindah_idds: 'pindah_idds',
  alasan_lain: 'alasan_lain',
  sttpin: 'sttpin',
  statuspin: 'statuspin',
  jper: 'jper',
  klaskep: 'klaskep',
  namasps: 'namasps',
  tipesps: 'tipesps',
  alamatsps: 'alamatsps',
  nokts: 'nokts',
  tglkts: 'tglkts',
  negara_tujuan: 'negara_tujuan',
  alamatngr_tujuan: 'alamatngr_tujuan',
  pjwb: 'pjwb',
  rncpindah: 'rncpindah',
  nokk_pemohon: 'nokk_pemohon',
  nama_kk: 'nama_kk',
  nama_pemohon: 'nama_pemohon',
  rt_asal: 'rt_asal',
  rw_asal: 'rw_asal',
  alamat_asal: 'alamat_asal',
  dusun_asal: 'dusun_asal',
  kode_desa: 'kode_desa',
  pos_asal: 'pos_asal',
  telp_asal: 'telp_asal',
  nokk_tujuan: 'nokk_tujuan',
  nik_tujuan: 'nik_tujuan',
  nama_kk_tujuan: 'nama_kk_tujuan',
  tgl_datang: 'tgl_datang',
  alamat_tujuan: 'alamat_tujuan',
  rt_tujuan: 'rt_tujuan',
  rw_tujuan: 'rw_tujuan',
  dusun_tujuan: 'dusun_tujuan',
  idds_tujuan: 'idds_tujuan',
  datang_idds: 'datang_idds',
  jenis_mutasi: 'jenis_mutasi'
};

exports.Prisma.ProvinsiScalarFieldEnum = {
  id: 'id',
  provinsi: 'provinsi',
  logo: 'logo',
  created_at: 'created_at',
  updated_at: 'updated_at',
  kodekemendagri: 'kodekemendagri'
};

exports.Prisma.Register_pendudukScalarFieldEnum = {
  id: 'id',
  nama: 'nama',
  nik: 'nik',
  kk_nokk: 'kk_nokk',
  t_lahir: 't_lahir',
  tgl_lahir: 'tgl_lahir',
  jk: 'jk',
  pend: 'pend',
  kel: 'kel',
  status: 'status',
  pekerjaan: 'pekerjaan',
  agama: 'agama',
  warga: 'warga',
  alamat: 'alamat',
  desa_idds: 'desa_idds',
  tgl_registrasi: 'tgl_registrasi',
  tgl_verifikasi: 'tgl_verifikasi',
  status_register: 'status_register',
  gol_dar: 'gol_dar',
  foto: 'foto'
};

exports.Prisma.SessionsScalarFieldEnum = {
  id: 'id',
  user_id: 'user_id',
  ip_address: 'ip_address',
  user_agent: 'user_agent',
  payload: 'payload',
  last_activity: 'last_activity'
};

exports.Prisma.SkckScalarFieldEnum = {
  id: 'id',
  nomor: 'nomor',
  nomor_br: 'nomor_br',
  nik: 'nik',
  tgl: 'tgl',
  keperluan: 'keperluan',
  skck_idds: 'skck_idds',
  tgl_banjar: 'tgl_banjar',
  tujuan: 'tujuan'
};

exports.Prisma.SktmScalarFieldEnum = {
  id: 'id',
  nomor: 'nomor',
  nomor_br: 'nomor_br',
  nik: 'nik',
  tgl: 'tgl',
  tgl_banjar: 'tgl_banjar',
  keperluan: 'keperluan',
  nik_ayah: 'nik_ayah',
  nik_ibu: 'nik_ibu',
  sekolah: 'sekolah',
  jurusan: 'jurusan',
  sktm_idds: 'sktm_idds',
  maksud: 'maksud'
};

exports.Prisma.SkuScalarFieldEnum = {
  id: 'id',
  nomor: 'nomor',
  nomor_br: 'nomor_br',
  nik: 'nik',
  tgl: 'tgl',
  tgl_banjar: 'tgl_banjar',
  usaha: 'usaha',
  sku_idds: 'sku_idds',
  banjar: 'banjar',
  nama: 'nama',
  jk: 'jk',
  t_lahir: 't_lahir',
  tgl_lahir: 'tgl_lahir',
  status: 'status',
  warga: 'warga',
  agama: 'agama',
  alamat: 'alamat',
  telp: 'telp',
  nama_usaha: 'nama_usaha',
  alamat_usaha: 'alamat_usaha',
  npwp: 'npwp',
  tujuan: 'tujuan',
  maksud: 'maksud'
};

exports.Prisma.StatusScalarFieldEnum = {
  id: 'id',
  status: 'status'
};

exports.Prisma.Status_lamaScalarFieldEnum = {
  id: 'id',
  status: 'status',
  no_resmi: 'no_resmi'
};

exports.Prisma.SuratScalarFieldEnum = {
  id: 'id',
  surat: 'surat',
  kode_desa: 'kode_desa',
  kode_banjar: 'kode_banjar',
  index: 'index',
  kasi: 'kasi',
  idds: 'idds',
  nomorsurat: 'nomorsurat'
};

exports.Prisma.Surat_cetakScalarFieldEnum = {
  id: 'id',
  id_pengajuan: 'id_pengajuan',
  isi: 'isi',
  idds: 'idds',
  jenis_surat: 'jenis_surat',
  iduser_tte: 'iduser_tte',
  created_at: 'created_at',
  nik_tte: 'nik_tte',
  nama_dokumen_external: 'nama_dokumen_external',
  noupload: 'noupload',
  role: 'role'
};

exports.Prisma.Surat_kuasaScalarFieldEnum = {
  id: 'id',
  nomor: 'nomor',
  nik1: 'nik1',
  nik2: 'nik2',
  tgl: 'tgl',
  kuasa_idds: 'kuasa_idds',
  keperluan: 'keperluan',
  nik_m: 'nik_m',
  nik_l: 'nik_l'
};

exports.Prisma.Surat_pengantar_sppScalarFieldEnum = {
  id: 'id',
  idds: 'idds',
  tgl_surat: 'tgl_surat',
  iduser: 'iduser',
  nomor_surat: 'nomor_surat',
  sumber_dana: 'sumber_dana',
  pencairan_ke: 'pencairan_ke',
  total_dana: 'total_dana',
  status: 'status',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Surat_pengantar_spp_detailScalarFieldEnum = {
  id: 'id',
  id_pengajuan: 'id_pengajuan',
  bidang: 'bidang',
  kode_akun: 'kode_akun',
  akun: 'akun',
  nominal: 'nominal'
};

exports.Prisma.Surat_perbekelScalarFieldEnum = {
  id: 'id',
  nomor: 'nomor',
  nomor_br: 'nomor_br',
  nik: 'nik',
  tgl: 'tgl',
  uraian: 'uraian',
  sp_idds: 'sp_idds',
  maksud: 'maksud'
};

exports.Prisma.Surat_pernyataanScalarFieldEnum = {
  id: 'id',
  nikp: 'nikp',
  nikd: 'nikd',
  saksi1: 'saksi1',
  saksi2: 'saksi2',
  nama_ayah: 'nama_ayah',
  nama_ibu: 'nama_ibu',
  anakke: 'anakke',
  isi: 'isi',
  tgl: 'tgl',
  desa_idds: 'desa_idds',
  idl: 'idl',
  no_ket: 'no_ket',
  tgl_ket: 'tgl_ket'
};

exports.Prisma.Surat_silScalarFieldEnum = {
  id: 'id',
  nikp: 'nikp',
  saksi1: 'saksi1',
  saksi2: 'saksi2',
  nama_ayah: 'nama_ayah',
  nama_ibu: 'nama_ibu',
  nama_anak: 'nama_anak',
  isi: 'isi',
  tgl: 'tgl',
  desa_idds: 'desa_idds'
};

exports.Prisma.Template_suratScalarFieldEnum = {
  id: 'id',
  surat: 'surat',
  role: 'role',
  template: 'template',
  updated_at: 'updated_at',
  updated_by: 'updated_by',
  idlokasi: 'idlokasi',
  nama_surat: 'nama_surat'
};

exports.Prisma.Tte_kabupatenScalarFieldEnum = {
  id: 'id',
  id_kabupaten: 'id_kabupaten',
  username: 'username',
  password: 'password',
  baseurl: 'baseurl',
  kabupaten: 'kabupaten'
};

exports.Prisma.Tte_suratScalarFieldEnum = {
  id: 'id',
  id_pengajuan: 'id_pengajuan',
  iduser: 'iduser',
  nik: 'nik',
  nama: 'nama',
  jabatan: 'jabatan',
  tgl_tte: 'tgl_tte'
};

exports.Prisma.UsersScalarFieldEnum = {
  id: 'id',
  name: 'name',
  email: 'email',
  email_verified_at: 'email_verified_at',
  password: 'password',
  two_factor_secret: 'two_factor_secret',
  two_factor_recovery_codes: 'two_factor_recovery_codes',
  role: 'role',
  idlokasi: 'idlokasi',
  remember_token: 'remember_token',
  current_team_id: 'current_team_id',
  profile_photo_path: 'profile_photo_path',
  created_at: 'created_at',
  updated_at: 'updated_at',
  username: 'username',
  master: 'master',
  nama_pic: 'nama_pic',
  telp_pic: 'telp_pic',
  verifikasi_token: 'verifikasi_token',
  token_fcm: 'token_fcm',
  last_login_at: 'last_login_at',
  nik_tte: 'nik_tte',
  kode_referal: 'kode_referal',
  id_dusun: 'id_dusun',
  nip: 'nip',
  jabatan: 'jabatan'
};

exports.Prisma.Users_copy1ScalarFieldEnum = {
  id: 'id',
  name: 'name',
  email: 'email',
  email_verified_at: 'email_verified_at',
  password: 'password',
  two_factor_secret: 'two_factor_secret',
  two_factor_recovery_codes: 'two_factor_recovery_codes',
  role: 'role',
  idlokasi: 'idlokasi',
  remember_token: 'remember_token',
  current_team_id: 'current_team_id',
  profile_photo_path: 'profile_photo_path',
  created_at: 'created_at',
  updated_at: 'updated_at',
  username: 'username',
  master: 'master'
};

exports.Prisma.Users_copy2ScalarFieldEnum = {
  id: 'id',
  name: 'name',
  email: 'email',
  email_verified_at: 'email_verified_at',
  password: 'password',
  two_factor_secret: 'two_factor_secret',
  two_factor_recovery_codes: 'two_factor_recovery_codes',
  role: 'role',
  idlokasi: 'idlokasi',
  remember_token: 'remember_token',
  current_team_id: 'current_team_id',
  profile_photo_path: 'profile_photo_path',
  created_at: 'created_at',
  updated_at: 'updated_at',
  username: 'username',
  master: 'master'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};
exports.dapat_program_kis = exports.$Enums.dapat_program_kis = {
  ya: 'ya',
  tidak: 'tidak'
};

exports.dapat_program_pkh = exports.$Enums.dapat_program_pkh = {
  ya: 'ya',
  tidak: 'tidak'
};

exports.dapat_program_jamkesda = exports.$Enums.dapat_program_jamkesda = {
  ya: 'ya',
  tidak: 'tidak'
};

exports.dapat_program_bpjs = exports.$Enums.dapat_program_bpjs = {
  ya: 'ya',
  tidak: 'tidak'
};

exports.dapat_program_status = exports.$Enums.dapat_program_status = {
  one: 'one',
  zero: 'zero'
};

exports.dapat_program_jamkesmas = exports.$Enums.dapat_program_jamkesmas = {
  ya: 'ya',
  tidak: 'tidak'
};

exports.lahir_jk = exports.$Enums.lahir_jk = {
  LAKI_LAKI: 'LAKI_LAKI',
  PEREMPUAN: 'PEREMPUAN'
};

exports.master_sia_jenis = exports.$Enums.master_sia_jenis = {
  kk: 'kk',
  pindah: 'pindah',
  lahir: 'lahir',
  mati: 'mati',
  kawin: 'kawin',
  cerai: 'cerai'
};

exports.master_sia_tipe = exports.$Enums.master_sia_tipe = {
  PERSYARATAN: 'PERSYARATAN',
  PENJELASAN: 'PENJELASAN',
  CATATAN: 'CATATAN',
  PROSEDUR: 'PROSEDUR'
};

exports.master_surat_jenis_surat = exports.$Enums.master_surat_jenis_surat = {
  ktp: 'ktp',
  kk: 'kk',
  skck: 'skck',
  domisili: 'domisili',
  sktm: 'sktm',
  sku: 'sku',
  belum_kawin: 'belum_kawin',
  ubah_data: 'ubah_data',
  rame: 'rame',
  kuasa: 'kuasa',
  pernyataan: 'pernyataan',
  suami_istri: 'suami_istri',
  n1n4: 'n1n4',
  n2: 'n2',
  n6: 'n6',
  wali_hakim: 'wali_hakim',
  pindah_kawin: 'pindah_kawin',
  ket_wali: 'ket_wali'
};

exports.mutasi_mutasi = exports.$Enums.mutasi_mutasi = {
  Datang: 'Datang',
  Lahir: 'Lahir',
  Mati: 'Mati',
  Pindah: 'Pindah'
};

exports.penduduk_jk = exports.$Enums.penduduk_jk = {
  LAKI_LAKI: 'LAKI_LAKI',
  PEREMPUAN: 'PEREMPUAN'
};

exports.penduduk_akte_lahir = exports.$Enums.penduduk_akte_lahir = {
  Ada: 'Ada',
  Tidak: 'Tidak'
};

exports.penduduk_mutasi = exports.$Enums.penduduk_mutasi = {
  Datang: 'Datang',
  Lahir: 'Lahir',
  Mati: 'Mati',
  Pindah: 'Pindah'
};

exports.penduduk_krama = exports.$Enums.penduduk_krama = {
  one: 'one',
  two: 'two'
};

exports.penduduk_kk_temp_jk = exports.$Enums.penduduk_kk_temp_jk = {
  LAKI_LAKI: 'LAKI_LAKI',
  PEREMPUAN: 'PEREMPUAN'
};

exports.penduduk_kk_temp_akte_lahir = exports.$Enums.penduduk_kk_temp_akte_lahir = {
  Ada: 'Ada',
  Tidak: 'Tidak'
};

exports.penduduk_kk_temp_mutasi = exports.$Enums.penduduk_kk_temp_mutasi = {
  Datang: 'Datang',
  Lahir: 'Lahir',
  Mati: 'Mati',
  Pindah: 'Pindah'
};

exports.penduduk_kk_temp_krama = exports.$Enums.penduduk_kk_temp_krama = {
  one: 'one',
  two: 'two'
};

exports.pengajuan_surat = exports.$Enums.pengajuan_surat = {
  ktp: 'ktp',
  kk: 'kk',
  skck: 'skck',
  domisili: 'domisili',
  sktm: 'sktm',
  sku: 'sku',
  belum_kawin: 'belum_kawin',
  ubah_data: 'ubah_data',
  rame: 'rame',
  kuasa: 'kuasa',
  pernyataan: 'pernyataan',
  suami_istri: 'suami_istri',
  n1n4: 'n1n4',
  n2: 'n2',
  n6: 'n6',
  wali_hakim: 'wali_hakim',
  pindah_kawin: 'pindah_kawin',
  ket_wali: 'ket_wali',
  pengantar: 'pengantar',
  bantuan_pasien: 'bantuan_pasien',
  silsilah: 'silsilah',
  ortu_wali: 'ortu_wali',
  kades: 'kades'
};

exports.pengajuan_status = exports.$Enums.pengajuan_status = {
  zero: 'zero',
  one: 'one',
  two: 'two',
  three: 'three',
  four: 'four',
  five: 'five',
  six: 'six',
  seven: 'seven',
  eight: 'eight',
  nine: 'nine',
  ten: 'ten',
  eleven: 'eleven',
  twelve: 'twelve'
};

exports.pengajuan_sia_jenis_pengajuan = exports.$Enums.pengajuan_sia_jenis_pengajuan = {
  kk: 'kk',
  lahir: 'lahir',
  mati: 'mati',
  kawin: 'kawin',
  cerai: 'cerai',
  pindah: 'pindah'
};

exports.pindah_alasan = exports.$Enums.pindah_alasan = {
  one: 'one',
  two: 'two',
  three: 'three',
  four: 'four',
  five: 'five',
  six: 'six',
  seven: 'seven'
};

exports.pindah_jenis = exports.$Enums.pindah_jenis = {
  one: 'one',
  two: 'two',
  three: 'three',
  four: 'four'
};

exports.pindah_skt = exports.$Enums.pindah_skt = {
  one: 'one',
  two: 'two',
  three: 'three'
};

exports.pindah_skp = exports.$Enums.pindah_skp = {
  one: 'one',
  two: 'two',
  three: 'three'
};

exports.pindahdatang_alasan = exports.$Enums.pindahdatang_alasan = {
  one: 'one',
  two: 'two',
  three: 'three',
  four: 'four',
  five: 'five',
  six: 'six',
  seven: 'seven'
};

exports.pindahdatang_jenis = exports.$Enums.pindahdatang_jenis = {
  one: 'one',
  two: 'two',
  three: 'three',
  four: 'four'
};

exports.pindahdatang_skt = exports.$Enums.pindahdatang_skt = {
  one: 'one',
  two: 'two',
  three: 'three'
};

exports.pindahdatang_skp = exports.$Enums.pindahdatang_skp = {
  one: 'one',
  two: 'two',
  three: 'three'
};

exports.pindahdatang_statuspin = exports.$Enums.pindahdatang_statuspin = {
  one: 'one',
  two: 'two',
  EMPTY_ENUM_VALUE: 'EMPTY_ENUM_VALUE'
};

exports.pindahdatang_jper = exports.$Enums.pindahdatang_jper = {
  one: 'one',
  two: 'two',
  three: 'three',
  EMPTY_ENUM_VALUE: 'EMPTY_ENUM_VALUE'
};

exports.pindahdatang_klaskep = exports.$Enums.pindahdatang_klaskep = {
  one: 'one',
  two: 'two',
  three: 'three',
  four: 'four',
  five: 'five',
  six: 'six'
};

exports.pindahdatang_tipesps = exports.$Enums.pindahdatang_tipesps = {
  one: 'one',
  two: 'two',
  three: 'three',
  four: 'four',
  five: 'five'
};

exports.surat_cetak_jenis_surat = exports.$Enums.surat_cetak_jenis_surat = {
  ktp: 'ktp',
  kk: 'kk',
  skck: 'skck',
  domisili: 'domisili',
  sktm: 'sktm',
  sku: 'sku',
  belum_kawin: 'belum_kawin',
  ubah_data: 'ubah_data',
  rame: 'rame',
  kuasa: 'kuasa',
  pernyataan: 'pernyataan',
  suami_istri: 'suami_istri',
  n1n4: 'n1n4',
  n2: 'n2',
  n6: 'n6',
  wali_hakim: 'wali_hakim',
  pindah_kawin: 'pindah_kawin',
  ket_wali: 'ket_wali',
  pengantar: 'pengantar',
  bantuan_pasien: 'bantuan_pasien',
  silsilah: 'silsilah',
  ortu_wali: 'ortu_wali',
  kades: 'kades',
  upload: 'upload',
  dinsos_sktm: 'dinsos_sktm',
  spp: 'spp'
};

exports.users_role = exports.$Enums.users_role = {
  admin: 'admin',
  kecamatan: 'kecamatan',
  desa: 'desa',
  guest: 'guest',
  kabupaten: 'kabupaten',
  provinsi: 'provinsi',
  warga: 'warga',
  kades: 'kades',
  sekdes: 'sekdes',
  agen: 'agen',
  validasi_sia: 'validasi_sia',
  capil: 'capil',
  dinsos: 'dinsos',
  bidan: 'bidan',
  pelayanan: 'pelayanan',
  kadus: 'kadus',
  keuangan: 'keuangan',
  linmas: 'linmas',
  keuangan_kec: 'keuangan_kec',
  keuangan_kab: 'keuangan_kab',
  camat: 'camat'
};

exports.users_copy1_role = exports.$Enums.users_copy1_role = {
  admin: 'admin',
  kecamatan: 'kecamatan',
  desa: 'desa',
  guest: 'guest',
  kabupaten: 'kabupaten',
  provinsi: 'provinsi',
  warga: 'warga'
};

exports.users_copy2_role = exports.$Enums.users_copy2_role = {
  admin: 'admin',
  kecamatan: 'kecamatan',
  desa: 'desa',
  guest: 'guest',
  kabupaten: 'kabupaten',
  provinsi: 'provinsi',
  warga: 'warga'
};

exports.Prisma.ModelName = {
  agama: 'agama',
  dapat_program: 'dapat_program',
  desa: 'desa',
  desa_temp: 'desa_temp',
  dokumen_spp: 'dokumen_spp',
  dusun: 'dusun',
  failed_jobs: 'failed_jobs',
  gol_dar: 'gol_dar',
  indikator_sktm: 'indikator_sktm',
  jk: 'jk',
  kabupaten: 'kabupaten',
  kecamatan: 'kecamatan',
  kel: 'kel',
  kk: 'kk',
  kk_temp: 'kk_temp',
  ktp: 'ktp',
  lahir: 'lahir',
  lisensi: 'lisensi',
  lisensi_copy1: 'lisensi_copy1',
  log_error_bsre: 'log_error_bsre',
  log_reset: 'log_reset',
  master_sia: 'master_sia',
  master_surat: 'master_surat',
  mati: 'mati',
  migrations: 'migrations',
  mutasi: 'mutasi',
  pekerjaan: 'pekerjaan',
  pekerjaan_lama: 'pekerjaan_lama',
  pendidikan: 'pendidikan',
  pendidikan_lama: 'pendidikan_lama',
  penduduk: 'penduduk',
  penduduk_kk_temp: 'penduduk_kk_temp',
  pengajuan: 'pengajuan',
  pengajuan_belum_nikah: 'pengajuan_belum_nikah',
  pengajuan_dinsos: 'pengajuan_dinsos',
  pengajuan_indikator_sktm: 'pengajuan_indikator_sktm',
  pengajuan_panic_button: 'pengajuan_panic_button',
  pengajuan_sia: 'pengajuan_sia',
  pengajuan_sia_detail: 'pengajuan_sia_detail',
  pengajuan_spp: 'pengajuan_spp',
  pengajuan_spp_detail: 'pengajuan_spp_detail',
  peraturan_daerah: 'peraturan_daerah',
  personal_access_tokens: 'personal_access_tokens',
  pindah: 'pindah',
  pindahdatang: 'pindahdatang',
  provinsi: 'provinsi',
  register_penduduk: 'register_penduduk',
  sessions: 'sessions',
  skck: 'skck',
  sktm: 'sktm',
  sku: 'sku',
  status: 'status',
  status_lama: 'status_lama',
  surat: 'surat',
  surat_cetak: 'surat_cetak',
  surat_kuasa: 'surat_kuasa',
  surat_pengantar_spp: 'surat_pengantar_spp',
  surat_pengantar_spp_detail: 'surat_pengantar_spp_detail',
  surat_perbekel: 'surat_perbekel',
  surat_pernyataan: 'surat_pernyataan',
  surat_sil: 'surat_sil',
  template_surat: 'template_surat',
  tte_kabupaten: 'tte_kabupaten',
  tte_surat: 'tte_surat',
  users: 'users',
  users_copy1: 'users_copy1',
  users_copy2: 'users_copy2'
};
/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "/Users/ben/dev/web-administrasi-desa/prisma/client/sistem-desa",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "darwin-arm64",
        "native": true
      }
    ],
    "previewFeatures": [],
    "sourceFilePath": "/Users/ben/dev/web-administrasi-desa/prisma/sistemdesa.prisma",
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": "../../../.env",
    "schemaEnvPath": "../../../.env"
  },
  "relativePath": "../..",
  "clientVersion": "5.22.0",
  "engineVersion": "605197351a3c8bdd595af2d2a9bc3025bca48ea2",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "mysql",
  "postinstall": false,
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "SISTEMDESA_DATABASE_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "generator client {\n  provider = \"prisma-client-js\"\n  output   = \"client/sistem-desa\"\n}\n\ndatasource db {\n  provider = \"mysql\"\n  url      = env(\"SISTEMDESA_DATABASE_URL\")\n}\n\nmodel agama {\n  id    Int     @id @default(autoincrement())\n  agama String? @db.VarChar(50)\n}\n\n/// This model or at least one  of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments\nmodel dapat_program {\n  id         String                   @id @db.Char(36)\n  nik        String?                  @db.VarChar(16)\n  kis        dapat_program_kis?       @default(tidak)\n  pkh        dapat_program_pkh?       @default(tidak)\n  jamkesda   dapat_program_jamkesda?  @default(tidak)\n  bpjs       dapat_program_bpjs?      @default(tidak)\n  idds       String?                  @db.VarChar(255)\n  ket        String?                  @db.VarChar(255)\n  created_at DateTime?                @default(now()) @db.DateTime(0)\n  updated_at DateTime?                @default(now()) @db.DateTime(0)\n  status     dapat_program_status     @default(dbgenerated(\"1\"))\n  jamkesmas  dapat_program_jamkesmas? @default(tidak)\n}\n\n/// This model or at least one  of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments\nmodel desa {\n  id             String    @id @db.VarChar(10)\n  desa           String    @db.VarChar(50)\n  id_kecamatan   String    @db.VarChar(7)\n  kd             String?   @db.VarChar(3)\n  namakades      String?   @db.VarChar(30)\n  nipkades       String?   @db.VarChar(30)\n  nikkades       String?   @db.VarChar(16)\n  alamat_kades   String?   @db.VarChar(255)\n  alamat         String?   @db.VarChar(225)\n  pos            String?   @db.VarChar(6)\n  web            String?   @db.VarChar(50)\n  namasekdes     String?   @db.VarChar(50)\n  niksekdes      String?   @db.VarChar(16)\n  nipsekdes      String?   @db.VarChar(255)\n  alamat_sekdes  String?   @db.VarChar(255)\n  logo           String?   @db.VarChar(50)\n  noresmi        String?   @db.VarChar(50)\n  golkades       String?   @db.VarChar(50)\n  logo2          String?   @db.VarChar(100)\n  wa             String?   @db.VarChar(20)\n  created_at     DateTime? @default(now()) @db.DateTime(0)\n  updated_at     DateTime? @default(now()) @db.DateTime(0)\n  kodekemendagri String?   @db.VarChar(13)\n  sebutan_kades  String?   @db.VarChar(255)\n  sebutan_sekdes String?   @db.VarChar(255)\n}\n\nmodel desa_temp {\n  id           BigInt    @id\n  id_kecamatan Int?\n  desa         String    @db.VarChar(50)\n  namakades    String?   @db.VarChar(255)\n  nipkades     String?   @db.VarChar(255)\n  namasekdes   String?   @db.VarChar(255)\n  nipsekdes    String?   @db.VarChar(255)\n  alamat       String?   @db.VarChar(255)\n  pos          String?   @db.VarChar(255)\n  wa           String?   @db.VarChar(255)\n  noresmi      String?   @db.VarChar(255)\n  logo         String?   @db.VarChar(255)\n  created_at   DateTime? @default(now()) @db.DateTime(0)\n  updated_at   DateTime? @default(now()) @db.DateTime(0)\n  web          String?   @db.VarChar(255)\n}\n\nmodel dokumen_spp {\n  id            Int     @id\n  kategori      String? @db.VarChar(50)\n  nama          String? @db.VarChar(100)\n  keterangan    String? @db.VarChar(255)\n  nourut        Int?\n  status        Int?\n  link_download String? @db.VarChar(255)\n}\n\nmodel dusun {\n  id         String    @id @db.Char(36)\n  namadusun  String    @db.VarChar(100)\n  idds       String    @db.VarChar(10)\n  kadus      String?   @db.VarChar(255)\n  alamat     String?   @db.VarChar(255)\n  created_at DateTime? @default(now()) @db.DateTime(0)\n  updated_at DateTime? @default(now()) @db.DateTime(0)\n  kode       String?   @db.VarChar(10)\n}\n\nmodel failed_jobs {\n  id         BigInt   @id @default(autoincrement()) @db.UnsignedBigInt\n  uuid       String   @unique(map: \"failed_jobs_uuid_unique\") @db.VarChar(255)\n  connection String   @db.Text\n  queue      String   @db.Text\n  payload    String   @db.LongText\n  exception  String   @db.LongText\n  failed_at  DateTime @default(now()) @db.Timestamp(0)\n}\n\nmodel gol_dar {\n  id  Int     @id @default(autoincrement())\n  gol String? @db.VarChar(5)\n}\n\nmodel indikator_sktm {\n  id_indikator    Int     @id\n  indikator       String? @db.VarChar(50)\n  no_pertanyaan   Int?\n  pertanyaan      String? @db.VarChar(100)\n  pilihan_jawaban String? @db.VarChar(100)\n  skor_jawaban    Int?\n}\n\nmodel jk {\n  kode String  @id @db.VarChar(1)\n  jk   String? @db.VarChar(15)\n}\n\nmodel kabupaten {\n  id              Int       @id\n  id_provinsi     Int?\n  kabupaten       String    @db.VarChar(50)\n  nama_kab        String?   @db.VarChar(50)\n  type_kab        String?   @db.VarChar(50)\n  id_provinsi_ex  Int?\n  id_kabupaten_ex Int?\n  kode_pos        Int?\n  logo            String?   @db.VarChar(255)\n  created_at      DateTime? @default(now()) @db.DateTime(0)\n  updated_at      DateTime? @default(now()) @db.DateTime(0)\n  kodekemendagri  String?   @db.VarChar(5)\n  id_cuaca        String?   @db.VarChar(10)\n  alamat_capil    String?   @db.Text\n  telp_capil      String?   @db.VarChar(20)\n  fax_capil       String?   @db.VarChar(20)\n  kecamatan_capil String?   @db.VarChar(100)\n  website         String?   @db.VarChar(255)\n  fitur_sia       Int?\n  fitur_regkec    Int?\n}\n\nmodel kecamatan {\n  id             String    @id @db.VarChar(7)\n  id_kabupaten   String    @db.VarChar(4)\n  kecamatan      String    @db.VarChar(30)\n  namacamat      String?   @db.VarChar(50)\n  nipcamat       String?   @db.VarChar(20)\n  created_at     DateTime? @default(now()) @db.DateTime(0)\n  updated_at     DateTime? @default(now()) @db.DateTime(0)\n  kodekemendagri String?   @db.VarChar(8)\n}\n\nmodel kel {\n  id  Int     @id\n  kel String? @db.VarChar(50)\n}\n\nmodel kk {\n  nokk      String? @db.VarChar(16)\n  nama_kk   String  @db.VarChar(50)\n  alamat    String  @db.VarChar(225)\n  dusun     String? @db.VarChar(50)\n  desa_idds String  @db.VarChar(10)\n  telp      String? @db.VarChar(20)\n  rt        String? @db.VarChar(3)\n  rw        String? @db.VarChar(3)\n  id        String  @id @db.Char(36)\n}\n\nmodel kk_temp {\n  id           String    @id @db.Char(36)\n  nik          String?   @db.VarChar(255)\n  nama         String?   @db.VarChar(255)\n  pengajuan_id String?   @db.Char(36)\n  created_at   DateTime? @default(now()) @db.DateTime(0)\n}\n\n/// The underlying table does not contain a valid unique identifier and can therefore currently not be handled by Prisma Client.\nmodel kopsurat {\n  idds             String? @db.Char(36)\n  line1            String? @db.VarChar(255)\n  line2            String? @db.VarChar(255)\n  line3            String? @db.VarChar(255)\n  line4            String? @db.VarChar(255)\n  gambar_kop       String? @db.VarChar(100)\n  tipe_tandatangan String? @db.VarChar(20)\n  gambar_barcode   String? @db.VarChar(100)\n  nik_tte          String? @db.VarChar(20)\n  passphrase       String? @db.VarChar(100)\n  role             String? @db.VarChar(20)\n\n  @@ignore\n}\n\nmodel ktp {\n  id   String   @id @db.VarChar(15)\n  nik  String   @db.VarChar(16)\n  tgl  DateTime @db.Date\n  ket  String   @db.VarChar(50)\n  idds String?  @db.VarChar(10)\n}\n\n/// This model or at least one  of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments\nmodel lahir {\n  id               String    @id @db.Char(36)\n  nomor            String    @db.VarChar(30)\n  nomor_br         String    @db.VarChar(30)\n  tempat_lahir     String    @db.VarChar(30)\n  tgl_lahir        DateTime  @db.Date\n  jk               lahir_jk\n  nik              String    @db.VarChar(16)\n  nokk             String    @db.VarChar(16)\n  alamat           String    @db.VarChar(150)\n  nama             String    @db.VarChar(100)\n  anak_ke          Int\n  nik_ibu          String    @db.VarChar(16)\n  nama_ibu         String    @db.VarChar(50)\n  usia_ibu         String    @db.VarChar(20)\n  pekerjaan_ibu    String    @db.VarChar(50)\n  alamat_ibu       String    @db.VarChar(150)\n  nik_ayah         String    @db.VarChar(16)\n  nama_ayah        String    @db.VarChar(50)\n  usia_ayah        String    @db.VarChar(20)\n  pekerjaan_ayah   String    @db.VarChar(50)\n  alamat_ayah      String    @db.VarChar(150)\n  tgl              DateTime  @db.Date\n  tgl_banjar       DateTime? @db.Date\n  nik_saksi1       String?   @db.VarChar(16)\n  nama_saksi1      String?   @db.VarChar(50)\n  usia_saksi1      String?   @db.VarChar(15)\n  pekerjaan_saksi1 String?   @db.VarChar(50)\n  alamat_saksi1    String?   @db.VarChar(150)\n  nik_saksi2       String?   @db.VarChar(16)\n  nama_saksi2      String?   @db.VarChar(50)\n  usia_saksi2      String?   @db.VarChar(15)\n  pekerjaan_saksi2 String?   @db.VarChar(50)\n  alamat_saksi2    String?   @db.VarChar(150)\n  lahir_idds       String?   @db.VarChar(10)\n  kua              String?   @db.VarChar(50)\n  capil            String?   @db.VarChar(50)\n  tgl_capil        DateTime? @db.Date\n  no_capil         String?   @db.VarChar(50)\n  nikp             String?   @db.VarChar(255)\n  pukul            DateTime? @db.Time(0)\n  bb_bayi          Decimal?  @db.Decimal(4, 1)\n  p_bayi           Int?\n  tolong           Int?\n  dusun            String?   @db.VarChar(50)\n  tdl              Int?\n  agama            String?   @db.VarChar(50)\n  keperluan        String?   @db.Text\n  created_at       DateTime? @default(now()) @db.DateTime(0)\n  updated_at       DateTime? @default(now()) @db.DateTime(0)\n  agama_ibu        String?   @db.VarChar(50)\n  agama_ayah       String?   @db.VarChar(50)\n  jenis_mutasi     String?   @db.VarChar(1)\n  kk_saksi1        String?   @db.VarChar(16)\n  kk_saksi2        String?   @db.VarChar(16)\n  warga_saksi1     String?   @db.VarChar(20)\n  warga_saksi2     String?   @db.VarChar(20)\n  kk_ayah          String?   @db.VarChar(16)\n  warga_ayah       String?   @db.VarChar(20)\n  kk_ibu           String?   @db.VarChar(20)\n  warga_ibu        String?   @db.VarChar(20)\n  t_lahir_ayah     String?   @db.VarChar(100)\n  tgl_lahir_ayah   DateTime? @db.Date\n  t_lahir_ibu      String?   @db.VarChar(100)\n  tgl_lahir_ibu    DateTime? @db.Date\n  jenis_lahir      Int?\n}\n\n/// This model or at least one  of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments\nmodel lisensi {\n  id                 String    @id @db.Char(36)\n  iduser             String    @db.Char(36)\n  id_desa            String?   @db.VarChar(20)\n  created_at         DateTime? @db.DateTime(6)\n  expired_at         DateTime? @db.DateTime(6)\n  status             Int?\n  isdemo             Int?\n  kode_agen          String?   @db.VarChar(255)\n  nama_pic           String?   @db.VarChar(100)\n  telp_pic           String?   @db.VarChar(20)\n  email_pic          String?   @db.VarChar(100)\n  islifetime         Int?\n  nominal_pembayaran Float?\n  keterangan         String?   @db.VarChar(255)\n  device_id          String?   @db.VarChar(100)\n  fitur_sia          Int?\n  fitur_regkec       Int?\n  role               String?   @db.VarChar(20)\n  kode_referal       String?   @db.VarChar(20)\n}\n\n/// This model or at least one  of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments\nmodel lisensi_copy1 {\n  id                 String    @id @db.Char(36)\n  iduser             String    @db.Char(36)\n  id_desa            String?   @db.VarChar(20)\n  created_at         DateTime? @db.DateTime(6)\n  expired_at         DateTime? @db.DateTime(6)\n  status             Int?\n  isdemo             Int?\n  kode_agen          String?   @db.VarChar(255)\n  nama_pic           String?   @db.VarChar(100)\n  telp_pic           String?   @db.VarChar(20)\n  email_pic          String?   @db.VarChar(100)\n  islifetime         Int?\n  nominal_pembayaran Float?\n  keterangan         String?   @db.VarChar(255)\n  device_id          String?   @db.VarChar(100)\n  fitur_sia          Int?\n  fitur_regkec       Int?\n  role               String?   @db.VarChar(20)\n  kode_referal       String?   @db.VarChar(20)\n}\n\nmodel log_error_bsre {\n  id            String    @id @db.VarChar(50)\n  id_system     String?   @db.VarChar(50)\n  tipe_data     String?   @db.VarChar(50)\n  status        String?   @db.VarChar(20)\n  error         String?   @db.VarChar(255)\n  message       String?   @db.Text\n  url_path      String?   @db.VarChar(255)\n  idds          String?   @db.VarChar(20)\n  iduser_action String?   @db.VarChar(50)\n  created_at    DateTime? @db.DateTime(0)\n}\n\nmodel log_reset {\n  id           String    @id @db.Char(36)\n  iddesa       String?   @db.VarChar(20)\n  tgl_reset    DateTime? @db.DateTime(0)\n  tipe_reset   String?   @db.VarChar(20)\n  iduser_reset String?   @db.VarChar(36)\n}\n\n/// This model or at least one  of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments\nmodel master_sia {\n  id            Int              @id @default(autoincrement())\n  jenis         master_sia_jenis\n  tipe          master_sia_tipe\n  tipe_kegiatan String?          @db.VarChar(200)\n  keterangan    String?          @db.Text\n  status        Int\n  nourut        Int?\n  link_download String?          @db.Text\n  nama_file     String?          @db.VarChar(100)\n}\n\nmodel master_surat {\n  id            Int                       @id @default(autoincrement())\n  nama_template String?                   @db.VarChar(255)\n  isi_template  String?                   @db.Text\n  idds          String?                   @db.VarChar(255)\n  jenis_surat   master_surat_jenis_surat?\n  created_at    DateTime?                 @db.DateTime(0)\n}\n\nmodel mati {\n  id              String    @id @db.VarChar(36)\n  kk_nokk         String    @db.VarChar(16)\n  nomor           String    @db.VarChar(30)\n  nomor_br        String?   @db.VarChar(30)\n  nik_mati        String    @db.VarChar(16)\n  tgl_mati        DateTime  @db.Date\n  pukul           DateTime  @db.Time(0)\n  sebab           String    @db.VarChar(100)\n  tempat          String    @db.VarChar(100)\n  info            String    @db.VarChar(30)\n  tgl_banjar      DateTime? @db.Date\n  anak_ke         Int?\n  mati_idds       String?   @db.VarChar(10)\n  keperluan       String?   @db.VarChar(100)\n  nik_ahliwaris   String?   @db.VarChar(16)\n  nik_ayah        String?   @db.VarChar(16)\n  nik_ibu         String?   @db.VarChar(16)\n  nama_ayah       String?   @db.VarChar(50)\n  nama_ibu        String?   @db.VarChar(50)\n  tgl_lahir_ayah  DateTime? @db.Date\n  tgl_lahir_ibu   DateTime? @db.Date\n  usia_ayah       Int?\n  usia_ibu        Int?\n  alamat_ayah     String?   @db.VarChar(1000)\n  alamat_ibu      String?   @db.VarChar(1000)\n  pekerjaan_ayah  String?   @db.VarChar(50)\n  pekerjaan_ibu   String?   @db.VarChar(50)\n  hub             String?   @db.VarChar(50)\n  bukti           String?   @db.VarChar(50)\n  nik_pelapor     String?   @db.VarChar(16)\n  telp            String?   @db.Char(50)\n  nama            String?   @db.VarChar(255)\n  nik_saksi1      String?   @db.VarChar(16)\n  nik_saksi2      String?   @db.VarChar(16)\n  dusun           String?   @db.VarChar(100)\n  alamat          String?   @db.VarChar(255)\n  tgl             DateTime? @db.Date\n  nama_pelapor    String?   @db.VarChar(100)\n  nokk_pelapor    String?   @db.VarChar(16)\n  warga_pelapor   String?   @db.VarChar(10)\n  nama_saksi1     String?   @db.VarChar(100)\n  nokk_saksi1     String?   @db.VarChar(16)\n  warga_saksi1    String?   @db.VarChar(10)\n  nama_saksi2     String?   @db.VarChar(100)\n  nokk_saksi2     String?   @db.VarChar(16)\n  warga_saksi2    String?   @db.VarChar(10)\n  nama_ahliwaris  String?   @db.VarChar(100)\n  nokk_ahliwaris  String?   @db.VarChar(16)\n  warga_ahliwaris String?   @db.VarChar(10)\n  t_lahir_ayah    String?   @db.VarChar(100)\n  t_lahir_ibu     String?   @db.VarChar(100)\n  nokk_ayah       String?   @db.VarChar(16)\n  nokk_ibu        String?   @db.VarChar(16)\n  warga_ayah      String?   @db.VarChar(10)\n  warga_ibu       String?   @db.VarChar(10)\n}\n\nmodel migrations {\n  id        Int    @id @default(autoincrement()) @db.UnsignedInt\n  migration String @db.VarChar(255)\n  batch     Int\n}\n\nmodel mutasi {\n  id          String        @id @db.Char(36)\n  tgl         DateTime?     @db.Date\n  nik         String        @db.VarChar(16)\n  mutasi      mutasi_mutasi\n  ket         String        @db.VarChar(100)\n  alamat      String        @db.VarChar(100)\n  dusun       String        @db.VarChar(100)\n  rt          String?       @default(\"0\") @db.VarChar(5)\n  rw          String?       @default(\"0\") @db.VarChar(5)\n  desa_idds   String        @db.VarChar(10)\n  masa_ktp    String?       @default(\"-\") @db.VarChar(20)\n  shdk        String?       @db.VarChar(30)\n  pindah_id   String?       @db.VarChar(36)\n  datang_id   String?       @db.VarChar(36)\n  mati_id     String?       @db.VarChar(36)\n  lahir_id    String?       @db.VarChar(36)\n  mutasi_idds String?       @db.VarChar(10)\n}\n\n/// The underlying table does not contain a valid unique identifier and can therefore currently not be handled by Prisma Client.\nmodel otp_users {\n  iduser     String   @db.VarChar(100)\n  kode_otp   String   @db.VarChar(10)\n  created_at DateTime @db.DateTime(0)\n  expired_at DateTime @db.DateTime(0)\n  email      String   @db.VarChar(100)\n\n  @@ignore\n}\n\n/// The underlying table does not contain a valid unique identifier and can therefore currently not be handled by Prisma Client.\nmodel password_resets {\n  email      String    @db.VarChar(255)\n  token      String    @db.VarChar(255)\n  created_at DateTime? @db.Timestamp(0)\n\n  @@index([email], map: \"password_resets_email_index\")\n  @@ignore\n}\n\nmodel pekerjaan {\n  id        Int     @id @default(0)\n  pekerjaan String? @db.VarChar(50)\n\n  @@index([id], map: \"id\")\n}\n\nmodel pekerjaan_lama {\n  id        Int     @id @default(0)\n  pekerjaan String? @db.VarChar(50)\n\n  @@index([id], map: \"id\")\n}\n\nmodel pendidikan {\n  id   Int     @id\n  pend String? @db.VarChar(50)\n}\n\nmodel pendidikan_lama {\n  id   Int     @id\n  pend String? @db.VarChar(50)\n}\n\n/// This model or at least one  of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments\nmodel penduduk {\n  nik                   String               @default(\"\") @db.VarChar(16)\n  nama                  String               @db.VarChar(100)\n  t_lahir               String?              @db.VarChar(30)\n  tgl_lahir             DateTime?            @db.Date\n  jk                    penduduk_jk?\n  kel                   Int?\n  pend                  Int?\n  agama                 Int?\n  status                Int?\n  pekerjaan             Int?\n  warga                 String?              @db.VarChar(3)\n  penghasilan           BigInt?\n  hub                   String?              @db.VarChar(20)\n  disabilitas           String?              @db.VarChar(20)\n  akte_lahir            penduduk_akte_lahir? @default(Tidak)\n  gol_dar               String?              @default(\"13\") @db.VarChar(2)\n  alamat                String?              @db.VarChar(255)\n  dusun                 String?              @db.VarChar(100)\n  desa_idds             String?              @db.VarChar(10)\n  kk_nokk               String?              @db.VarChar(16)\n  mutasi                penduduk_mutasi?     @default(Datang)\n  tgl_mutasi            DateTime?            @db.Date\n  telp                  String?              @db.VarChar(20)\n  pendidikan            String?              @db.VarChar(20)\n  nik_ayah              String?              @db.VarChar(16)\n  nama_ayah             String?              @db.VarChar(50)\n  nik_ibu               String?              @db.VarChar(16)\n  nama_ibu              String?              @db.VarChar(50)\n  foto                  String?              @db.VarChar(255)\n  rt                    String?              @db.VarChar(10)\n  rw                    String?              @db.VarChar(10)\n  akta_lahir            String?              @db.VarChar(50)\n  akta_lahir_baru       String?              @db.VarChar(50)\n  akta_kawin            String?              @db.VarChar(50)\n  akta_kawin_baru       String?              @db.VarChar(50)\n  krama                 penduduk_krama?      @default(dbgenerated(\"1\"))\n  tgl_kawin             DateTime?            @db.Date\n  tgl_matipindah        DateTime?            @db.Date\n  dasawisma1            String?              @db.VarChar(50)\n  dasawisma2            String?              @db.VarChar(50)\n  userid                String               @id @db.Char(36)\n  created_at            DateTime?            @default(now()) @db.DateTime(0)\n  updated_at            DateTime?            @default(now()) @db.DateTime(0)\n  vaksin1               Int?                 @default(0)\n  vaksin2               Int?                 @default(0)\n  vaksin3               Int?                 @default(0)\n  kelainan_fisik        Int?\n  status_verifikasi     Int?\n  keterangan_verifikasi String?              @db.VarChar(255)\n  dokumen_verifkasi     String?              @db.VarChar(100)\n  tgl_verifikasi        DateTime?            @db.DateTime(0)\n  user_verifikasi       String?              @db.VarChar(100)\n}\n\nmodel penduduk_kk_temp {\n  nik             String                       @default(\"\") @db.VarChar(16)\n  nama            String                       @db.VarChar(50)\n  t_lahir         String                       @db.VarChar(30)\n  tgl_lahir       DateTime                     @db.Date\n  jk              penduduk_kk_temp_jk?\n  kel             Int?\n  pend            Int?\n  agama           Int?\n  status          Int?\n  pekerjaan       Int?\n  warga           String?                      @db.VarChar(3)\n  penghasilan     BigInt?\n  hub             String?                      @db.VarChar(20)\n  disabilitas     String?                      @db.VarChar(20)\n  akte_lahir      penduduk_kk_temp_akte_lahir? @default(Tidak)\n  gol_dar         String?                      @default(\"13\") @db.VarChar(2)\n  alamat          String?                      @db.VarChar(100)\n  dusun           String?                      @db.VarChar(100)\n  desa_idds       String?                      @db.VarChar(10)\n  kk_nokk         String?                      @db.VarChar(16)\n  mutasi          penduduk_kk_temp_mutasi?     @default(Datang)\n  tgl_mutasi      DateTime?                    @db.Date\n  telp            String?                      @db.VarChar(20)\n  pendidikan      String?                      @db.VarChar(20)\n  nik_ayah        String?                      @db.VarChar(16)\n  nama_ayah       String?                      @db.VarChar(50)\n  nik_ibu         String?                      @db.VarChar(16)\n  nama_ibu        String?                      @db.VarChar(50)\n  foto            String?                      @db.VarChar(255)\n  rt              String?                      @db.VarChar(3)\n  rw              String?                      @db.VarChar(3)\n  akta_lahir      String?                      @db.VarChar(50)\n  akta_lahir_baru String?                      @db.VarChar(50)\n  akta_kawin      String?                      @db.VarChar(50)\n  akta_kawin_baru String?                      @db.VarChar(50)\n  krama           penduduk_kk_temp_krama?      @default(dbgenerated(\"1\"))\n  tgl_kawin       DateTime?                    @db.Date\n  tgl_matipindah  DateTime?                    @db.Date\n  dasawisma1      String?                      @db.VarChar(50)\n  dasawisma2      String?                      @db.VarChar(50)\n  userid          String                       @id @db.Char(36)\n  created_at      DateTime?                    @default(now()) @db.DateTime(0)\n  updated_at      DateTime?                    @default(now()) @db.DateTime(0)\n  pengajuan_id    String?                      @db.Char(36)\n}\n\n/// This model or at least one  of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments\nmodel pengajuan {\n  id                      String            @id @db.Char(36)\n  nik                     String?           @db.VarChar(255)\n  keterangan              String?           @db.VarChar(255)\n  surat                   pengajuan_surat?\n  created_at              DateTime?         @default(now()) @db.DateTime(0)\n  updated_at              DateTime?         @db.DateTime(0)\n  idds                    String?           @db.VarChar(255)\n  iduser                  String?           @db.VarChar(255)\n  status                  pengajuan_status? @default(dbgenerated(\"0\"))\n  nik_ayah                String?           @db.VarChar(255)\n  nik_ibu                 String?           @db.VarChar(255)\n  tujuan                  String?           @db.VarChar(255)\n  jurusan                 String?           @db.VarChar(255)\n  bidang_usaha            String?           @db.VarChar(255)\n  nama_usaha              String?           @db.VarChar(255)\n  alamat_usaha            String?           @db.VarChar(255)\n  npwp                    String?           @db.VarChar(255)\n  nomor_surat             String?           @db.VarChar(255)\n  nomor_banjar            String?           @db.VarChar(255)\n  tgl_surat               DateTime?         @db.Date\n  data_berubah            String?           @db.VarChar(255)\n  perubahan               String?           @db.VarChar(255)\n  semula                  String?           @db.VarChar(255)\n  dusun                   String?           @db.VarChar(50)\n  sekolah                 String?           @db.VarChar(100)\n  tgl_kegiatan            DateTime?         @db.Date\n  acara_mulai             String?           @db.VarChar(200)\n  nama_acara              String?           @db.VarChar(200)\n  nik_penerima            String?           @db.VarChar(20)\n  nik_lahir_mati          String?           @db.VarChar(20)\n  jenis_kuasa             String?           @db.VarChar(20)\n  nik_saksi1              String?           @db.VarChar(20)\n  nik_saksi2              String?           @db.VarChar(20)\n  kelianadat              String?           @db.VarChar(100)\n  rohaniawan              String?           @db.VarChar(100)\n  nama_camat              String?           @db.VarChar(100)\n  tgl_akhir               DateTime?         @db.Date\n  nama_pasien             String?           @db.VarChar(100)\n  no_telepon              String?           @db.VarChar(20)\n  jenis_penduduk          String?           @db.VarChar(10)\n  nik_asing               String?           @db.VarChar(50)\n  nama_asing              String?           @db.VarChar(255)\n  jk_asing                String?           @db.VarChar(20)\n  tlahir_asing            String?           @db.VarChar(100)\n  tgllahir_asing          DateTime?         @db.Date\n  agama_asing             String?           @db.VarChar(50)\n  status_asing            String?           @db.VarChar(50)\n  warga_asing             String?           @db.VarChar(20)\n  alamat_asing            String?           @db.VarChar(255)\n  telp_asing              String?           @db.VarChar(20)\n  nama_saksi1             String?           @db.VarChar(100)\n  nama_saksi2             String?           @db.VarChar(100)\n  tgl_pengajuan_tte       DateTime?         @db.DateTime(0)\n  no_registrasi           String?           @db.VarChar(100)\n  tgl_registrasi          DateTime?         @db.Date\n  nama_pejabat_registrasi String?           @db.VarChar(100)\n  stampel_registrasi      String?           @db.VarChar(100)\n  nama_ayah               String?           @db.VarChar(100)\n  nama_ibu                String?           @db.VarChar(100)\n  scan_surat_tte          String?           @db.VarChar(200)\n  verify_bidandesa        Int?\n  verify_kadus            Int?\n  verify_kasi             Int?\n  scan_ktp                String?           @db.VarChar(100)\n  scan_kk                 String?           @db.VarChar(100)\n  scan_rujukan            String?           @db.VarChar(100)\n  template_custom         Int?\n}\n\nmodel pengajuan_belum_nikah {\n  id           Int       @id @default(autoincrement()) @db.UnsignedInt\n  idds         String    @db.VarChar(255)\n  nomor_surat  String    @db.VarChar(255)\n  nomor_banjar String    @db.VarChar(255)\n  nik          String    @db.VarChar(255)\n  nama_lengkap String    @db.VarChar(255)\n  alamat       String    @db.VarChar(255)\n  created_at   DateTime? @db.Timestamp(0)\n  updated_at   DateTime? @db.Timestamp(0)\n}\n\nmodel pengajuan_dinsos {\n  id                     String    @id @db.Char(36)\n  id_pengajuan           String?   @db.VarChar(36)\n  tgl_pengajuan_register DateTime? @db.DateTime(0)\n  no_registrasi          String?   @db.VarChar(255)\n  tgl_registrasi         DateTime? @db.DateTime(0)\n  nama_pejabat           String?   @db.VarChar(100)\n  file_lampiran          String?   @db.VarChar(100)\n  keterangan             String?   @db.VarChar(100)\n  scan_surat_tte         String?   @db.VarChar(200)\n}\n\nmodel pengajuan_indikator_sktm {\n  id            String  @id @db.Char(36)\n  id_pengajuan  String? @db.Char(36)\n  nik           String? @db.VarChar(16)\n  id_indikator  Int?\n  no_pertanyaan Int?\n  skor_jawaban  Int?\n  keterangan    String? @db.VarChar(100)\n}\n\n/// This model or at least one  of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments\nmodel pengajuan_panic_button {\n  id_panic_button String    @id @db.Char(36)\n  nik             String?   @db.VarChar(255)\n  nama_pengajuan  String?   @db.VarChar(255)\n  status          Int?\n  id_linmas       String?   @db.Char(36)\n  keterangan      String?   @db.VarChar(255)\n  created_at      DateTime? @db.DateTime(0)\n}\n\n/// This model or at least one  of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments\nmodel pengajuan_sia {\n  id               String                        @id @db.VarChar(100)\n  nik              String                        @db.VarChar(16)\n  email            String                        @db.VarChar(100)\n  foto_diri        String                        @db.VarChar(100)\n  jenis_pengajuan  pengajuan_sia_jenis_pengajuan\n  status           Int\n  keterangan       String?                       @db.VarChar(100)\n  created_at       DateTime?                     @db.DateTime(0)\n  updated_at       DateTime?                     @db.DateTime(0)\n  validated_at     DateTime?                     @db.DateTime(0)\n  desa_idds        String?                       @db.VarChar(100)\n  iduser_pengajuan String?                       @db.VarChar(100)\n  iduser_verified  String?                       @db.VarChar(100)\n  tipe_kegiatan    String                        @db.VarChar(100)\n}\n\n/// This model or at least one  of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments\nmodel pengajuan_sia_detail {\n  id              String    @id @db.VarChar(100)\n  id_pengajuan    String    @db.VarChar(100)\n  id_kegiatan     Int\n  lampiran        String?   @db.VarChar(100)\n  status_lampiran Int?\n  created_at      DateTime  @db.DateTime(0)\n  updated_at      DateTime? @db.DateTime(0)\n  validated_at    DateTime? @db.DateTime(0)\n  keterangan      String?   @db.VarChar(200)\n}\n\nmodel pengajuan_spp {\n  id                    String    @id @db.VarChar(50)\n  desa_idds             String?   @db.VarChar(255)\n  tgl_pengajuan         DateTime? @db.Date\n  status                String?   @db.VarChar(20)\n  keterangan            String?   @db.VarChar(255)\n  iduser_pengajuan      String?   @db.VarChar(50)\n  iduser_verified_kec   String?   @db.VarChar(50)\n  iduser_verified_dinas String?   @db.VarChar(50)\n  created_at            DateTime? @db.DateTime(0)\n  updated_at            DateTime? @db.DateTime(0)\n  validated_kec_at      DateTime? @db.DateTime(0)\n  validated_dinas_at    DateTime? @db.DateTime(0)\n  no_surat_camat        String?   @db.VarChar(100)\n  tgl_surat_camat       DateTime? @db.Date\n  nama_camat            String?   @db.VarChar(100)\n  nip_camat             String?   @db.VarChar(100)\n  id_surat_desa         String?   @db.VarChar(50)\n  surat_pengantar_kec   String?   @db.VarChar(100)\n}\n\n/// This model or at least one  of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments\nmodel pengajuan_spp_detail {\n  id                 String    @id @db.VarChar(50)\n  id_pengajuan       String?   @db.VarChar(50)\n  id_dokumen         Int?\n  lampiran           String?   @db.VarChar(100)\n  keterangan         String?   @db.VarChar(100)\n  status_lampiran    Int?\n  created_at         DateTime? @db.DateTime(0)\n  updated_at         DateTime? @db.DateTime(0)\n  validated_at       DateTime? @db.DateTime(0)\n  id_surat_pengantar String?   @db.VarChar(50)\n}\n\nmodel peraturan_daerah {\n  id         String    @id @db.VarChar(50)\n  idlokasi   String?   @db.VarChar(20)\n  role       String?   @db.VarChar(20)\n  peraturan  String?   @db.LongText\n  created_at DateTime? @db.DateTime(0)\n  updated_at DateTime? @db.DateTime(0)\n  idusers    String?   @db.VarChar(50)\n  nomor      String?   @db.VarChar(20)\n  tahun      String?   @db.VarChar(4)\n}\n\nmodel personal_access_tokens {\n  id             BigInt    @id @default(autoincrement()) @db.UnsignedBigInt\n  tokenable_type String    @db.VarChar(255)\n  tokenable_id   BigInt    @db.UnsignedBigInt\n  name           String    @db.VarChar(255)\n  token          String    @unique(map: \"personal_access_tokens_token_unique\") @db.VarChar(64)\n  abilities      String?   @db.Text\n  last_used_at   DateTime? @db.Timestamp(0)\n  created_at     DateTime? @db.Timestamp(0)\n  updated_at     DateTime? @db.Timestamp(0)\n\n  @@index([tokenable_type, tokenable_id], map: \"personal_access_tokens_tokenable_type_tokenable_id_index\")\n}\n\n/// This model or at least one  of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments\nmodel pindah {\n  id                      String        @id @db.VarChar(36)\n  nomor                   String        @db.VarChar(30)\n  nomor_br                String        @db.VarChar(30)\n  nik_pemohon             String        @db.VarChar(16)\n  kk_nokk                 String        @db.VarChar(16)\n  alasan                  pindah_alasan\n  alamat                  String        @db.VarChar(255)\n  dusun                   String        @db.VarChar(20)\n  rt                      String?       @db.VarChar(3)\n  rw                      String?       @db.VarChar(3)\n  desa_idds               String        @db.VarChar(10)\n  jenis                   pindah_jenis\n  skt                     pindah_skt\n  skp                     pindah_skp\n  tgl                     DateTime      @db.Date\n  telp                    String        @db.VarChar(12)\n  pos                     String        @db.VarChar(6)\n  pindah_idds             String        @db.VarChar(10)\n  alasan_lain             String?       @db.VarChar(225)\n  nama_pemohon            String?       @db.VarChar(100)\n  jenis_mutasi            String?       @db.VarChar(1)\n  status                  Int?\n  no_registrasi           String?       @db.VarChar(50)\n  tgl_registrasi          DateTime?     @db.Date\n  nama_pejabat_registrasi String?       @db.VarChar(100)\n  tgl_pengajuan_register  DateTime?     @db.Date\n  stampel_registrasi      String?       @db.VarChar(100)\n}\n\n/// This model or at least one  of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments\nmodel pindahdatang {\n  id               String                  @id @db.VarChar(36)\n  nomor            String                  @db.VarChar(30)\n  nomor_br         String                  @db.VarChar(30)\n  nik_pemohon      String?                 @db.VarChar(16)\n  kk_nokk          String?                 @db.VarChar(16)\n  alasan           pindahdatang_alasan?\n  alamat           String?                 @db.VarChar(255)\n  dusun            String?                 @db.VarChar(100)\n  rt               String?                 @db.VarChar(3)\n  rw               String?                 @db.VarChar(3)\n  desa_idds        String?                 @db.VarChar(10)\n  jenis            pindahdatang_jenis?\n  skt              pindahdatang_skt?\n  skp              pindahdatang_skp\n  tgl              DateTime                @db.Date\n  telp             String?                 @db.VarChar(12)\n  pos              String?                 @db.VarChar(6)\n  pindah_idds      String?                 @db.VarChar(10)\n  alasan_lain      String?                 @db.VarChar(225)\n  sttpin           String?                 @db.VarChar(16)\n  statuspin        pindahdatang_statuspin?\n  jper             pindahdatang_jper?\n  klaskep          pindahdatang_klaskep?\n  namasps          String?                 @db.VarChar(50)\n  tipesps          pindahdatang_tipesps?\n  alamatsps        String?                 @db.VarChar(50)\n  nokts            Int?\n  tglkts           DateTime?               @db.Date\n  negara_tujuan    String?                 @db.VarChar(50)\n  alamatngr_tujuan String?                 @db.VarChar(50)\n  pjwb             String?                 @db.VarChar(50)\n  rncpindah        DateTime?               @db.Date\n  nokk_pemohon     String?                 @db.VarChar(16)\n  nama_kk          String?                 @db.VarChar(50)\n  nama_pemohon     String?                 @db.VarChar(50)\n  rt_asal          String?                 @db.VarChar(3)\n  rw_asal          String?                 @db.VarChar(3)\n  alamat_asal      String?                 @db.VarChar(255)\n  dusun_asal       String?                 @db.VarChar(100)\n  kode_desa        String?                 @db.VarChar(10)\n  pos_asal         String?                 @db.VarChar(7)\n  telp_asal        String?                 @db.VarChar(15)\n  nokk_tujuan      String?                 @db.VarChar(16)\n  nik_tujuan       String?                 @db.VarChar(16)\n  nama_kk_tujuan   String?                 @db.VarChar(50)\n  tgl_datang       DateTime?               @db.Date\n  alamat_tujuan    String?                 @db.VarChar(255)\n  rt_tujuan        String?                 @db.VarChar(3)\n  rw_tujuan        String?                 @db.VarChar(3)\n  dusun_tujuan     String?                 @db.VarChar(20)\n  idds_tujuan      String?                 @db.VarChar(10)\n  datang_idds      String?                 @db.VarChar(10)\n  jenis_mutasi     String?                 @db.VarChar(1)\n}\n\nmodel provinsi {\n  id             Int       @id\n  provinsi       String    @db.VarChar(50)\n  logo           String?   @db.VarChar(255)\n  created_at     DateTime? @default(now()) @db.DateTime(0)\n  updated_at     DateTime? @default(now()) @db.DateTime(0)\n  kodekemendagri String?   @db.VarChar(2)\n}\n\nmodel register_penduduk {\n  id              String    @id @db.VarChar(255)\n  nama            String?   @db.VarChar(255)\n  nik             String?   @db.VarChar(16)\n  kk_nokk         String?   @db.VarChar(16)\n  t_lahir         String?   @db.VarChar(255)\n  tgl_lahir       DateTime? @db.Date\n  jk              Int?\n  pend            Int?\n  kel             Int?\n  status          Int?\n  pekerjaan       Int?\n  agama           Int?\n  warga           String?   @db.VarChar(3)\n  alamat          String?   @db.VarChar(255)\n  desa_idds       String?   @db.VarChar(10)\n  tgl_registrasi  DateTime? @db.DateTime(0)\n  tgl_verifikasi  DateTime? @db.DateTime(0)\n  status_register Int?\n  gol_dar         String?   @db.VarChar(2)\n  foto            String?   @db.VarChar(255)\n}\n\nmodel sessions {\n  id            String  @id @db.VarChar(255)\n  user_id       String? @db.Char(36)\n  ip_address    String? @db.VarChar(45)\n  user_agent    String? @db.Text\n  payload       String  @db.Text\n  last_activity Int\n\n  @@index([last_activity], map: \"sessions_last_activity_index\")\n  @@index([user_id], map: \"sessions_user_id_index\")\n}\n\nmodel skck {\n  id         String    @id @db.VarChar(19)\n  nomor      String    @db.VarChar(30)\n  nomor_br   String    @db.VarChar(30)\n  nik        String    @db.VarChar(16)\n  tgl        DateTime  @db.Date\n  keperluan  String    @db.VarChar(225)\n  skck_idds  String    @db.VarChar(10)\n  tgl_banjar DateTime? @db.Date\n  tujuan     String?   @db.Text\n}\n\nmodel sktm {\n  id         String   @id @db.VarChar(19)\n  nomor      String   @db.VarChar(30)\n  nomor_br   String   @db.VarChar(30)\n  nik        String   @db.VarChar(16)\n  tgl        DateTime @db.Date\n  tgl_banjar DateTime @db.Date\n  keperluan  String   @db.VarChar(225)\n  nik_ayah   String   @db.VarChar(16)\n  nik_ibu    String   @db.VarChar(16)\n  sekolah    String   @db.VarChar(30)\n  jurusan    String   @db.VarChar(30)\n  sktm_idds  String   @db.VarChar(10)\n  maksud     String?  @db.Text\n}\n\nmodel sku {\n  id           String    @id @db.VarChar(19)\n  nomor        String    @db.VarChar(30)\n  nomor_br     String    @db.VarChar(30)\n  nik          String    @db.VarChar(16)\n  tgl          DateTime? @db.Date\n  tgl_banjar   DateTime? @db.Date\n  usaha        String?   @db.VarChar(225)\n  sku_idds     String?   @db.VarChar(10)\n  banjar       String?   @db.VarChar(50)\n  nama         String?   @db.VarChar(50)\n  jk           String?   @db.VarChar(1)\n  t_lahir      String?   @db.VarChar(20)\n  tgl_lahir    DateTime? @default(dbgenerated(\"'1990-01-01'\")) @db.Date\n  status       String?   @db.VarChar(20)\n  warga        String?   @db.VarChar(20)\n  agama        String?   @db.VarChar(20)\n  alamat       String?   @db.VarChar(100)\n  telp         String?   @db.VarChar(15)\n  nama_usaha   String?   @db.VarChar(50)\n  alamat_usaha String?   @db.VarChar(100)\n  npwp         String?   @db.VarChar(20)\n  tujuan       String?   @db.VarChar(50)\n  maksud       String?   @db.Text\n}\n\nmodel status {\n  id     Int     @id\n  status String? @db.VarChar(255)\n}\n\nmodel status_lama {\n  id       Int     @id\n  status   String? @db.VarChar(255)\n  no_resmi Int?\n}\n\nmodel surat {\n  id          Int     @id @default(autoincrement())\n  surat       String? @db.VarChar(50)\n  kode_desa   String? @db.VarChar(10)\n  kode_banjar String? @db.VarChar(10)\n  index       String? @db.VarChar(10)\n  kasi        String? @db.VarChar(10)\n  idds        String? @db.VarChar(10)\n  nomorsurat  String? @db.VarChar(255)\n}\n\nmodel surat_cetak {\n  id                    String                   @id @db.VarChar(50)\n  id_pengajuan          String?                  @db.VarChar(255)\n  isi                   String?                  @db.Text\n  idds                  String?                  @db.VarChar(255)\n  jenis_surat           surat_cetak_jenis_surat?\n  iduser_tte            String?                  @db.VarChar(50)\n  created_at            DateTime?                @db.DateTime(0)\n  nik_tte               String?                  @db.VarChar(16)\n  nama_dokumen_external String?                  @db.Text\n  noupload              String?                  @db.VarChar(20)\n  role                  String?                  @db.VarChar(20)\n}\n\nmodel surat_kuasa {\n  id         String   @id @db.VarChar(19)\n  nomor      String   @db.VarChar(30)\n  nik1       String   @db.VarChar(16)\n  nik2       String   @db.VarChar(16)\n  tgl        DateTime @db.Date\n  kuasa_idds String   @db.VarChar(10)\n  keperluan  String   @db.Text\n  nik_m      String?  @db.VarChar(16)\n  nik_l      String?  @db.VarChar(20)\n}\n\nmodel surat_pengantar_spp {\n  id           String    @id @db.VarChar(50)\n  idds         String?   @db.VarChar(10)\n  tgl_surat    DateTime? @db.Date\n  iduser       String?   @db.VarChar(50)\n  nomor_surat  String?   @db.VarChar(255)\n  sumber_dana  String?   @db.VarChar(255)\n  pencairan_ke Int?\n  total_dana   Float?\n  status       String?   @db.VarChar(20)\n  created_at   DateTime? @db.DateTime(0)\n  updated_at   DateTime? @db.DateTime(0)\n}\n\nmodel surat_pengantar_spp_detail {\n  id           String  @id @db.VarChar(50)\n  id_pengajuan String? @db.VarChar(50)\n  bidang       String? @db.VarChar(1)\n  kode_akun    String? @db.VarChar(50)\n  akun         String? @db.VarChar(255)\n  nominal      Float?\n}\n\nmodel surat_perbekel {\n  id       String   @id @db.VarChar(19)\n  nomor    String   @db.VarChar(30)\n  nomor_br String   @db.VarChar(30)\n  nik      String   @db.VarChar(16)\n  tgl      DateTime @db.Date\n  uraian   String   @db.Text\n  sp_idds  String   @db.VarChar(10)\n  maksud   String?  @db.Text\n}\n\nmodel surat_pernyataan {\n  id        Int       @id @default(autoincrement())\n  nikp      String?   @default(\"0\") @db.VarChar(16)\n  nikd      String?   @default(\"0\") @db.VarChar(16)\n  saksi1    String?   @default(\"0\") @db.VarChar(16)\n  saksi2    String?   @default(\"0\") @db.VarChar(16)\n  nama_ayah String?   @default(\"0\") @db.VarChar(50)\n  nama_ibu  String?   @default(\"0\") @db.VarChar(50)\n  anakke    Int?      @default(0)\n  isi       String?   @db.Text\n  tgl       DateTime  @db.Date\n  desa_idds String?   @default(\"0\") @db.VarChar(10)\n  idl       String?   @db.VarChar(20)\n  no_ket    String?   @db.VarChar(30)\n  tgl_ket   DateTime? @db.Date\n\n  @@index([nikp, nikd, saksi1, saksi2, desa_idds], map: \"nikp_nikd_saksi1_saksi2_desa_idds\")\n}\n\nmodel surat_sil {\n  id        Int      @id @default(autoincrement())\n  nikp      String?  @default(\"0\") @db.VarChar(16)\n  saksi1    String?  @default(\"0\") @db.VarChar(16)\n  saksi2    String?  @default(\"0\") @db.VarChar(16)\n  nama_ayah String?  @default(\"0\") @db.VarChar(50)\n  nama_ibu  String?  @default(\"0\") @db.VarChar(50)\n  nama_anak String?  @default(\"0\") @db.VarChar(50)\n  isi       String?  @db.Text\n  tgl       DateTime @db.Date\n  desa_idds String?  @default(\"0\") @db.VarChar(10)\n\n  @@index([nikp, saksi1, saksi2, desa_idds], map: \"nikp_nikd_saksi1_saksi2_desa_idds\")\n}\n\nmodel template_surat {\n  id         String    @id @db.Char(36)\n  surat      String?   @db.VarChar(50)\n  role       String?   @db.VarChar(50)\n  template   String?   @db.LongText\n  updated_at DateTime? @db.DateTime(0)\n  updated_by String?   @db.Char(36)\n  idlokasi   String?   @db.VarChar(20)\n  nama_surat String?   @db.VarChar(255)\n}\n\nmodel tte_kabupaten {\n  id           Int     @id\n  id_kabupaten Int?\n  username     String? @db.VarChar(50)\n  password     String? @db.VarChar(50)\n  baseurl      String? @db.VarChar(100)\n  kabupaten    String? @db.VarChar(255)\n}\n\nmodel tte_surat {\n  id           String    @id @db.Char(36)\n  id_pengajuan String?   @db.Char(36)\n  iduser       String?   @db.VarChar(255)\n  nik          String?   @db.VarChar(20)\n  nama         String?   @db.VarChar(100)\n  jabatan      String?   @db.VarChar(100)\n  tgl_tte      DateTime? @db.DateTime(0)\n}\n\nmodel users {\n  id                        String     @id @db.Char(36)\n  name                      String     @db.VarChar(255)\n  email                     String     @unique(map: \"users_email_unique\") @db.VarChar(255)\n  email_verified_at         DateTime?  @db.Timestamp(0)\n  password                  String     @db.VarChar(255)\n  two_factor_secret         String?    @db.Text\n  two_factor_recovery_codes String?    @db.Text\n  role                      users_role @default(guest)\n  idlokasi                  String?    @db.VarChar(255)\n  remember_token            String?    @db.VarChar(100)\n  current_team_id           BigInt?    @db.UnsignedBigInt\n  profile_photo_path        String?    @db.VarChar(2048)\n  created_at                DateTime?  @db.Timestamp(0)\n  updated_at                DateTime?  @db.Timestamp(0)\n  username                  String     @unique(map: \"users_username_unique\") @db.VarChar(255)\n  master                    Int?       @default(0)\n  nama_pic                  String?    @db.VarChar(100)\n  telp_pic                  String?    @db.VarChar(20)\n  verifikasi_token          String?    @db.VarChar(22)\n  token_fcm                 String?    @db.VarChar(255)\n  last_login_at             DateTime?  @db.DateTime(0)\n  nik_tte                   String?    @db.VarChar(16)\n  kode_referal              String?    @db.VarChar(20)\n  id_dusun                  String?    @db.Char(36)\n  nip                       String?    @db.VarChar(50)\n  jabatan                   String?    @db.VarChar(100)\n}\n\nmodel users_copy1 {\n  id                        String           @id @db.Char(36)\n  name                      String           @db.VarChar(255)\n  email                     String           @unique(map: \"users_email_unique\") @db.VarChar(255)\n  email_verified_at         DateTime?        @db.Timestamp(0)\n  password                  String           @db.VarChar(255)\n  two_factor_secret         String?          @db.Text\n  two_factor_recovery_codes String?          @db.Text\n  role                      users_copy1_role @default(guest)\n  idlokasi                  String?          @db.VarChar(255)\n  remember_token            String?          @db.VarChar(100)\n  current_team_id           BigInt?          @db.UnsignedBigInt\n  profile_photo_path        String?          @db.VarChar(2048)\n  created_at                DateTime?        @db.Timestamp(0)\n  updated_at                DateTime?        @db.Timestamp(0)\n  username                  String           @unique(map: \"users_username_unique\") @db.VarChar(255)\n  master                    Int?             @default(0)\n}\n\nmodel users_copy2 {\n  id                        String           @id @db.Char(36)\n  name                      String           @db.VarChar(255)\n  email                     String           @unique(map: \"users_email_unique\") @db.VarChar(255)\n  email_verified_at         DateTime?        @db.Timestamp(0)\n  password                  String           @db.VarChar(255)\n  two_factor_secret         String?          @db.Text\n  two_factor_recovery_codes String?          @db.Text\n  role                      users_copy2_role @default(guest)\n  idlokasi                  String?          @db.VarChar(255)\n  remember_token            String?          @db.VarChar(100)\n  current_team_id           BigInt?          @db.UnsignedBigInt\n  profile_photo_path        String?          @db.VarChar(2048)\n  created_at                DateTime?        @db.Timestamp(0)\n  updated_at                DateTime?        @db.Timestamp(0)\n  username                  String           @unique(map: \"users_username_unique\") @db.VarChar(255)\n  master                    Int?             @default(0)\n}\n\nenum master_sia_jenis {\n  kk\n  pindah\n  lahir\n  mati\n  kawin\n  cerai\n}\n\nenum dapat_program_kis {\n  ya\n  tidak\n}\n\nenum master_sia_tipe {\n  PERSYARATAN\n  PENJELASAN\n  CATATAN\n  PROSEDUR\n}\n\nenum dapat_program_pkh {\n  ya\n  tidak\n}\n\nenum mutasi_mutasi {\n  Datang\n  Lahir\n  Mati\n  Pindah\n}\n\nenum pengajuan_surat {\n  ktp\n  kk\n  skck\n  domisili\n  sktm\n  sku\n  belum_kawin\n  ubah_data\n  rame\n  kuasa\n  pernyataan\n  suami_istri\n  n1n4\n  n2\n  n6\n  wali_hakim\n  pindah_kawin\n  ket_wali\n  pengantar\n  bantuan_pasien\n  silsilah\n  ortu_wali\n  kades\n}\n\nenum dapat_program_jamkesda {\n  ya\n  tidak\n}\n\nenum master_surat_jenis_surat {\n  ktp\n  kk\n  skck\n  domisili\n  sktm\n  sku\n  belum_kawin\n  ubah_data\n  rame\n  kuasa\n  pernyataan\n  suami_istri\n  n1n4\n  n2\n  n6\n  wali_hakim\n  pindah_kawin\n  ket_wali\n}\n\nenum penduduk_jk {\n  LAKI_LAKI @map(\"1\")\n  PEREMPUAN @map(\"2\")\n}\n\nenum penduduk_kk_temp_jk {\n  LAKI_LAKI @map(\"1\")\n  PEREMPUAN @map(\"2\")\n}\n\nenum pengajuan_sia_jenis_pengajuan {\n  kk\n  lahir\n  mati\n  kawin\n  cerai\n  pindah\n}\n\nenum surat_cetak_jenis_surat {\n  ktp\n  kk\n  skck\n  domisili\n  sktm\n  sku\n  belum_kawin\n  ubah_data\n  rame\n  kuasa\n  pernyataan\n  suami_istri\n  n1n4\n  n2\n  n6\n  wali_hakim\n  pindah_kawin\n  ket_wali\n  pengantar\n  bantuan_pasien\n  silsilah\n  ortu_wali\n  kades\n  upload\n  dinsos_sktm\n  spp\n}\n\nenum dapat_program_bpjs {\n  ya\n  tidak\n}\n\nenum lahir_jk {\n  LAKI_LAKI @map(\"1\")\n  PEREMPUAN @map(\"2\")\n}\n\nenum pindah_alasan {\n  one   @map(\"1\")\n  two   @map(\"2\")\n  three @map(\"3\")\n  four  @map(\"4\")\n  five  @map(\"5\")\n  six   @map(\"6\")\n  seven @map(\"7\")\n}\n\nenum pindahdatang_alasan {\n  one   @map(\"1\")\n  two   @map(\"2\")\n  three @map(\"3\")\n  four  @map(\"4\")\n  five  @map(\"5\")\n  six   @map(\"6\")\n  seven @map(\"7\")\n}\n\nenum users_role {\n  admin\n  kecamatan\n  desa\n  guest\n  kabupaten\n  provinsi\n  warga\n  kades\n  sekdes\n  agen\n  validasi_sia\n  capil\n  dinsos\n  bidan\n  pelayanan\n  kadus\n  keuangan\n  linmas\n  keuangan_kec\n  keuangan_kab\n  camat\n}\n\nenum users_copy1_role {\n  admin\n  kecamatan\n  desa\n  guest\n  kabupaten\n  provinsi\n  warga\n}\n\nenum users_copy2_role {\n  admin\n  kecamatan\n  desa\n  guest\n  kabupaten\n  provinsi\n  warga\n}\n\nenum pengajuan_status {\n  zero   @map(\"0\")\n  one    @map(\"1\")\n  two    @map(\"2\")\n  three  @map(\"3\")\n  four   @map(\"4\")\n  five   @map(\"5\")\n  six    @map(\"6\")\n  seven  @map(\"7\")\n  eight  @map(\"8\")\n  nine   @map(\"9\")\n  ten    @map(\"10\")\n  eleven @map(\"11\")\n  twelve @map(\"12\")\n}\n\nenum dapat_program_status {\n  one  @map(\"1\")\n  zero @map(\"0\")\n}\n\nenum dapat_program_jamkesmas {\n  ya\n  tidak\n}\n\nenum pindah_jenis {\n  one   @map(\"1\")\n  two   @map(\"2\")\n  three @map(\"3\")\n  four  @map(\"4\")\n}\n\nenum pindahdatang_jenis {\n  one   @map(\"1\")\n  two   @map(\"2\")\n  three @map(\"3\")\n  four  @map(\"4\")\n}\n\nenum pindah_skt {\n  one   @map(\"1\")\n  two   @map(\"2\")\n  three @map(\"3\")\n}\n\nenum pindahdatang_skt {\n  one   @map(\"1\")\n  two   @map(\"2\")\n  three @map(\"3\")\n}\n\nenum pindah_skp {\n  one   @map(\"1\")\n  two   @map(\"2\")\n  three @map(\"3\")\n}\n\nenum pindahdatang_skp {\n  one   @map(\"1\")\n  two   @map(\"2\")\n  three @map(\"3\")\n}\n\nenum penduduk_akte_lahir {\n  Ada\n  Tidak\n}\n\nenum penduduk_kk_temp_akte_lahir {\n  Ada\n  Tidak\n}\n\nenum penduduk_mutasi {\n  Datang\n  Lahir\n  Mati\n  Pindah\n}\n\nenum penduduk_kk_temp_mutasi {\n  Datang\n  Lahir\n  Mati\n  Pindah\n}\n\nenum pindahdatang_statuspin {\n  one              @map(\"1\")\n  two              @map(\"2\")\n  EMPTY_ENUM_VALUE @map(\"\")\n}\n\nenum pindahdatang_jper {\n  one              @map(\"1\")\n  two              @map(\"2\")\n  three            @map(\"3\")\n  EMPTY_ENUM_VALUE @map(\"\")\n}\n\nenum pindahdatang_klaskep {\n  one   @map(\"1\")\n  two   @map(\"2\")\n  three @map(\"3\")\n  four  @map(\"4\")\n  five  @map(\"5\")\n  six   @map(\"6\")\n}\n\nenum pindahdatang_tipesps {\n  one   @map(\"1\")\n  two   @map(\"2\")\n  three @map(\"3\")\n  four  @map(\"4\")\n  five  @map(\"5\")\n}\n\nenum penduduk_krama {\n  one @map(\"1\")\n  two @map(\"2\")\n}\n\nenum penduduk_kk_temp_krama {\n  one @map(\"1\")\n  two @map(\"2\")\n}\n",
  "inlineSchemaHash": "fc2d4e1acc29b35bc56d3716ce26eb81a9a8caaa58a1578989c45224ff439a76",
  "copyEngine": true
}

const fs = require('fs')

config.dirname = __dirname
if (!fs.existsSync(path.join(__dirname, 'schema.prisma'))) {
  const alternativePaths = [
    "prisma/client/sistem-desa",
    "client/sistem-desa",
  ]
  
  const alternativePath = alternativePaths.find((altPath) => {
    return fs.existsSync(path.join(process.cwd(), altPath, 'schema.prisma'))
  }) ?? alternativePaths[0]

  config.dirname = path.join(process.cwd(), alternativePath)
  config.isBundled = true
}

config.runtimeDataModel = JSON.parse("{\"models\":{\"agama\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"agama\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"dapat_program\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nik\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"kis\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"dapat_program_kis\",\"default\":\"tidak\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pkh\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"dapat_program_pkh\",\"default\":\"tidak\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"jamkesda\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"dapat_program_jamkesda\",\"default\":\"tidak\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bpjs\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"dapat_program_bpjs\",\"default\":\"tidak\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"idds\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ket\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"dapat_program_status\",\"default\":{\"name\":\"dbgenerated\",\"args\":[\"1\"]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"jamkesmas\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"dapat_program_jamkesmas\",\"default\":\"tidak\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false,\"documentation\":\"This model or at least one  of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments\"},\"desa\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"desa\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_kecamatan\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"kd\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"namakades\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nipkades\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nikkades\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"alamat_kades\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"alamat\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pos\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"web\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"namasekdes\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"niksekdes\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nipsekdes\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"alamat_sekdes\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"logo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"noresmi\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"golkades\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"logo2\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"wa\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"kodekemendagri\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sebutan_kades\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sebutan_sekdes\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false,\"documentation\":\"This model or at least one  of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments\"},\"desa_temp\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_kecamatan\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"desa\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"namakades\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nipkades\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"namasekdes\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nipsekdes\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"alamat\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pos\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"wa\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"noresmi\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"logo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"web\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"dokumen_spp\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"kategori\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nama\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"keterangan\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nourut\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"link_download\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"dusun\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"namadusun\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"idds\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"kadus\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"alamat\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"kode\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"failed_jobs\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"uuid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"connection\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"queue\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"payload\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"exception\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"failed_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"gol_dar\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"gol\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"indikator_sktm\":{\"dbName\":null,\"fields\":[{\"name\":\"id_indikator\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"indikator\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"no_pertanyaan\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pertanyaan\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pilihan_jawaban\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"skor_jawaban\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"jk\":{\"dbName\":null,\"fields\":[{\"name\":\"kode\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"jk\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"kabupaten\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_provinsi\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"kabupaten\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nama_kab\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"type_kab\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_provinsi_ex\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_kabupaten_ex\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"kode_pos\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"logo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"kodekemendagri\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_cuaca\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"alamat_capil\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"telp_capil\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fax_capil\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"kecamatan_capil\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"website\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fitur_sia\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fitur_regkec\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"kecamatan\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_kabupaten\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"kecamatan\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"namacamat\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nipcamat\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"kodekemendagri\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"kel\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"kel\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"kk\":{\"dbName\":null,\"fields\":[{\"name\":\"nokk\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nama_kk\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"alamat\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dusun\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"desa_idds\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"telp\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"rt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"rw\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"kk_temp\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nik\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nama\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pengajuan_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"ktp\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nik\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tgl\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ket\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"idds\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"lahir\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nomor\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nomor_br\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tempat_lahir\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tgl_lahir\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"jk\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"lahir_jk\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nik\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nokk\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"alamat\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nama\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"anak_ke\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nik_ibu\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nama_ibu\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"usia_ibu\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pekerjaan_ibu\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"alamat_ibu\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nik_ayah\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nama_ayah\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"usia_ayah\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pekerjaan_ayah\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"alamat_ayah\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tgl\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tgl_banjar\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nik_saksi1\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nama_saksi1\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"usia_saksi1\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pekerjaan_saksi1\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"alamat_saksi1\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nik_saksi2\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nama_saksi2\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"usia_saksi2\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pekerjaan_saksi2\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"alamat_saksi2\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lahir_idds\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"kua\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"capil\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tgl_capil\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"no_capil\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nikp\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pukul\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bb_bayi\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"p_bayi\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tolong\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dusun\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tdl\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"agama\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"keperluan\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"agama_ibu\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"agama_ayah\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"jenis_mutasi\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"kk_saksi1\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"kk_saksi2\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"warga_saksi1\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"warga_saksi2\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"kk_ayah\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"warga_ayah\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"kk_ibu\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"warga_ibu\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"t_lahir_ayah\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tgl_lahir_ayah\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"t_lahir_ibu\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tgl_lahir_ibu\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"jenis_lahir\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false,\"documentation\":\"This model or at least one  of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments\"},\"lisensi\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"iduser\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_desa\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"expired_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isdemo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"kode_agen\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nama_pic\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"telp_pic\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email_pic\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"islifetime\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nominal_pembayaran\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"keterangan\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"device_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fitur_sia\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fitur_regkec\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"role\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"kode_referal\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false,\"documentation\":\"This model or at least one  of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments\"},\"lisensi_copy1\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"iduser\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_desa\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"expired_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isdemo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"kode_agen\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nama_pic\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"telp_pic\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email_pic\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"islifetime\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nominal_pembayaran\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"keterangan\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"device_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fitur_sia\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fitur_regkec\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"role\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"kode_referal\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false,\"documentation\":\"This model or at least one  of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments\"},\"log_error_bsre\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_system\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tipe_data\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"error\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"message\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"url_path\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"idds\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"iduser_action\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"log_reset\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"iddesa\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tgl_reset\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tipe_reset\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"iduser_reset\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"master_sia\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"jenis\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"master_sia_jenis\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tipe\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"master_sia_tipe\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tipe_kegiatan\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"keterangan\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nourut\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"link_download\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nama_file\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false,\"documentation\":\"This model or at least one  of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments\"},\"master_surat\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nama_template\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isi_template\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"idds\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"jenis_surat\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"master_surat_jenis_surat\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"mati\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"kk_nokk\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nomor\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nomor_br\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nik_mati\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tgl_mati\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pukul\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sebab\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tempat\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"info\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tgl_banjar\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"anak_ke\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"mati_idds\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"keperluan\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nik_ahliwaris\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nik_ayah\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nik_ibu\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nama_ayah\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nama_ibu\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tgl_lahir_ayah\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tgl_lahir_ibu\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"usia_ayah\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"usia_ibu\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"alamat_ayah\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"alamat_ibu\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pekerjaan_ayah\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pekerjaan_ibu\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"hub\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bukti\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nik_pelapor\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"telp\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nama\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nik_saksi1\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nik_saksi2\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dusun\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"alamat\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tgl\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nama_pelapor\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nokk_pelapor\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"warga_pelapor\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nama_saksi1\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nokk_saksi1\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"warga_saksi1\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nama_saksi2\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nokk_saksi2\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"warga_saksi2\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nama_ahliwaris\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nokk_ahliwaris\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"warga_ahliwaris\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"t_lahir_ayah\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"t_lahir_ibu\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nokk_ayah\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nokk_ibu\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"warga_ayah\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"warga_ibu\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"migrations\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"migration\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"batch\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"mutasi\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tgl\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nik\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"mutasi\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"mutasi_mutasi\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ket\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"alamat\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dusun\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"rt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"0\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"rw\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"0\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"desa_idds\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"masa_ktp\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"-\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"shdk\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pindah_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"datang_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"mati_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lahir_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"mutasi_idds\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"pekerjaan\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pekerjaan\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"pekerjaan_lama\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pekerjaan\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"pendidikan\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pend\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"pendidikan_lama\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pend\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"penduduk\":{\"dbName\":null,\"fields\":[{\"name\":\"nik\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nama\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"t_lahir\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tgl_lahir\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"jk\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"penduduk_jk\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"kel\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pend\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"agama\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pekerjaan\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"warga\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"penghasilan\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"hub\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"disabilitas\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"akte_lahir\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"penduduk_akte_lahir\",\"default\":\"Tidak\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"gol_dar\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"13\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"alamat\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dusun\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"desa_idds\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"kk_nokk\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"mutasi\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"penduduk_mutasi\",\"default\":\"Datang\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tgl_mutasi\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"telp\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pendidikan\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nik_ayah\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nama_ayah\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nik_ibu\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nama_ibu\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"foto\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"rt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"rw\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"akta_lahir\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"akta_lahir_baru\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"akta_kawin\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"akta_kawin_baru\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"krama\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"penduduk_krama\",\"default\":{\"name\":\"dbgenerated\",\"args\":[\"1\"]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tgl_kawin\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tgl_matipindah\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dasawisma1\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dasawisma2\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"vaksin1\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"vaksin2\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"vaksin3\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"kelainan_fisik\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status_verifikasi\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"keterangan_verifikasi\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dokumen_verifkasi\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tgl_verifikasi\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user_verifikasi\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false,\"documentation\":\"This model or at least one  of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments\"},\"penduduk_kk_temp\":{\"dbName\":null,\"fields\":[{\"name\":\"nik\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nama\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"t_lahir\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tgl_lahir\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"jk\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"penduduk_kk_temp_jk\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"kel\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pend\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"agama\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pekerjaan\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"warga\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"penghasilan\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"hub\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"disabilitas\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"akte_lahir\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"penduduk_kk_temp_akte_lahir\",\"default\":\"Tidak\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"gol_dar\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"13\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"alamat\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dusun\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"desa_idds\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"kk_nokk\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"mutasi\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"penduduk_kk_temp_mutasi\",\"default\":\"Datang\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tgl_mutasi\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"telp\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pendidikan\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nik_ayah\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nama_ayah\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nik_ibu\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nama_ibu\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"foto\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"rt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"rw\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"akta_lahir\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"akta_lahir_baru\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"akta_kawin\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"akta_kawin_baru\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"krama\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"penduduk_kk_temp_krama\",\"default\":{\"name\":\"dbgenerated\",\"args\":[\"1\"]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tgl_kawin\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tgl_matipindah\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dasawisma1\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dasawisma2\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pengajuan_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"pengajuan\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nik\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"keterangan\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"surat\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"pengajuan_surat\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"idds\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"iduser\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"pengajuan_status\",\"default\":{\"name\":\"dbgenerated\",\"args\":[\"0\"]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nik_ayah\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nik_ibu\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tujuan\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"jurusan\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bidang_usaha\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nama_usaha\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"alamat_usaha\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"npwp\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nomor_surat\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nomor_banjar\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tgl_surat\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"data_berubah\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"perubahan\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"semula\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dusun\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sekolah\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tgl_kegiatan\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"acara_mulai\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nama_acara\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nik_penerima\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nik_lahir_mati\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"jenis_kuasa\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nik_saksi1\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nik_saksi2\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"kelianadat\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"rohaniawan\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nama_camat\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tgl_akhir\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nama_pasien\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"no_telepon\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"jenis_penduduk\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nik_asing\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nama_asing\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"jk_asing\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tlahir_asing\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tgllahir_asing\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"agama_asing\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status_asing\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"warga_asing\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"alamat_asing\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"telp_asing\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nama_saksi1\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nama_saksi2\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tgl_pengajuan_tte\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"no_registrasi\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tgl_registrasi\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nama_pejabat_registrasi\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"stampel_registrasi\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nama_ayah\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nama_ibu\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"scan_surat_tte\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"verify_bidandesa\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"verify_kadus\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"verify_kasi\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"scan_ktp\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"scan_kk\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"scan_rujukan\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"template_custom\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false,\"documentation\":\"This model or at least one  of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments\"},\"pengajuan_belum_nikah\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"idds\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nomor_surat\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nomor_banjar\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nik\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nama_lengkap\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"alamat\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"pengajuan_dinsos\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_pengajuan\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tgl_pengajuan_register\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"no_registrasi\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tgl_registrasi\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nama_pejabat\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"file_lampiran\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"keterangan\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"scan_surat_tte\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"pengajuan_indikator_sktm\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_pengajuan\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nik\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_indikator\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"no_pertanyaan\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"skor_jawaban\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"keterangan\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"pengajuan_panic_button\":{\"dbName\":null,\"fields\":[{\"name\":\"id_panic_button\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nik\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nama_pengajuan\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_linmas\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"keterangan\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false,\"documentation\":\"This model or at least one  of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments\"},\"pengajuan_sia\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nik\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"foto_diri\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"jenis_pengajuan\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"pengajuan_sia_jenis_pengajuan\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"keterangan\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"validated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"desa_idds\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"iduser_pengajuan\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"iduser_verified\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tipe_kegiatan\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false,\"documentation\":\"This model or at least one  of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments\"},\"pengajuan_sia_detail\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_pengajuan\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_kegiatan\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lampiran\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status_lampiran\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"validated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"keterangan\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false,\"documentation\":\"This model or at least one  of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments\"},\"pengajuan_spp\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"desa_idds\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tgl_pengajuan\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"keterangan\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"iduser_pengajuan\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"iduser_verified_kec\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"iduser_verified_dinas\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"validated_kec_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"validated_dinas_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"no_surat_camat\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tgl_surat_camat\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nama_camat\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nip_camat\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_surat_desa\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"surat_pengantar_kec\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"pengajuan_spp_detail\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_pengajuan\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_dokumen\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lampiran\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"keterangan\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status_lampiran\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"validated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_surat_pengantar\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false,\"documentation\":\"This model or at least one  of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments\"},\"peraturan_daerah\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"idlokasi\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"role\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"peraturan\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"idusers\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nomor\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tahun\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"personal_access_tokens\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tokenable_type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tokenable_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"token\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"abilities\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"last_used_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"pindah\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nomor\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nomor_br\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nik_pemohon\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"kk_nokk\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"alasan\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"pindah_alasan\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"alamat\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dusun\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"rt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"rw\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"desa_idds\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"jenis\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"pindah_jenis\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"skt\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"pindah_skt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"skp\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"pindah_skp\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tgl\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"telp\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pos\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pindah_idds\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"alasan_lain\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nama_pemohon\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"jenis_mutasi\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"no_registrasi\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tgl_registrasi\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nama_pejabat_registrasi\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tgl_pengajuan_register\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"stampel_registrasi\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false,\"documentation\":\"This model or at least one  of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments\"},\"pindahdatang\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nomor\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nomor_br\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nik_pemohon\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"kk_nokk\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"alasan\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"pindahdatang_alasan\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"alamat\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dusun\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"rt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"rw\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"desa_idds\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"jenis\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"pindahdatang_jenis\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"skt\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"pindahdatang_skt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"skp\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"pindahdatang_skp\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tgl\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"telp\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pos\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pindah_idds\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"alasan_lain\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sttpin\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"statuspin\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"pindahdatang_statuspin\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"jper\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"pindahdatang_jper\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"klaskep\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"pindahdatang_klaskep\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"namasps\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tipesps\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"pindahdatang_tipesps\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"alamatsps\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nokts\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tglkts\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"negara_tujuan\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"alamatngr_tujuan\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pjwb\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"rncpindah\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nokk_pemohon\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nama_kk\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nama_pemohon\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"rt_asal\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"rw_asal\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"alamat_asal\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dusun_asal\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"kode_desa\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pos_asal\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"telp_asal\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nokk_tujuan\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nik_tujuan\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nama_kk_tujuan\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tgl_datang\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"alamat_tujuan\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"rt_tujuan\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"rw_tujuan\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dusun_tujuan\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"idds_tujuan\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"datang_idds\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"jenis_mutasi\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false,\"documentation\":\"This model or at least one  of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments\"},\"provinsi\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"provinsi\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"logo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"kodekemendagri\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"register_penduduk\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nama\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nik\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"kk_nokk\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"t_lahir\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tgl_lahir\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"jk\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pend\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"kel\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pekerjaan\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"agama\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"warga\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"alamat\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"desa_idds\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tgl_registrasi\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tgl_verifikasi\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status_register\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"gol_dar\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"foto\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"sessions\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ip_address\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user_agent\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"payload\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"last_activity\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"skck\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nomor\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nomor_br\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nik\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tgl\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"keperluan\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"skck_idds\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tgl_banjar\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tujuan\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"sktm\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nomor\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nomor_br\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nik\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tgl\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tgl_banjar\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"keperluan\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nik_ayah\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nik_ibu\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sekolah\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"jurusan\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sktm_idds\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"maksud\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"sku\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nomor\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nomor_br\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nik\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tgl\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tgl_banjar\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"usaha\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sku_idds\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"banjar\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nama\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"jk\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"t_lahir\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tgl_lahir\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"dbgenerated\",\"args\":[\"'1990-01-01'\"]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"warga\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"agama\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"alamat\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"telp\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nama_usaha\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"alamat_usaha\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"npwp\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tujuan\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"maksud\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"status\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"status_lama\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"no_resmi\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"surat\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"surat\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"kode_desa\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"kode_banjar\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"index\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"kasi\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"idds\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nomorsurat\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"surat_cetak\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_pengajuan\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isi\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"idds\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"jenis_surat\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"surat_cetak_jenis_surat\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"iduser_tte\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nik_tte\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nama_dokumen_external\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"noupload\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"role\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"surat_kuasa\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nomor\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nik1\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nik2\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tgl\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"kuasa_idds\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"keperluan\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nik_m\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nik_l\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"surat_pengantar_spp\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"idds\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tgl_surat\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"iduser\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nomor_surat\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sumber_dana\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pencairan_ke\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"total_dana\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"surat_pengantar_spp_detail\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_pengajuan\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bidang\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"kode_akun\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"akun\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nominal\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"surat_perbekel\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nomor\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nomor_br\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nik\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tgl\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"uraian\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sp_idds\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"maksud\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"surat_pernyataan\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nikp\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"0\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nikd\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"0\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"saksi1\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"0\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"saksi2\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"0\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nama_ayah\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"0\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nama_ibu\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"0\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"anakke\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isi\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tgl\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"desa_idds\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"0\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"idl\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"no_ket\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tgl_ket\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"surat_sil\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nikp\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"0\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"saksi1\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"0\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"saksi2\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"0\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nama_ayah\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"0\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nama_ibu\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"0\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nama_anak\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"0\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isi\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tgl\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"desa_idds\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"0\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"template_surat\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"surat\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"role\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"template\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_by\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"idlokasi\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nama_surat\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"tte_kabupaten\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_kabupaten\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"username\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"password\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"baseurl\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"kabupaten\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"tte_surat\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_pengajuan\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"iduser\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nik\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nama\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"jabatan\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tgl_tte\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"users\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email_verified_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"password\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"two_factor_secret\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"two_factor_recovery_codes\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"role\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"users_role\",\"default\":\"guest\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"idlokasi\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"remember_token\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"current_team_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"profile_photo_path\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"username\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"master\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nama_pic\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"telp_pic\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"verifikasi_token\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"token_fcm\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"last_login_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nik_tte\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"kode_referal\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_dusun\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nip\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"jabatan\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"users_copy1\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email_verified_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"password\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"two_factor_secret\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"two_factor_recovery_codes\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"role\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"users_copy1_role\",\"default\":\"guest\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"idlokasi\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"remember_token\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"current_team_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"profile_photo_path\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"username\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"master\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"users_copy2\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email_verified_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"password\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"two_factor_secret\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"two_factor_recovery_codes\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"role\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"users_copy2_role\",\"default\":\"guest\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"idlokasi\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"remember_token\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"current_team_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"profile_photo_path\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"username\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"master\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{\"master_sia_jenis\":{\"values\":[{\"name\":\"kk\",\"dbName\":null},{\"name\":\"pindah\",\"dbName\":null},{\"name\":\"lahir\",\"dbName\":null},{\"name\":\"mati\",\"dbName\":null},{\"name\":\"kawin\",\"dbName\":null},{\"name\":\"cerai\",\"dbName\":null}],\"dbName\":null},\"dapat_program_kis\":{\"values\":[{\"name\":\"ya\",\"dbName\":null},{\"name\":\"tidak\",\"dbName\":null}],\"dbName\":null},\"master_sia_tipe\":{\"values\":[{\"name\":\"PERSYARATAN\",\"dbName\":null},{\"name\":\"PENJELASAN\",\"dbName\":null},{\"name\":\"CATATAN\",\"dbName\":null},{\"name\":\"PROSEDUR\",\"dbName\":null}],\"dbName\":null},\"dapat_program_pkh\":{\"values\":[{\"name\":\"ya\",\"dbName\":null},{\"name\":\"tidak\",\"dbName\":null}],\"dbName\":null},\"mutasi_mutasi\":{\"values\":[{\"name\":\"Datang\",\"dbName\":null},{\"name\":\"Lahir\",\"dbName\":null},{\"name\":\"Mati\",\"dbName\":null},{\"name\":\"Pindah\",\"dbName\":null}],\"dbName\":null},\"pengajuan_surat\":{\"values\":[{\"name\":\"ktp\",\"dbName\":null},{\"name\":\"kk\",\"dbName\":null},{\"name\":\"skck\",\"dbName\":null},{\"name\":\"domisili\",\"dbName\":null},{\"name\":\"sktm\",\"dbName\":null},{\"name\":\"sku\",\"dbName\":null},{\"name\":\"belum_kawin\",\"dbName\":null},{\"name\":\"ubah_data\",\"dbName\":null},{\"name\":\"rame\",\"dbName\":null},{\"name\":\"kuasa\",\"dbName\":null},{\"name\":\"pernyataan\",\"dbName\":null},{\"name\":\"suami_istri\",\"dbName\":null},{\"name\":\"n1n4\",\"dbName\":null},{\"name\":\"n2\",\"dbName\":null},{\"name\":\"n6\",\"dbName\":null},{\"name\":\"wali_hakim\",\"dbName\":null},{\"name\":\"pindah_kawin\",\"dbName\":null},{\"name\":\"ket_wali\",\"dbName\":null},{\"name\":\"pengantar\",\"dbName\":null},{\"name\":\"bantuan_pasien\",\"dbName\":null},{\"name\":\"silsilah\",\"dbName\":null},{\"name\":\"ortu_wali\",\"dbName\":null},{\"name\":\"kades\",\"dbName\":null}],\"dbName\":null},\"dapat_program_jamkesda\":{\"values\":[{\"name\":\"ya\",\"dbName\":null},{\"name\":\"tidak\",\"dbName\":null}],\"dbName\":null},\"master_surat_jenis_surat\":{\"values\":[{\"name\":\"ktp\",\"dbName\":null},{\"name\":\"kk\",\"dbName\":null},{\"name\":\"skck\",\"dbName\":null},{\"name\":\"domisili\",\"dbName\":null},{\"name\":\"sktm\",\"dbName\":null},{\"name\":\"sku\",\"dbName\":null},{\"name\":\"belum_kawin\",\"dbName\":null},{\"name\":\"ubah_data\",\"dbName\":null},{\"name\":\"rame\",\"dbName\":null},{\"name\":\"kuasa\",\"dbName\":null},{\"name\":\"pernyataan\",\"dbName\":null},{\"name\":\"suami_istri\",\"dbName\":null},{\"name\":\"n1n4\",\"dbName\":null},{\"name\":\"n2\",\"dbName\":null},{\"name\":\"n6\",\"dbName\":null},{\"name\":\"wali_hakim\",\"dbName\":null},{\"name\":\"pindah_kawin\",\"dbName\":null},{\"name\":\"ket_wali\",\"dbName\":null}],\"dbName\":null},\"penduduk_jk\":{\"values\":[{\"name\":\"LAKI_LAKI\",\"dbName\":\"1\"},{\"name\":\"PEREMPUAN\",\"dbName\":\"2\"}],\"dbName\":null},\"penduduk_kk_temp_jk\":{\"values\":[{\"name\":\"LAKI_LAKI\",\"dbName\":\"1\"},{\"name\":\"PEREMPUAN\",\"dbName\":\"2\"}],\"dbName\":null},\"pengajuan_sia_jenis_pengajuan\":{\"values\":[{\"name\":\"kk\",\"dbName\":null},{\"name\":\"lahir\",\"dbName\":null},{\"name\":\"mati\",\"dbName\":null},{\"name\":\"kawin\",\"dbName\":null},{\"name\":\"cerai\",\"dbName\":null},{\"name\":\"pindah\",\"dbName\":null}],\"dbName\":null},\"surat_cetak_jenis_surat\":{\"values\":[{\"name\":\"ktp\",\"dbName\":null},{\"name\":\"kk\",\"dbName\":null},{\"name\":\"skck\",\"dbName\":null},{\"name\":\"domisili\",\"dbName\":null},{\"name\":\"sktm\",\"dbName\":null},{\"name\":\"sku\",\"dbName\":null},{\"name\":\"belum_kawin\",\"dbName\":null},{\"name\":\"ubah_data\",\"dbName\":null},{\"name\":\"rame\",\"dbName\":null},{\"name\":\"kuasa\",\"dbName\":null},{\"name\":\"pernyataan\",\"dbName\":null},{\"name\":\"suami_istri\",\"dbName\":null},{\"name\":\"n1n4\",\"dbName\":null},{\"name\":\"n2\",\"dbName\":null},{\"name\":\"n6\",\"dbName\":null},{\"name\":\"wali_hakim\",\"dbName\":null},{\"name\":\"pindah_kawin\",\"dbName\":null},{\"name\":\"ket_wali\",\"dbName\":null},{\"name\":\"pengantar\",\"dbName\":null},{\"name\":\"bantuan_pasien\",\"dbName\":null},{\"name\":\"silsilah\",\"dbName\":null},{\"name\":\"ortu_wali\",\"dbName\":null},{\"name\":\"kades\",\"dbName\":null},{\"name\":\"upload\",\"dbName\":null},{\"name\":\"dinsos_sktm\",\"dbName\":null},{\"name\":\"spp\",\"dbName\":null}],\"dbName\":null},\"dapat_program_bpjs\":{\"values\":[{\"name\":\"ya\",\"dbName\":null},{\"name\":\"tidak\",\"dbName\":null}],\"dbName\":null},\"lahir_jk\":{\"values\":[{\"name\":\"LAKI_LAKI\",\"dbName\":\"1\"},{\"name\":\"PEREMPUAN\",\"dbName\":\"2\"}],\"dbName\":null},\"pindah_alasan\":{\"values\":[{\"name\":\"one\",\"dbName\":\"1\"},{\"name\":\"two\",\"dbName\":\"2\"},{\"name\":\"three\",\"dbName\":\"3\"},{\"name\":\"four\",\"dbName\":\"4\"},{\"name\":\"five\",\"dbName\":\"5\"},{\"name\":\"six\",\"dbName\":\"6\"},{\"name\":\"seven\",\"dbName\":\"7\"}],\"dbName\":null},\"pindahdatang_alasan\":{\"values\":[{\"name\":\"one\",\"dbName\":\"1\"},{\"name\":\"two\",\"dbName\":\"2\"},{\"name\":\"three\",\"dbName\":\"3\"},{\"name\":\"four\",\"dbName\":\"4\"},{\"name\":\"five\",\"dbName\":\"5\"},{\"name\":\"six\",\"dbName\":\"6\"},{\"name\":\"seven\",\"dbName\":\"7\"}],\"dbName\":null},\"users_role\":{\"values\":[{\"name\":\"admin\",\"dbName\":null},{\"name\":\"kecamatan\",\"dbName\":null},{\"name\":\"desa\",\"dbName\":null},{\"name\":\"guest\",\"dbName\":null},{\"name\":\"kabupaten\",\"dbName\":null},{\"name\":\"provinsi\",\"dbName\":null},{\"name\":\"warga\",\"dbName\":null},{\"name\":\"kades\",\"dbName\":null},{\"name\":\"sekdes\",\"dbName\":null},{\"name\":\"agen\",\"dbName\":null},{\"name\":\"validasi_sia\",\"dbName\":null},{\"name\":\"capil\",\"dbName\":null},{\"name\":\"dinsos\",\"dbName\":null},{\"name\":\"bidan\",\"dbName\":null},{\"name\":\"pelayanan\",\"dbName\":null},{\"name\":\"kadus\",\"dbName\":null},{\"name\":\"keuangan\",\"dbName\":null},{\"name\":\"linmas\",\"dbName\":null},{\"name\":\"keuangan_kec\",\"dbName\":null},{\"name\":\"keuangan_kab\",\"dbName\":null},{\"name\":\"camat\",\"dbName\":null}],\"dbName\":null},\"users_copy1_role\":{\"values\":[{\"name\":\"admin\",\"dbName\":null},{\"name\":\"kecamatan\",\"dbName\":null},{\"name\":\"desa\",\"dbName\":null},{\"name\":\"guest\",\"dbName\":null},{\"name\":\"kabupaten\",\"dbName\":null},{\"name\":\"provinsi\",\"dbName\":null},{\"name\":\"warga\",\"dbName\":null}],\"dbName\":null},\"users_copy2_role\":{\"values\":[{\"name\":\"admin\",\"dbName\":null},{\"name\":\"kecamatan\",\"dbName\":null},{\"name\":\"desa\",\"dbName\":null},{\"name\":\"guest\",\"dbName\":null},{\"name\":\"kabupaten\",\"dbName\":null},{\"name\":\"provinsi\",\"dbName\":null},{\"name\":\"warga\",\"dbName\":null}],\"dbName\":null},\"pengajuan_status\":{\"values\":[{\"name\":\"zero\",\"dbName\":\"0\"},{\"name\":\"one\",\"dbName\":\"1\"},{\"name\":\"two\",\"dbName\":\"2\"},{\"name\":\"three\",\"dbName\":\"3\"},{\"name\":\"four\",\"dbName\":\"4\"},{\"name\":\"five\",\"dbName\":\"5\"},{\"name\":\"six\",\"dbName\":\"6\"},{\"name\":\"seven\",\"dbName\":\"7\"},{\"name\":\"eight\",\"dbName\":\"8\"},{\"name\":\"nine\",\"dbName\":\"9\"},{\"name\":\"ten\",\"dbName\":\"10\"},{\"name\":\"eleven\",\"dbName\":\"11\"},{\"name\":\"twelve\",\"dbName\":\"12\"}],\"dbName\":null},\"dapat_program_status\":{\"values\":[{\"name\":\"one\",\"dbName\":\"1\"},{\"name\":\"zero\",\"dbName\":\"0\"}],\"dbName\":null},\"dapat_program_jamkesmas\":{\"values\":[{\"name\":\"ya\",\"dbName\":null},{\"name\":\"tidak\",\"dbName\":null}],\"dbName\":null},\"pindah_jenis\":{\"values\":[{\"name\":\"one\",\"dbName\":\"1\"},{\"name\":\"two\",\"dbName\":\"2\"},{\"name\":\"three\",\"dbName\":\"3\"},{\"name\":\"four\",\"dbName\":\"4\"}],\"dbName\":null},\"pindahdatang_jenis\":{\"values\":[{\"name\":\"one\",\"dbName\":\"1\"},{\"name\":\"two\",\"dbName\":\"2\"},{\"name\":\"three\",\"dbName\":\"3\"},{\"name\":\"four\",\"dbName\":\"4\"}],\"dbName\":null},\"pindah_skt\":{\"values\":[{\"name\":\"one\",\"dbName\":\"1\"},{\"name\":\"two\",\"dbName\":\"2\"},{\"name\":\"three\",\"dbName\":\"3\"}],\"dbName\":null},\"pindahdatang_skt\":{\"values\":[{\"name\":\"one\",\"dbName\":\"1\"},{\"name\":\"two\",\"dbName\":\"2\"},{\"name\":\"three\",\"dbName\":\"3\"}],\"dbName\":null},\"pindah_skp\":{\"values\":[{\"name\":\"one\",\"dbName\":\"1\"},{\"name\":\"two\",\"dbName\":\"2\"},{\"name\":\"three\",\"dbName\":\"3\"}],\"dbName\":null},\"pindahdatang_skp\":{\"values\":[{\"name\":\"one\",\"dbName\":\"1\"},{\"name\":\"two\",\"dbName\":\"2\"},{\"name\":\"three\",\"dbName\":\"3\"}],\"dbName\":null},\"penduduk_akte_lahir\":{\"values\":[{\"name\":\"Ada\",\"dbName\":null},{\"name\":\"Tidak\",\"dbName\":null}],\"dbName\":null},\"penduduk_kk_temp_akte_lahir\":{\"values\":[{\"name\":\"Ada\",\"dbName\":null},{\"name\":\"Tidak\",\"dbName\":null}],\"dbName\":null},\"penduduk_mutasi\":{\"values\":[{\"name\":\"Datang\",\"dbName\":null},{\"name\":\"Lahir\",\"dbName\":null},{\"name\":\"Mati\",\"dbName\":null},{\"name\":\"Pindah\",\"dbName\":null}],\"dbName\":null},\"penduduk_kk_temp_mutasi\":{\"values\":[{\"name\":\"Datang\",\"dbName\":null},{\"name\":\"Lahir\",\"dbName\":null},{\"name\":\"Mati\",\"dbName\":null},{\"name\":\"Pindah\",\"dbName\":null}],\"dbName\":null},\"pindahdatang_statuspin\":{\"values\":[{\"name\":\"one\",\"dbName\":\"1\"},{\"name\":\"two\",\"dbName\":\"2\"},{\"name\":\"EMPTY_ENUM_VALUE\",\"dbName\":\"\"}],\"dbName\":null},\"pindahdatang_jper\":{\"values\":[{\"name\":\"one\",\"dbName\":\"1\"},{\"name\":\"two\",\"dbName\":\"2\"},{\"name\":\"three\",\"dbName\":\"3\"},{\"name\":\"EMPTY_ENUM_VALUE\",\"dbName\":\"\"}],\"dbName\":null},\"pindahdatang_klaskep\":{\"values\":[{\"name\":\"one\",\"dbName\":\"1\"},{\"name\":\"two\",\"dbName\":\"2\"},{\"name\":\"three\",\"dbName\":\"3\"},{\"name\":\"four\",\"dbName\":\"4\"},{\"name\":\"five\",\"dbName\":\"5\"},{\"name\":\"six\",\"dbName\":\"6\"}],\"dbName\":null},\"pindahdatang_tipesps\":{\"values\":[{\"name\":\"one\",\"dbName\":\"1\"},{\"name\":\"two\",\"dbName\":\"2\"},{\"name\":\"three\",\"dbName\":\"3\"},{\"name\":\"four\",\"dbName\":\"4\"},{\"name\":\"five\",\"dbName\":\"5\"}],\"dbName\":null},\"penduduk_krama\":{\"values\":[{\"name\":\"one\",\"dbName\":\"1\"},{\"name\":\"two\",\"dbName\":\"2\"}],\"dbName\":null},\"penduduk_kk_temp_krama\":{\"values\":[{\"name\":\"one\",\"dbName\":\"1\"},{\"name\":\"two\",\"dbName\":\"2\"}],\"dbName\":null}},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.engineWasm = undefined


const { warnEnvConflicts } = require('./runtime/library.js')

warnEnvConflicts({
    rootEnvPath: config.relativeEnvPaths.rootEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.rootEnvPath),
    schemaEnvPath: config.relativeEnvPaths.schemaEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.schemaEnvPath)
})

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

// file annotations for bundling tools to include these files
path.join(__dirname, "libquery_engine-darwin-arm64.dylib.node");
path.join(process.cwd(), "prisma/client/sistem-desa/libquery_engine-darwin-arm64.dylib.node")
// file annotations for bundling tools to include these files
path.join(__dirname, "schema.prisma");
path.join(process.cwd(), "prisma/client/sistem-desa/schema.prisma")
