# Kelvin to Fahrenheit
def kelv_to_fahr(kelvin):
    fahr = (kelvin * (9/5) - 459.67)
    return (fahr)

# Kelvin to Celsius
def kelv_to_cels(kelvin):
    cels = (kelvin - 273.15)
    return (cels)

# Fahrenheit to Kelvin
def fahr_to_kelv(fahrenheit):
    kelv = (fahrenheit + 459.67) * 5/9
    return (kelv)

# Fahrenheit to Celsius
def fahr_to_cels(fahrenheit):
    cels = (fahrenheit - 32) * 5/9
    return (cels)

# Celsius to Kelvin
def cels_to_kelv(celsius):
    kelv = (celsius + 273.15)
    return (kelv)

# Celsius to Fahrenheit
def cels_to_fahr(celsius):
    fahr = (9/5 * celsius) + 32
return (fahr)
