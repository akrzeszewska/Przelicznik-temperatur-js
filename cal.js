function submitFunction() {
    if (type_degrees === "Celcjusza") {
    var celsius_degrees=Number(document.getElementById("value_degrees").value);
    document.getElementById("value_degrees").innerHTML=celsius_degrees;
    var fahrenheit_degrees=value_degrees+32;
    var kelvin_degrees=value_degrees+273.15;}


   else if (type_degrees === "Fahrenheita"){
    var celsius_degrees=value_degrees-17.7777778;
    var fahrenheit_degrees=parseInt(document.getElementById("value_degrees").value);
    var kelvin_degrees=value_degrees+255.372222;}


   else if (type_degrees === "Kelvina"){
    var celsius_degrees=value_degrees-273.15;
    var fahrenheit_degrees=value_degrees-459.67;
    var kelvin_degrees=parseInt(document.getElementById("value_degrees").value);
   }



    //var celsius_degrees=parseInt(document.getElementById("celsius_degrees").value);
    //var kelvin_degrees=celsius_degrees+273.15;
    //document.getElementById("kelvin_degrees").innerHTML=kelvin_degrees;
}



