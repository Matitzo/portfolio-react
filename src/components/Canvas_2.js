import { TagCloud } from "react-tagcloud";
import "../styles/canvas_2.css";

const data = [
  { value: "JavaScript", count: 14 },
  { value: "React", count: 14 },
  { value: "TypeScript", count: 14 },
  { value: "NodeJS", count: 14 },
  { value: "Leaflet", count: 14 },
  { value: "HTML5", count: 14 },
  { value: "CSS3", count: 14 },
  { value: "Git", count: 14 },
  { value: "GitLab", count: 14 },
  { value: "GitKraken", count: 14 },
  { value: "MySQL", count: 14 },
  { value: "Python", count: 14 },
  { value: "Pandas", count: 14 },
  { value: "Numpy", count: 14 },
];

const customRenderer = (tag, size, color) => (
  <span
    key={tag.value}
    style={{
      animation: "blinker 3s linear infinite",
      animationDelay: `${Math.random() * 2}s`,
      border: `2px solid ${color}`,
      margin: "3px",
      padding: "3px",
      display: "inline-block",
    }}
  >
    {tag.value}
  </span>
);

export const SimpleCloud = () => (
  <TagCloud
    className="text-sphere"
    shuffle={false}
    minSize={12}
    maxSize={35}
    tags={data}
    disableRandomColor={true}
    renderer={customRenderer}
  />
);
