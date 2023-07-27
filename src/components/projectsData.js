export const projects = [
  {
    img: require("../images/smart-edukacja.png"),
    title: "SmartEdukacja.pl",
    description:
      "SmartEdukacja is my biggest project so far. It is a portal that allows you to post tutoring ads and allows you to view and browse them using a map. It allows you to create an account, create new ads, delete and edit existing ones, and of course to filter them. For the site, I also created a database using MySQL and backend using Node.js and Express. I am still working on the site improving the code and adding new features. (Ads can take a while to load because I use a free plan to host my api, which is automatically spun down after 15 minutes of inactivity.)",
    link: "https://matitzo.github.io/tutoring-on-map/",
    gitHubLink: "",
    technology: [
      "React.js",
      "JavaScript",
      "HTML",
      "CSS",
      "Git",
      "Rest API",
      "Node.js",
      "Express",
      "MySQL",
      "Leaflet",
      "TinyMCE",
    ],
  },
  {
    img: require("../images/unusual-places-in-the-world.png"),
    title: "Beautiful places in the world",
    description:
      "The site depicts unusual places on earth that most people are unaware of. It was created using React.js and Leaflet libraries.    A feature of the site is the ability to view the location of listed places using an interactive map. The map updates its own view as the article reader progresses.",
    link: "https://matitzo.github.io/Unusual-places-in-the-world/",
    gitHubLink: "https://github.com/Matitzo/Unusual-places-in-the-world",
    technology: ["React.js", "Leaflet", "Git"],
  },
  {
    img: require("../images/colorize2.png"),
    title: "Colorize",
    description:
      "A web application that allows users to browse and filter available paints and compare colors. It is also possible to send the current status of the page (results of filters or currently compared colors) to other users, who will receive the same status as the person sharing the link after opening it.",
    link: "https://matitzo.github.io/colorize/",
    gitHubLink: "https://github.com/Matitzo/colorize",
    technology: ["React.js", "TypeScript", "Git", "Rest API"],
  },
  {
    img: require("../images/weather-app.png"),
    title: "Weather App",
    description:
      "The app allows you to check the weather for a particular locality. It displays data on the current minimum and maximum temperature, the probability of precipitation and wind strength. The data is downloaded from the Forecast Api.",
    link: "https://weather-app-f5bcd.web.app",
    gitHubLink: "https://github.com/Matitzo/Weather-App",
    technology: ["Angular", "TypeScript", "Rest API"],
  },

  {
    img: require("../images/todos.png"),
    title: "To Do List",
    description: `Simple To Do List app using TypeScript. User is allowed to add and remove tasks. 
The app allows also mark tasks as completed and to provide a date by which the task must be complited. If a deadline
is reached, task is marked on another color. `,
    link: "https://matitzo.github.io/ToDoList/",
    gitHubLink: "https://github.com/Matitzo/ToDoList",
    technology: ["JavaScript", "TypeScript", "Git"],
  },
];
