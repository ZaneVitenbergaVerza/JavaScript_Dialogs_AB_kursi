// +, -, *, /, %  
// ||, &&, !  
// |, &, ~  
// >, <, >=, <=, ++, != 
// <<, >>
// salīdzināšanas operācijas == - vai ir vienāds, != - vai nav vienāds  
// Boolean - no jebkuras bitu kombinācijas izvada true vai false  
// Number - izvada skaitli  
// >> - nobīde pa labi jeb palielina jeb bitiem  
//    >> 1 jeb par vienu pa labi samazinām jeb dalīts ar divi; >> 2 jeb dalīts ar četri  
// << - nobīde pa kreisi jab palielina  



/*
2 -> 0000 001(0)  
4 -> 0000 010(0)  

3 -> 0000 001(1)  
11 -> 0000 101(1) 

x & 0 -> 0000 0000  
x & 1 -> 0000 000(x)  
(x % 2) == 1

*/


console.log(456||0);  
document.getElementById("demo").innerHTML = 456 || 0; 

/*
function myFunction() {
    document.getElementById("demo").innerHTML = "Paragraph changed.";
    } 
*/