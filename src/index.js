import "./style.css";
import {loadPortfolio} from "./pages/portfolio";
import { renderTagcloud } from "./pages/skills";
import { loadSkills } from "./pages/skills";



loadPortfolio();
loadSkills();
renderTagcloud();