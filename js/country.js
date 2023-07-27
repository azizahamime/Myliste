export function countryFunc(data) {
  const { name, image, description, stars } = data;
  const picture = `assets/images/${image}`;
  function createCardDom() {
    const article = document.createElement("article");
    const card = document.createElement("div");
    card.classList.add("card");
    card.setAttribute("style", `background-image:url('${picture}')`);
    article.append(card);

    /**** l'entéte de la carte */
    const head = document.createElement("div");
    const locationIcon = document.createElement("img");
    const locationTitle = document.createElement("h2");
    head.classList.add("card-head");
    locationIcon.setAttribute("src", "assets/image/icons/Location_icon.svg");
    locationIcon.setAttribute("alt", "Location_icon");
    locationTitle.innerText = `${name}`;
    head.append(locationIcon);
    head.append(locationTitle);
    card.append(head);
    /**** la description de la carte */
    const descriptionCard = document.createElement("div");
    descriptionCard.innerText = `${description}`;
    card.append(descriptionCard);
    /**** stars */
    const starsContainer = document.createElement("div");
    card.append(starsContainer);

    for (i = 1; i <= 5; i++) {
      const star = document.createElement("img");
      star.setAttribute("src", "assets/image/icons/star.svg");
      star.setAttribute("alt", "star");
      starsContainer.append(star);
      star.classList.add("emptyStar");
      for (i = 1; i <= `${stars}`; i++) {
        star.classList.add("fullStar");
      }
    }
    return (article);
  }
  return (createCardDom)
}