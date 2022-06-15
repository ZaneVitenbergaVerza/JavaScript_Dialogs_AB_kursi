## 10.nodarbības pieraksti  

Masīvi  

Definē masīva elementu kā konstanti 
Masīva elementa izgūšana ar mainīgā palīdzību  

const cars = ["Saab", "Volvo", "BMW"];  
undefined  
var i = 0; 
undefined
cars[0]; 
'Saab'
cars[i]; 
'Saab'
++i;
1  

Masīvā norādītie lielumi atmiņā ir izmitināti secībā
Elementu indeksācija js sākas ar nulto  

Masīva būtību nevar mainīt, bet viena interesējoša elementa vērtību var  

Tukšs masīvs ar []; var pielikt klāt vērtības  
const cars = []; 
undefined
cars; 
[]
cars[0] = "Saab"; 
'Saab'
cars[1] = "Volvo"; 
'Volvo'
cars; 
(2) ['Saab', 'Volvo']

Pievienojot vērtības, tās pievieno secībā, bet var izlaist pozīcijas un atstāt tukšas  
cars[10] = "Opel"; 
'Opel'
cars; 
(11) ['Saab', 'Volvo', empty × 8, 'Opel']  


