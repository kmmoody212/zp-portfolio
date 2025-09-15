import "./style.css";
import {loadPortfolio} from "./pages/portfolio";
import { renderTagcloud } from "./pages/skills";
import { loadSkills } from "./pages/skills";
import "@fortawesome/fontawesome-free/css/all.min.css";




loadPortfolio();
loadSkills();
renderTagcloud();


   
