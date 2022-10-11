function submitFunction() {
  
    var celsius_degrees=parseInt(document.getElementById("celsius_degrees").value);
    var fahrenheit_degrees=celsius_degrees+32;
    document.getElementById("fahrenheit_degrees").innerHTML=fahrenheit_degrees;
    var celsius_degrees=parseInt(document.getElementById("celsius_degrees").value);
    var kelvin_degrees=celsius_degrees+273.15;
    document.getElementById("kelvin_degrees").innerHTML=kelvin_degrees;
 }
 