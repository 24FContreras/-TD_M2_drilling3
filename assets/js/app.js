const bigTemp = document.querySelector("#bigTemp");
const smallTemps = document.querySelectorAll(".small-temp");

function toggleTemps() {
  function celsiusToFahrenheit(celsius) {
    return celsius * 1.8 + 32;
  }

  function fahrenheitToCelsius(fahr) {
    return (fahr - 32) * 0.5556;
  }

  if (unitToggler.checked) {
    console.log("toggle to F°!");
    bigTemp.textContent = parseFloat(
      celsiusToFahrenheit(Number(bigTemp.textContent))
    ).toFixed(1);

    smallTemps.forEach((temp) => {
      temp.textContent = parseFloat(
        celsiusToFahrenheit(Number(temp.textContent))
      ).toFixed(1);
    });
  } else {
    console.log("toggle to C°!");
    bigTemp.textContent = parseInt(
      fahrenheitToCelsius(Number(bigTemp.textContent))
    );

    smallTemps.forEach((temp) => {
      temp.textContent = parseInt(
        fahrenheitToCelsius(Number(temp.textContent))
      );
    });
  }
}
