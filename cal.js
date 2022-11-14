const cel = [];
const far = [];
const kel = [];
let id = 0;


function submitFunction() {
    const value=Number(document.getElementById("value_degrees").value);
    const type_degrees=document.getElementById("type_degrees").value;
    
    if (type_degrees == "Celsius") {
        document.getElementById("celsius_degrees").innerText = toFixed(value); //zwraca przeliczone wartości
        cel.unshift(value);                                           //zwraca pierwszą wartość tablicy
        document.getElementById("fahrenheit_degrees").innerText = toFixed(value+32);
        far.unshift(value+32);
        document.getElementById("kelvin_degrees").innerText = toFixed(value+273.15);
        kel.unshift(value+273.15);
    }
    if (type_degrees == "Fahrenheit") {
        document.getElementById("celsius_degrees").innerText = toFixed(value-17.7777778);
        cel.unshift(value-17.7777778);
        document.getElementById("fahrenheit_degrees").innerText = toFixed(value);
        far.unshift(value);
        document.getElementById("kelvin_degrees").innerText = toFixed(value+255.372222);
        kel.unshift(value+255.372222);
    }
    if (type_degrees == "Kelvin") {
        document.getElementById("celsius_degrees").innerText = toFixed(value-273.15);
        cel.unshift(value-273.15);
        document.getElementById("fahrenheit_degrees").innerText = toFixed(value-459.67);
        far.unshift(value-459.67);
        document.getElementById("kelvin_degrees").innerText = toFixed(value);
        kel.unshift(value);
    }  

    function toFixed(num){
        let after = num.toFixed(2);
        return after;
    }

    let historyParser = 'Stopnie Celcjusza: ' + toFixed(cel[0]) + ", Stopnie Farenheita: " + toFixed(far[0]) + ", Stopnie Kelwina: " + toFixed(kel[0])
    id++;
    document.getElementById("history").innerHTML += id + ") " + historyParser + "</br>";
   


}