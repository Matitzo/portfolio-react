import React from "react";
import TagCloud from "TagCloud";
//import { StyledCanvas } from "../styles/Canvas.styled";
import "../styles/canvas.css";

const TextShpere = () => {
  React.useEffect(() => {
    return () => {
      const container = ".tagcloud";
      const texts = [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "NodeJS",
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
};

export default TextShpere;
