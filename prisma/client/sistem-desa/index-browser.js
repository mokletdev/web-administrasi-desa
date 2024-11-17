
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


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

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.NotFoundError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`NotFoundError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

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
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
