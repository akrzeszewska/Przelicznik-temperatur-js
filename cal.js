function dodaj(){
    var celsius_degrees=parseInt(document.getElementById("celsius_degrees").value);
    
    var fahrenheit_degrees=celsius_degrees+32;
    document.getElementById("fahrenheit_degrees").innerHTML=fahrenheit_degrees;
 }
 