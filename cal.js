
 //function add(value_degrees,b)
 //{ 
 // b=32
  //var result = value_degrees + b;
  //return result;
//}

//var wartosc = add(10, 20);
//document.write("Wynikiem jest " + wartosc + ".");

function submitFunction() {
    if (type_degrees === "Celcjusza") {
    var celsius_degrees=parseInt(document.getElementById("value_degrees").value);
    var fahrenheit_degrees=value_degrees+32;
    var kelvin_degrees=value_degrees+273.15;}
  // document.getElementById("value_degrees").innerHTML=celsius_degrees;
   if (type_degrees === "Fahrenheita"){
    var celsius_degrees=value_degrees-17.7777778;
    var fahrenheit_degrees=parseInt(document.getElementById("value_degrees").value);
    var kelvin_degrees=value_degrees+255.372222;}
   if (type_degrees === "Kelvina"){
    var celsius_degrees=value_degrees-273.15;
    var fahrenheit_degrees=value_degrees-459.67;
    var kelvin_degrees=parseInt(document.getElementById("value_degrees").value);
   }

    //var celsius_degrees=parseInt(document.getElementById("celsius_degrees").value);
    //var kelvin_degrees=celsius_degrees+273.15;
    //document.getElementById("kelvin_degrees").innerHTML=kelvin_degrees;
}

    //const type_degrees = true;
    //if (type_degrees) {
       // if (type_degrees === "Celcjusza")
         //   var a = document.getElementById("value_degrees").value;
           // var b = document.getElementById("b").value;
             //a = parseFloat(a);
             //b = 0;
             //alert(a + b);
    
 //} 


