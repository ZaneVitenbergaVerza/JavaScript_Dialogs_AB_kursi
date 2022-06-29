console.log("Skripta izpildes sākums:\n" + new Date());
document.getElementById("manual_count").innerHTML = "1<br>2<br>3<br>4<br>"; 

let text = ""; 

for (let i = 1; i < 11; i++){
    if (i % 2 == 0) {
    text = text + i + " ir pāra skaitlis<br>"; 
}

    else (i % 2 == 1) 
    text = text + i + " ir nepāra skaitlis<br>"; 
    }



document.getElementById("auto_count").innerHTML = text;

/* 
text += cars[0] + "<br>"; 
text = text + cars[0] + "<br>"; 
*/