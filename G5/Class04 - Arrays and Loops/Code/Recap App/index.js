console.log("Connected");

// CREATE FEHRENHEIT TO CELCIUS CONVERTOR AND VISE VERSA

/**
 * Da pobaram od userot shto saka da konvertira, dali fehrenheit ili celcius //prompt
 * Ke validirame dali userot go vpisal tocniot input, ako ne bi ispisale nekojsi error message
 * Ako saka da convertirame fehrenheit, ke pobarame userot da vpise vrednost /prompt
 * -||- celcius, ke pobarame userot da vpise vrednost
 * vrednost ja konvertirame i ja vrakjame ( return )
 *
 */

function convertTemperature() {
  let temperatureToConvert = prompt(
    "Type F to convert fehrenheit, type C to convert Celcius"
  );

  let isFehrenheit = temperatureToConvert.toLocaleLowerCase() === "f";
  let isCelcius = temperatureToConvert.toLocaleLowerCase() === "c";

  //prettier-ignore
  // null.toLowerCase()
  if (temperatureToConvert === null) {
    alert("You have canceled the prompt :) come back later");
    //SO RETURN VIKAME IZLEZI OD FUNKCIJATA
    return
  }
  if (isFehrenheit || isCelcius) {
    if (isFehrenheit) {
      let fehrenheitInput = parseFloat(
        prompt("Enter fehrenheit to be converted")
      );
      //isNaN(fehrenheitInput) === false
      if (!isNaN(fehrenheitInput)) {
        let convertedToCelcius = (fehrenheitInput - 32) / 1.8;
        return convertedToCelcius;
      } else {
        alert("WRONG INPUT!!");
      }
    }
    // if(isCelcius)
    if (temperatureToConvert.toLocaleLowerCase() === "c") {
      let celciusInput = parseFloat(prompt("Enter celcius to be converted"));
      //prettier-ignore
      //   let fahrenheitToCelcius = (celciusInput * 1.8) + 32
      let fahrenheitToCelcius = celciusToFehrenheitConvertor(celciusInput);
      return fahrenheitToCelcius;
    }
  } else {
    alert("Wrong input");
  }
}
//prettier-ignore
let converted = convertTemperature();

console.log("Value is:", converted);

function celciusToFehrenheitConvertor(fehrenheitValue) {
  //prettier-ignore
  let convertedFehrenheit = (fehrenheitValue * 1.8) + 32
  return convertedFehrenheit;
}
