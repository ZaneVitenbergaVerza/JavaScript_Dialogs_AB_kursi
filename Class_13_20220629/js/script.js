console.log("Skripta izpildes sākums:\n" + new Date());
document.getElementById("manual_count").innerHTML = "1<br>2<br>3<br>4<br>"; 

let text = ""; 

for (let i = 1; i < 26; i++){
    if (i % 2 == 0) {
    text = text + i + " dalās ar 2 <br>"; 
} if (i % 3 == 0) { 
    text = text + i + " dalās ar 3 <br>"; 
} if (i % 5 == 0) { 
    text = text + i + " dalās ar 5 <br>"; 
} if (i % 7 == 0) { 
    text = text + i + " dalās ar 7 <br>"; 
} if (i % 2 == 0, i % 3 == 0) { 
    text = text + i + " dalās ar 2 un 3 <br>"; 
} 

}



document.getElementById("auto_count").innerHTML = text;

/* 
text += cars[0] + "<br>"; 
text = text + cars[0] + "<br>"; 
*/