const cel = [];
const far = [];
const kel = [];
var id = 0;


function submitFunction() {
    var value=Number(document.getElementById("value_degrees").value);
    var type_degrees=document.getElementById("type_degrees").value;
    
    if (type_degrees == "Celsius") {
        document.getElementById("celsius_degrees").innerText = value; //zwraca przeliczone wartości
        cel.unshift(value);                                           //zwraca pierwszą wartość tablicy
        document.getElementById("fahrenheit_degrees").innerText = value+32;
        far.unshift(value+32);
        document.getElementById("kelvin_degrees").innerText = value+273.15;
        kel.unshift(value+273.15);
    }
    if (type_degrees == "Fahrenheit") {
        document.getElementById("celsius_degrees").innerText = value-17.7777778;
        cel.unshift(value-17.7777778);
        document.getElementById("fahrenheit_degrees").innerText = value;
        far.unshift(value);
        document.getElementById("kelvin_degrees").innerText = value+255.372222;
        kel.unshift(value+255.372222);
    }
    if (type_degrees == "Kelvin") {
        document.getElementById("celsius_degrees").innerText = value-273.15;
        cel.unshift(value-273.15);
        document.getElementById("fahrenheit_degrees").innerText = value-459.67;
        far.unshift(value-459.67);
        document.getElementById("kelvin_degrees").innerText = value;
        kel.unshift(value);
    }  

    var historyParser = 'Stopnie Celcjusza: ' + cel[0] + ", Stopnie Farenheita: " + far[0] + ", Stopnie Kelwina: " + kel[0]
    id++;
    document.getElementById("history").innerHTML += id + ") " + historyParser + "</br>";
    // .toFixed(2);
    // var a = cel.toString();
    //var b = a.toFixed(2);



}