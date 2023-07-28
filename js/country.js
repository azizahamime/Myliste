export function countryFunc(data) {
  const { name, image, description, stars } = data;

  const picture = `assets/images/${image}`;
  function createCardDom() {
    const article = document.createElement("article");
    const card = document.createElement("div");
    card.classList.add("card");
    card.setAttribute("style", `background-image:linear-gradient(0deg, rgba(116,19,5,0.3) 0%, rgba(216,216,216,0.4) 100%),url('${picture}')`);
    article.append(card);

    /**** l'entéte de la carte */
    const head = document.createElement("div");
    const locationIcon = document.createElement("img");
    const locationTitle = document.createElement("h2");
    head.classList.add("card-head");
    locationIcon.setAttribute("src", "./assets/icons/Location_icon.svg");
    locationIcon.setAttribute("alt", "Location_icon");
    locationTitle.innerText = `${name}`;
    head.append(locationIcon);
    head.append(locationTitle);
    card.append(head);
    /**** la description de la carte */
    const descriptionCard = document.createElement("div");
    descriptionCard.classList.add("description");
    descriptionCard.innerText = `${description}`;
    card.append(descriptionCard);
    /**** stars */
    const starsContainer = document.createElement("div");
    card.append(starsContainer);

    for (let i = 1; i <= 5; i++) {
      const star = document.createElement("img");

      star.setAttribute("alt", "star");
      starsContainer.append(star);
      if (i <= `${stars}`) {
        star.setAttribute("src", "assets/icons/star.svg");
      } else {
        star.setAttribute("src", "assets/icons/emptyStar.svg");
      }
    }
    return (article);
  }
  return { createCardDom };
}