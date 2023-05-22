var namaa = ["Zakaria Ahmada"];
var thnlahir = [2003];
var nohape = ["083826735849"];

function tampil() {
  var dataDiv = document.getElementById("date");
  var output = "";

  for (var i = 0; i < namaa.length; i++) {
    output += "<dd>";
    output += "<p>Nama: " + namaa[i] + "</p>";
    output += "<p>Tahun Lahir: " + thnlahir[i] + "</p>";
    output += "<p>No. HP: " + nohape[i] + "</p>";
  }
  dataDiv.innerHTML = output;
}
function tambah() {
  var nama = prompt("Nama Mahasiswa : ");
  var tahunlahir = parseInt(prompt("Tahun Lahir : "));
  var nohp = prompt("No.Handphone Mhs : ");

  namaa.push(nama);
  thnlahir.push(tahunlahir);
  nohape.push(nohp);
  tampil();
}
function hapuss() {
  var index = parseInt(prompt("Masukkan index yang ingin anda hapus (0 - " + (namaa.length - 1) + "):"));

  if (index >= 0 && index < namaa.length) {
    namaa.splice(index, 1);
    thnlahir.splice(index, 1);
    nohape.splice(index, 1);
    tampil();
  } else {
    alert("undefined");
  }
}
