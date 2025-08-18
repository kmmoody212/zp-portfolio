
export function createGameCard(imgPath, text) {
    // each card is a div containing an image and text
    const card = document.createElement("div");
    card.classList.add("game-card");

    // create and append image element for each game
    const game = document.createElement("img");
    game.classList.add("game-img");
    game.src = imgPath;
    card.appendChild(game);

    // create overlay to gray out image slightly
    const overlay = document.createElement("div");
    overlay.classList.add("overlay");

    // description text
    const para = document.createElement("p");
    para.classList.add("game-desc");
    para.textContent = text;
    
    overlay.appendChild(para);
    card.appendChild(overlay);

    return card;
    
}

  

