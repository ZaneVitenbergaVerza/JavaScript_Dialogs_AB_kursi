console.log("Skripta izpildes sākums:\n" + new Date());
document.getElementById("manual_count").innerHTML = "1<br>2<br>3<br>4<br>"; 

let text = ""; 

for (let i = 1; i < 11; i++){
    if (i % 2 == 0) {
    text = text + i + "<br>" + " ir pāra skaitlis"; 
}

    else (i % 2 == 1) 
    text = text + i + "<br>" + " ir nepāra skaitlis"; 
    }



document.getElementById("auto_count").innerHTML = text;

/* 
text += cars[0] + "<br>"; 
text = text + cars[0] + "<br>"; 
*/