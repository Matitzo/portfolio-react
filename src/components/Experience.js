import SectionDevider from "./SectionDevider";
import ExperienceCard from "./ExperienceCard";
import {
  StyledExperienceContainerDiv,
  StyledExperienceWrapperDiv,
} from "../styles/Experience.styled";

const experience = [
  {
    icon: "js",
    title: "University of Warmia and Mazury in Olsztyn",
    subTitle: "Frontend Developer",
    descList: [
      "I was responsible for creating a map component using the leaflet library and other related functionalities.",
    ],
    technologies: ["JavaScript", "HTML", "CSS", "Leaflet", "jQuery"],
    data: "Jan'23 - Feb'23",
  },
];

const education = [
  {
    icon: "student",
    title: "Master of science: Geodesy & Cartography",
    subTitle: "University of Warmia and Mazury in Olsztyn",
    descList: [
      "Specialty: Geodesy and Geoinformatics Technologies.",
      `Master's thesis: "Creation of web-based advertisement services using interactive map and GIS algorithms. Case study of Tutor platform".`,
    ],
    technologies: [
      "React",
      "Leaflet",
      "Python",
      "C#",
      ".NET",
      "GitLab",
      "MySQL",
      "GIS Software",
    ],
    data: "Feb'22 - Jul'23",
  },
  {
    icon: "student",
    title: "Bachelor of Engineering: Geodesy & Cartography",
    subTitle: "University of Warmia and Mazury in Olsztyn",
    descList: [
      "Specialty: Remote Measurement Systems.",
      `Engineering thesis: "The use of artificial intelligence algorithms for data processing in the GIS environment".`,
    ],
    technologies: [
      "Python",
      "Deep Learning",
      "Machinge Learning",
      "MySQL",
      "GIS Software",
    ],
    data: "Oct'18 - Feb'22",
  },
];

export default function Experience() {
  return (
    <StyledExperienceContainerDiv>
      <SectionDevider number={"02"} text={"Experience"} />
      <StyledExperienceWrapperDiv>
        {experience.map((edu) => (
          <ExperienceCard
            icon={edu.icon}
            title={edu.title}
            subTitle={edu.subTitle}
            descList={edu.descList}
            technologies={edu.technologies}
            data={edu.data}
          />
        ))}
        <h3>Education</h3>
        {education.map((edu) => (
          <ExperienceCard
            icon={edu.icon}
            title={edu.title}
            subTitle={edu.subTitle}
            descList={edu.descList}
            technologies={edu.technologies}
            data={edu.data}
          />
        ))}
      </StyledExperienceWrapperDiv>
    </StyledExperienceContainerDiv>
  );
}
