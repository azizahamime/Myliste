import { countryFunc } from "./country.js";

async function getCountry() {
  let datas = await fetch("./data/country.json").then(datas => datas.json());
  return (datas)
}

function displayData(countries) {
  const countrySection = document.getElementById("country");
  console.log("hello")

  countries.forEach((country) => {
    const countryModel = countryFunc(country);
    const countryCardDOM = countryModel.createCardDom();
    countrySection.append(countryCardDOM);
    console.log(countryModel)


  });


}

async function init() {
  // Récupère les datas des photographes
  const countryElem = (await getCountry()).country;
  console.log(countryElem);
  displayData(countryElem);
}

init();

