console.log("Skripta izpildes sākums:\n" + new Date());
document.getElementById("manual_count").innerHTML = "1<br>2<br>3<br>4<br>"; 

let text = ""; 

for (let i = 1; i < 11; i++){
    if (i % 2 == 0) {
    text = text + i + " ir pāra skaitlis<br>"; 
}

    else
    text = text + i + " ir nepāra skaitlis<br>"; 
    }



document.getElementById("auto_count").innerHTML = text; 


<<< parāda skaitļus no 1 līdz 10 un vai ir pāra/nepāra skaitlis>>> 


