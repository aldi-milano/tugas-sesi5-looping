//Soal no.1

for (let i = 1; i <= 100; i++) {
    document.write("User ke "+ i +"<br>");
}

//Soal no.2

for (let i = 0; i <= 20; i++) {
    if (i % 2 == 0) {
        document.write(i +"<br>");
    }
}

//Soal no.3

for (let i = 1; i <= 20; i++) {
    if (i % 2 == 0) {
        console.log(i, "Genap");
    } else {
        console.log(i, "Ganjil");
    }
}

//Soal no.4

let ulangi = confirm("Apakah anda mau mengulang?")
let counter = 0;

while(ulangi) {
    let jawab = confirm("Apakah anda mau mengulang?")
    counter++;
    if(jawab == false){
        ulangi = false;
    }
}

document.write("Perulangan sudah dilakukan sebanyak "+ counter +" kali")

//Soal no.5

let tanya = prompt("Sebutkan kepanjangan dari IB?")

while(tanya == "Impact Byte") {
    tanya = false;
    alert("Selamat jawaban kamu benar!")
}
