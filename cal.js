function submitFunction() {
  
    var celsius_degrees=parseInt(document.getElementById("celsius_degrees").value);
    var fahrenheit_degrees=celsius_degrees+32;
    document.getElementById("fahrenheit_degrees").innerHTML=fahrenheit_degrees;
    var celsius_degrees=parseInt(document.getElementById("celsius_degrees").value);
    var kelvin_degrees=celsius_degrees+273.15;
    document.getElementById("kelvin_degrees").innerHTML=kelvin_degrees;
 }

 function suma()
 {
    const type_degrees = true;
    if (type_degrees) {
        if (type_degrees === "Celcjusza")
            var a = document.getElementById("value_degrees").value;
            var b = document.getElementById("b").value;
             a = parseFloat(a);
             b = 0;
             alert(a + b);
        if (type_degrees === "Fafrenheita")
            var a = document.getElementById("value_degrees").value;
            var b = document.getElementById("b").value;
            a = parseFloat(a);
            b = 32;
            alert(a + b);
        if (type_degrees === "Kelvina")
            var a = document.getElementById("value_degrees").value;
            var b = document.getElementById("b").value;
            a = parseFloat(a);
            b = 273.15;
            alert(a + b);
 } }


