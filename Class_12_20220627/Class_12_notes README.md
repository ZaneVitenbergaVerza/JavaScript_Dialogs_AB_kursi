x = 10; 
swith(x) { 
    case 9:  
    console.log("X ir precīzi 9"); 
    break; 
    case 10: 
    console.log("X ir precīzi 10"); 
    break;
    case 11: 
    console.log("X ir precīzi 11"); 
    break;
    default: 
    console.log("neviens no pieteiktajiem stāvokļiem nav bijis"); 
}



switch(x) {
    case 9: 
    console.log("x ir precīzi 9"); 
    case 10: 
    console.log("vai nu x ir precīzi 10 vai x ir bijis ienāds ar 9"); 
    case 11: 
    console.log("vai nu x ir precīzi 11 vai x ir bijis vienāds ar 10"); 
    default:
    console.log("default gadījums"); 
}