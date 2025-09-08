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
    { img: xdefiant, job: "Lead Community Developer", desc: "Developed the prelaunch, launch, and post launch campaigns and plans. Handled all Insider Sessions and feedback cycles with development team. Built Discord from start to  around 110k members." },
    { img: rainbowsix, job: "Senior Community Developer", desc: "Managed campaign and developed content plans for Siege X Launch and Y10 Season 3 Launch. Created content and assets for publication and served as approval for outgoing content." },
    { img: farcry, job: "Senior Community Developer", desc: "Created and published content during Far Cary 5 and New Dawn. Worked on content plans, campaigns, analytics, weekly internal feedback reports." },
    { img: hyperscape, job: "Community Manager", desc: "Interacted and built engagement with community. Created and executed day to day tactics and assets on social media. Led feedback integration with dev team leads." },
    { img: thinsilence, job: "Account Manager", desc: "Handled public relations, outgoing email communications plans, contact with PR/media, created assets for social media and steam Page." },
    { img: steep, job: "Community Manager", desc: "Led social media publication and asset development. Interacted day to day with community and led weekly feedback reports and analytics for the brand. Point person for handling player workshop for Rider's Republic and managing players to studio visit." }
    ];

    const cards = games.map(game => createGameCard(game.img, game.job, game.desc));
    container.append(...cards);

}