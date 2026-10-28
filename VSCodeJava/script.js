function getTimeKomputer() {
  return new Date();
}

function getTanggal(time) {
  return time.getDate();
}

function getHari(time) {
  const daftarHari = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
  return daftarHari[time.getDay()];
}

function getBulan(time) {
  const daftarBulan = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
  return daftarBulan[time.getMonth()];
}

function getTahun(time) {
  return time.getFullYear();
}

// --- OUTPUT ---

const time = getTimeKomputer();

document.writeln(time + "<br>");
document.writeln("Hari ini adalah tanggal : " + getTanggal(time) + "<br>");
document.writeln("Hari ini adalah hari : " + getHari(time) + "<br>");
document.writeln("Hari ini adalah bulan : " + getBulan(time) + "<br>");
document.writeln("Hari ini adalah tahun : " + getTahun(time) + "<br>");
