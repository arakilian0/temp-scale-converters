// Kelvin to Fahrenheit
function kelvToFahr(kelvin){
    var fahr = (kelvin * (9/5) - 459.67);
    return fahr;
}

// Kelvin to Celsius
function kelvToCels(kelvin){
    var cels = (kelvin - 273.15);
    return cels;
}

// Fahrenheit to Kelvin
function fahrToKelv(fahrenheit){
    var kelv = (fahrenheit + 459.67) * 5/9;
    return kelv;
}

// Fahrenheit to Celsius
function fahrToCels(fahrenheit){
    var cels = (fahrenheit - 32) * 5/9;
    return cels;
}

// Celsius to Kelvin
function celsToKelv(celsius){
    var kelv = celsius + 273.15;
    return kelv;
}

// Celsius to Fahrenheit
function celsToFahr(celsius){
    var fahr = (9/5 * celsius) + 32;
    return fahr;
}
