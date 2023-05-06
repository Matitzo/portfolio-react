import React from "react";
import TagCloud from "TagCloud";
//import { StyledCanvas } from "../styles/Canvas.styled";
import "../styles/canvas.css";

export default function Canvas() {
  React.useEffect(() => {
    return () => {
      const container = ".tagcloud";
      const texts = [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "NodeJS",
        "jQuery",
        "TypeScript",
        "Git",
        "GitHub",
        "Leaflet",
        "MySql",
        "Python",
        "Pandas",
        "Numpy",
      ];

      const options = {
        radius: 200,
        maxSpeed: "normal",
        initSpeed: "normal",
        keep: true,
      };

      TagCloud(container, texts, options);
    };
  }, []);

  return (
    <div className="text-shpere">
      {/* span tag className must be "tagcloud"  */}
      <span className="tagcloud"></span>
    </div>
  );
}
