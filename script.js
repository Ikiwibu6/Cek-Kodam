let input = document.getElementById("input");
let tombol = document.getElementById("tombol");
let hasil = document.getElementById("hasil");
let nama =document.getElementById("nama")

tombol.addEventListener("click", cekKhodam);

function cekKhodam() {
    nama.innerHTML  = input.value;
    let angkaRendam = Math.floor(Math.random() * namaKhodam.length);
    hasil.innerHTML = `${namaKhodam[angkaRendam]}`;
};

const namaKhodam = [
    "Ular",
    "Monyet",
    "Naga",
    "Kucing Emas",
    "Kecantikan",
    "Macan",
    "Harimau",
    "Elang",
    "Kuda",
    "Singa",
    "Burung Hantu",
    "Buaya",
    "Serigala",
    "Ayam Jantan",
    "Botol Yakult",
    "Tutup Botol",
    "Tikus Got",
    "Chetag Olab",
    "Dewa",
    "Tukang Es Cincau",
    "Dajjal",
    "Samsung",
    "Semut",
    "Kutu Rambut",
    "Supra Bapak",
    "Sapu",
    "Sapi",
    "Kosong",
    "Kerbau",
    "Cangcut",
    "Anjing Sakti",
    "Pocong",
    "Genderuwo",
    "Ambaruwo",
    "Kuntilanak Merah",
    "Tuyul",
    "Baygon",
    "Elang Putih",
    "Beat Mber",
    "Ultramen",
    "Iblis",
    "Jin",
    "Qorin",
    "Kasur"
];
