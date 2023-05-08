// Program Toko Sembako Randi Manufa Pandra UAS PEMROGRAMAN 1
// Inputan data
const namaToko = 'Toko Hape Jaya Motor';
const namaa = prompt('Masukkan nama anda');
namaBarang = prompt('Pilih Kode Barang:\n01. ipong\n02. Samsol\n03. Redmidi\n04. Opo\n05.Xiaomey');
jumlahBeli = prompt('Masukkan Jumlah Pembelian:\n[Ket: 1-10]');
kodemember = prompt('Apakah Anda member?\n1.yes\n2.no')


let discount = "10%";
// penggabungan antara kode jenis barang dan kode nama barang

//konversi kode barang penginputan sekaligus menjadi proses menggunakan fungsi pemilihan (IF/SWITCH)

namaBarang;
let harga, kodeNama;
if (namaBarang == '01') {
namaBarang = 'Ipon';
harga = 15000000;
} else if (namaBarang == '02') {
namaBarang = 'Samsol';
harga = 10000000;
} else if (namaBarang == '03') {
namaBarang = 'Redmi';
harga = 8000000;
} else if (namaBarang == '04') {
namaBarang = 'Oppo';
harga = 7000000;
} else if (namaBarang == '05') {
namaBarang = 'Xiaomi';
harga = 6000000;
}   else {
namaBarang = 'Kode barang tidak terdaftar';
harga = 0;
}
// Total harga
var totalHarga = harga * jumlahBeli;
// Penentuan Diskon

if (kodemember == '1') {
    var diskon = totalHarga - (totalHarga*0.1);
} else if (kodemember == '2') {
    diskon = totalHarga
}


// Menampilkan data nilai Toko Sembako
document.write('======================'+ namaToko +'=========================='+"<BR>");
document.write('Nama : ' + namaa+"<br>");
document.write('Nama Barang : ' + namaBarang+"<br>");

document.write('Harga Satuan : ' + harga+ "<br>");
document.write('Jumlah Pembelian : ' + jumlahBeli +"<br>");
document.write('Total Harga : ' + totalHarga+"<br>");
if (kodemember == '1') {
    document.write('Diskon : Anda mendapatkan diskon 10%'+"<br>")
} else if (kodemember == '2') {
    document.write('Diskon : Anda Tidak Dapat Diskon'+"<br>")
}{
    
}
document.write('Total Pembayaran : ' + diskon+"<br>");
document.write('======================Terima Kasih Bro========================='+"<BR>");
