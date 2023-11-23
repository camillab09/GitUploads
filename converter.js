const input = document.querySelector("#input-num")
const unit = document.querySelector("#unitdropdown")
const resultTxt = document.querySelector("#result-txt")

const convert = () => {

let result;
switch(unit.value){
case "lbs2kg":
    result = `${input.value} lbs equals ${(input.value / 2.2).toFixed(2)} kg`
    break;
    case "kg2lbs":
    result = `${input.value} kg equals ${(input.value * 2.2).toFixed(2)} lbs`
    break;
    case "inc2cm":
    result = `${input.value} inches equals ${(input.value * 2.54).toFixed(2)} centimeters`
    break;
    case "cm2inc":
    result = `${input.value} centimeters equals ${(input.value / 2.54).toFixed(2)} inches`
    break;
    case "miles2km":
    result = `${input.value} miles equals ${(input.value * 1.6).toFixed(2)} kms`
    break;
    case "km2miles":
    result = `${input.value} kms equals ${(input.value / 1.6).toFixed(2)} miles`
    break;
    default: 
    result = "Error"
}
resultTxt.textContent = result 
}