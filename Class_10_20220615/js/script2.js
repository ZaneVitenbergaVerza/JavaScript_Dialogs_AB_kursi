var x = 100;
document.getElementById("dec").innerHTML = x;
var secība = "";
var nultais_bits = (x >> 0) & 1;
console.log(nultais_bits);
secība = nultais_bits + secība;
console.log(nultais_bits);
nultais_bits = (x >> 1) & 1;
secība = nultais_bits + secība;
console.log(nultais_bits);
nultais_bits = (x >> 2) & 1;
secība = nultais_bits + secība;
console.log(nultais_bits);
nultais_bits = (x >> 3) & 1;
secība = nultais_bits + secība;
console.log(nultais_bits);
nultais_bits = (x >> 4) & 1;
secība = nultais_bits + secība;
console.log(nultais_bits);
nultais_bits = (x >> 5) & 1;
secība = nultais_bits + secība;
console.log(nultais_bits);
nultais_bits = (x >> 6) & 1;
secība = nultais_bits + secība;
console.log(nultais_bits);
nultais_bits = (x >> 7) & 1;
secība = nultais_bits + secība;
console.log(nultais_bits);

document.getElementById("bin").innerHTML = secība;

var r = 6371;
document.getElementById("radius").innerHTML = r;
var g = 40009.88;
document.getElementById("garums").innerHTML = g;

var vards_uzvards = "Jānis Bērziņš,";
var nauda = 15000;  

// papildu uzdevums Nr. 1 - attēlot summas ar divām zīmēm aiz komata (punkts; 6.00 Eur)  
// palabot algoritmu - ja procentu izmaksa notiek vienu reizi termiņa beigās  

var pelna_1 = (nauda * 0.0001) * 1;
var pelna_2 = (nauda * 0.0002) * 2;
var pelna_3 = (nauda * 0.0003) * 3;
var pelna_4 = (nauda * 0.0004) * 4;
var pelna_5 = (nauda * 0.0005) * 5;
document.getElementById("client").innerHTML = vards_uzvards;
document.getElementById("money").innerHTML = nauda;
document.getElementById("procenti_1").innerHTML = pelna_1;
document.getElementById("procenti_2").innerHTML = pelna_2;
document.getElementById("procenti_3").innerHTML = pelna_3;
document.getElementById("procenti_4").innerHTML = pelna_4;
document.getElementById("procenti_5").innerHTML = pelna_5;