import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const skillList = [
 {
  skill: "HTML",
  level: "advanced",
  color: "red",
 },
 {
  skill: "CSS",
  level: "advanced",
  color: "blue",
 },
 {
  skill: "JavaScript",
  level: "intermediate",
  color: "yellow",
 },
 {
  skill: "React",
  level: "beginner",
  color: "#60DAFB",
 },
];

function App() {
 return (
  <div className="card">
   <Avatar src="schmedtmann.jpeg" />
   <div className="data">
    <Intro />
    <SkillList />
   </div>
  </div>
 );
}

function Avatar(props) {
 return <img className="avatar" src={props.src} alt="avatar" />;
}

function Intro() {
 return (
  <>
   <h1>Jonas Schmedtmann</h1>
   <p>
    Full-stack web developer and teacher at Udemy. When not coding or preparing
    a course, I like to play board games, to cook (and eat), or to just enjoy
    the Portugese sun at the beach.
   </p>
  </>
 );
}

function Skill({ skill, level, color }) {
 return (
  <div className="skill" style={{ backgroundColor: color }}>
   {skill}
   {level === "beginner" && "👶"}
   {level === "intermediate" && "👍"}
   {level === "advanced" && "💪"}
  </div>
 );
}

function SkillList() {
 return (
  <div className="skill-list">
   {skillList.map((skill) => {
    return <Skill key={skill.skill} {...skill}></Skill>;
   })}
  </div>
 );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
 <StrictMode>
  <App />
 </StrictMode>
);
