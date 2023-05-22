function tampil() {
  var nim = document.getElementById("Nim").value;
  var nama = document.getElementById("username").value;
  var matkul = document.getElementById("mak").value;
  var nilai = document.getElementById("nilai").value;
  var grade;
  var indeks;
  if (nilai >= 85 && nilai <= 100) {
    grade = "A";
    indeks = "4.00";
  } else if (nilai >= 79 && nilai <= 84) {
    grade = "A-";
    indeks = "3.67";
  } else if (nilai >= 74 && nilai <= 78) {
    grade = "B+";
    indeks = "3.33";
  } else if (nilai >= 69 && nilai <= 73) {
    grade = "B";
    indeks = "3.00";
  } else if (nilai >= 64 && nilai <= 68) {
    grade = "B-";
    indeks = "2.67";
  } else if (nilai >= 59 && nilai <= 63) {
    grade = "C+";
    indeks = "2.33";
  } else if (nilai >= 54 && nilai <= 58) {
    grade = "C";
    indeks = "2.00";
  } else if (nilai >= 41 && nilai <= 53) {
    grade = "D";
    indeks = "1.00";
  } else if (nilai >= 0 && nilai <= 40) {
    grade = "E";
    indeks = "0.00";
  } else {
    grade = "Diluar Nurul";
  }

  document.getElementById("nimmhs").innerText = nim;
  document.getElementById("namamhs").innerText = nama;
  document.getElementById("matkulmhs").innerText = matkul;
  document.getElementById("nilaimhs").innerText = nilai;
  document.getElementById("grademhs").innerText = grade;
  document.getElementById("indeksmhs").innerText = indeks;

  document.getElementById("output").style.display = "block";
}
function resetf() {
  document.getElementById("data").reset();
  document.getElementById("nimmhs").innerText = "";
  document.getElementById("namamhs").innerText = "";
  document.getElementById("matkulmhs").innerText = "";
  document.getElementById("nilaimhs").innerText = "";
  document.getElementById("grademhs").innerText = "";
}