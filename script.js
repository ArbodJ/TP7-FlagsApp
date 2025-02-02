const input = document.getElementById("inputSearch");
const inputRange = document.getElementById("inputRange");
const rangeValue = document.getElementById("rangeValue");
const btnSort = document.querySelectorAll(".btnSort");
const container = document.querySelector(".countries-container");
let country = [];
let sortCountries = "maxToMin";

async function url() {
  await fetch(`https://restcountries.com/v3.1/all`)
    .then((res) => res.json())
    .then((data) => (country = data));
  console.log(country);
  displayCard();
}

function displayCard() {
  container.innerHTML = country
    .filter((countries) =>
      countries.translations.fra.common.toLowerCase().includes(input.value)
    )
    .slice(0, inputRange.value)
    .sort((a, b) => {
      if (sortCountries === "maxToMin") {
        return b.population - a.population;
      } else if (sortCountries === "minToMax") {
        return a.population - b.population;
      } else if (sortCountries === "alpha") {
        return a.translations.fra.common.localeCompare(
          b.translations.fra.common
        );
      }
    })
    .map((countries) => {
      return `
  <div class="card">
  <img class="flag" src="${countries.flags.png}" alt="${countries.name.official}" />
  <h1>${countries.translations.fra.common}</h1>
  <p class="capital">${countries.capital}</p>
  <p class="pop">Population : ${countries.population}
  </div>
  `;
    })
    .join("");
}
// url();

window.addEventListener("load", url);
input.addEventListener("input", url);
inputRange.addEventListener("input", () => {
  displayCard();
  rangeValue.textContent = inputRange.value;
});
btnSort.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    sortCountries = e.target.id;
    displayCard();
  });
});
// 7 - Gérer les 3 boutons pour trier (méthode sort()) les pays
