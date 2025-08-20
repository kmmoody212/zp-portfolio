import "./skills.css";
import { createSkillCard } from "../modules/skill-card.js";

export function loadSkills() {
    const section = document.getElementById("skills");
    const container = document.createElement("div");
    const heading = document.createElement("h2");

    heading.classList.add("skills-heading");
    heading.textContent = "SKILLS";
    section.appendChild(heading);

    container.classList.add("skills-container");
    section.appendChild(container);
    
    const allSkills = [
        {title: "Community Building", desc: "Creating strong cohesive communities that are positive and useful in and out of game"},
        {title: "Feedback Integration", desc: "Making sure player feedback is consolidated and tracked, with followup back to the community"},
        {title: "Reporting & Analysis", desc: "With a background in communication studies, quantitative and qualitative analysis is a breeze"},
        {title: "Campaign Building", desc: "Social Media campaigns that not only drive objectives but are memorable to the players"},
        {title: "Asset Creation", desc: "Photoshop, Premiere, After Effects, Blender, Unreal - you name it I love it"},
        {title: "Crisis & Public Relations", desc:"Deep understanding of crisis communication and public relations strategy"}
    ];

    const makeCards = allSkills.map(skill => createSkillCard(skill.title, skill.desc));
    container.append(...makeCards);

}