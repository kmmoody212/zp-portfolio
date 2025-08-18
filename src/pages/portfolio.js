import "./portfolio.css";
import { createGameCard } from "../modules/card";
import { default as xdefiant } from "../../assets/game-imgs/xd.jpg";
import { default as rainbowsix } from "../../assets/game-imgs/rain6s.png";
import { default as thinsilence } from "../../assets/game-imgs/tts.png";
import { default as farcry } from "../../assets/game-imgs/fc5.jpg";
import { default as steep } from "../../assets/game-imgs/steep.jpg";
import { default as hyperscape } from "../../assets/game-imgs/hs.jpg";

export function loadPortfolio(){
    const section = document.getElementById("portfolio");
    const container = document.createElement("div");
    const heading = document.createElement("h2");

    
    heading.classList.add("portfolio-title");
    heading.textContent = "GAMES I'VE WORKED ON";
    section.appendChild(heading);
    
    container.classList.add("games-container");
    section.appendChild(container);

    const games = [
    { img: xdefiant, desc: "was once a great game" },
    { img: rainbowsix, desc: "also a cool game" },
    { img: thinsilence, desc: "an old indie game" },
    { img: farcry, desc: "everyone knows farcry" },
    { img: steep, desc: "snowboarding is fun" },
    { img: hyperscape, desc: "looks really cool" }
    ];

    const cards = games.map(game => createGameCard(game.img, game.desc));
    container.append(...cards);

}