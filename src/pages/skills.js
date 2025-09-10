import "./skills.css";
// import { createSkillCard } from "../modules/skill-card.js";
import TagCloud from "TagCloud";

const section = document.getElementById("skills-blurb"); // div with id "skills"

export function loadSkills() {
    const heading = document.createElement("h2"); // heading for skills list
    const skillList = document.createElement("ul"); // list for blurb
    const listHeader = document.createElement("h3"); // header for list
    const item1 = document.createElement("li");
    const title1 = document.createElement("h3");
    const item2 = document.createElement("li");
    const title2 = document.createElement("h3");
    const item3 = document.createElement("li");
    const title3 = document.createElement("h3");


    heading.classList.add("skills-heading"); // class for h2
    heading.textContent = "SKILLS"; // text for h2
    section.appendChild(heading); // append h2 to skills container

    skillList.classList.add("skills-ul"); // class for ul
    listHeader.classList.add("list-heading"); // heading for ul
    listHeader.textContent = "My main focus of skills is grouped into three categories:";
    skillList.appendChild(listHeader); // appending heading to ul

    // Adding class="skill" to all line items
    item1.classList.add("skill");
    item2.classList.add("skill");
    item3.classList.add("skill");
    // text content for each line item
    item1.textContent = "Overall strategy for social media campaigns and Go To Markets, analytics, and long term planning";
    item2.textContent = "Developing useful feedback cycles, reporting and analysis, social community building such as on Discord";
    item3.textContent = "Expert in capturing, editing, asset creation, video, livestreaming and more";
    // append list items to ul
    skillList.appendChild(item1);
    skillList.appendChild(item2);
    skillList.appendChild(item3);
    // text content for headers in each list item
    title1.textContent = "Campaign Strategy";
    title2.textContent = "Community Management & Feedback";
    title3.textContent = "Tactic Execution";
    // append headers to each item
    item1.appendChild(title1);
    item2.appendChild(title2);
    item3.appendChild(title3);
    // append skill list to skills-blurb container
    section.appendChild(skillList);
    
    // const allSkills = [
    //     {title: "Community Building", desc: "Creating strong cohesive communities that are positive and useful in and out of game"},
    //     {title: "Feedback Integration", desc: "Making sure player feedback is consolidated and tracked, with followup back to the community"},
    //     {title: "Reporting & Analysis", desc: "With a background in communication studies, quantitative and qualitative analysis is a breeze"},
    //     {title: "Campaign Building", desc: "Social Media campaigns that not only drive objectives but are memorable to the players"},
    //     {title: "Asset Creation", desc: "Photoshop, Premiere, After Effects, Blender, Unreal - you name it I love it"},
    //     {title: "Crisis & Public Relations", desc:"Deep understanding of crisis communication and public relations strategy"}
    // ];

    // const makeCards = allSkills.map(skill => createSkillCard(skill.title, skill.desc));
    // container.append(...makeCards);

}



export function renderTagcloud() {

const container = '.tagcloud';

const texts = [
    'PR', 'Asset Creation', 'Crisis Comm',
    'Campaign Strategy', 'Go To Market', 'Reporting',
    'Analytics', 'Community Management',
    'Social Media', 'Adobe Premiere', 'Blender',
    'Unreal Engine', 'Feedback Process', 'Channel Strategy',
]

const options = {
    radius: 250,
    maxSpeed: 'normal',
    initSpeed: 'slow',
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


return TagCloud(container, texts, options);
}