import { countryFunc } from "./country";

async function getCountry() {
  let datas = await fetch("./data/country.json").then(datas => datas.json());
  console.log(datas)
}
async function displayData(countries) {
  const countrySection = document.getElementById("country");
  console.log(countrySection);
  countries.forEach((country) => {
    const countryModel = countryFunc(country);
    const countryCardDOM = countryModel.createCardDom();
    countrySection.append(countryCardDOM);

  });

}

async function init() {
  // Récupère les datas des photographes
  const countryElem = (await getCountry()).country;
  console.log(countryElem);
  displayData(countryElem);
}

init();
