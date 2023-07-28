export function countryFunc(data) {
  const { name, id, image, description, stars } = data;

  const picture = `assets/images/${image}`;
  function createCardDom() {
    const article = document.createElement("article");
    const card = document.createElement("div");
    card.classList.add("card");
    switch (id) {
      case 1:
        card.setAttribute("style", `background-image:linear-gradient(0deg, #402004 0%, rgba(216,216,216,0) 100%),url('${picture}')`);
        break;
      case 2:
        card.setAttribute("style", `background-image:linear-gradient(0deg, #741305 0%, rgba(216,216,216,0) 100%),url('${picture}')`);
        break;
      case 3:
        card.setAttribute("style", `background-image:linear-gradient(0deg, #4e3204 0%, rgba(216,216,216,0) 100%),url('${picture}')`);
        break;
      case 4:
        card.setAttribute("style", `background-image:linear-gradient(0deg, #368e8c 0%, rgba(216,216,216,0) 100%),url('${picture}')`);
        break;
    }

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
        star.setAttribute("src", "./assets/icons/star.svg");
      } else {
        star.setAttribute("src", "./assets/icons/emptyStar.svg");
      }
    }
    return (article);
  }
  return { createCardDom };
}