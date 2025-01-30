const container = document.querySelector(".countries-container");
let country = [];

async function url() {
  await fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => (country = data));
  console.log(country);
  displayCard();
}

function displayCard() {
  container.innerHTML = country
    .map((countries) => {
      return `
        <div class="card">
          <img class="flag" src="${countries.flags.png}" alt="${countries.name.official}" />
          <h1>${countries.name.common}</h1>
          <p class="capital">${countries.capital}</p>
          <p class="pop">Population : ${countries.population}
        </div>
    `;
    })
    .join("");
}
url();
// 3 - Passer les données à une variable

// 4 - Créer une fonction d'affichage, et paramétrer l'affichage des cartes de chaque pays grace à la méthode MAP

// 5 - Récupérer ce qui est tapé dans l'input et filtrer (avant le map) les données
// country.name.includes(inputSearch.value);

// 6 - Avec la méthode Slice gérer le nombre de pays affichés (inputRange.value)

// 7 - Gérer les 3 boutons pour trier (méthode sort()) les pays
