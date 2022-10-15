function submitFunction() {
    var value=Number(document.getElementById("value_degrees").value);
    var type_degrees=document.getElementById("type_degrees").value;
    
    if (type_degrees == "Celsius") {
        document.getElementById("celsius_degrees").innerText = value;
        document.getElementById("fahrenheit_degrees").innerText = value+32;
        document.getElementById("kelvin_degrees").innerText = value+273.15;
    }
    if (type_degrees == "Fahrenheit") {
        document.getElementById("celsius_degrees").innerText = value-17.7777778;
        document.getElementById("fahrenheit_degrees").innerText = value;
        document.getElementById("kelvin_degrees").innerText = value+255.372222;
    }
    if (type_degrees == "Kelvin") {
        document.getElementById("celsius_degrees").innerText = value-273.15;
        document.getElementById("fahrenheit_degrees").innerText = value-459.67;
        document.getElementById("kelvin_degrees").innerText = value;
    }  
}