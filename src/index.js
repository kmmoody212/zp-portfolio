import "./style.css";
import {loadPortfolio} from "./pages/portfolio";
// import { loadSkills } from "./pages/skills";
import TagCloud from "TagCloud";

const container = '.tagcloud';

const texts = [
    'PR', 'example1', 'example2', 'example3',
]

const options = {
    radius: 140,
    maxSpeed: 'fast',
    initSpeed: 'normal',
    direction: 135,
    keep: true,
}

// window.addEventListener('DOMContentLoaded', () => {
//   // You can pass a selector string or the actual element
//   const instance = TagCloud('#sphere', texts, options);
// });

  // example: click handler via event delegation
  document.querySelector('#sphere').addEventListener('click', (e) => {
    if (e.target?.classList.contains('tagcloud--item')) {
      console.log('clicked:', e.target.textContent);
    }
  });

loadPortfolio();
// loadSkills();

TagCloud(container, texts, options);
