import appointment from "../../assets/appoint.png";
import readme from "../../assets/read.png";
import aut from "../../assets/aut.png";
import mess from "../../assets/message.png";
import map from "../../assets/map.png";
import b1 from "../../assets/b1.jpg";
import githubLogo from "../../assets/outline.png";
import linkLogo from "../../assets/external-link.png";
const EachProject = ({ id }) => {
  const photos = [appointment, readme, aut, mess, map];
  const titles = [
    "This Appointment",
    "Read-me Hire-me",
    "Authenticator",
    "Message App",
    "Choropleth Map",
  ];
  const info = [
    "An event details optimisation app that allows organiser to find the best time and location for every attendee. Google Routes API used to get train journey details of every attendee for each possible event destination. We created an algorithm to analyse each possible event details and showed them to user in the frontend. We are currently working on version 2 where we will include attendees as users and let them input their own details and see their own journeys on their mobile phone while traveling.",
    "Autogenerated portfolio app that helps CodeYourFuture graduates showcase their information without spending their time on portfolio apps. This app helps them to keep their focus on their own personal growth while getting noticed by mentors and recruiters. We calculated grads activities on Github and gave them a score that will help mentors and recruiters to understand how actively they are working on their skills. JWT authentication and Role-based authorization implemented to maintain different user roles.",
    "Authentication API that allows developers to maintain their user credentials and authentication & authorization jobs. I have created this api to use it on my other projects. App works with an api key also gained from the app and allows users (other apps) to create, authenticate, authorize, update and delete their own users. Api documentation will be added soon.",
    "A Meesage app that uses web sockets for real-time communication while using http requests to send / receive messages. Web socket and http requests wrapped into each other. When a user send a message to API, it triggers web socket for other users that will let them to request new message updates.",
    "As part of a medical research project at Manchester University, I contributed to the creation of choropleth maps to visualize the population distribution of optometrists across the UK. I started by processing postcode data from a CSV document, which I stored in a database. Using the Postcodes.io API, I converted postcodes into detailed address objects, extracting information at the country, region, county, and local district levels. I then aggregated the data at these geographical levels, calculating the population distribution for each area. The results were mapped to visualize population density across various administrative regions. To ensure accurate and up-to-date mapping, I utilized National Statistics maps and QGIS software for data encoding and visualization.",
  ];
  const keys = [
    ["JS", "React", "Node.js", "Express.js", "Psql", "Docker", "CI/CD", "Google Routes API"],
    ["JS", "React", "Node.js", "Express.js", "Psql", "Github Rest API"],
    ["JS", "Node.js", "Express.js", "Psql", "JWT"],
    ["JS", "React", "Node.js", "Express.js", "WebSocket"],
    ["JS", "Node.js", "Express.js", "Rest APIs", "PostgreSQL", "QGIS"],
  ];
  const githubLinks = [
    "https://github.com/bkarimii/AppOintment-project",
    "https://github.com/RbAvci/Read-me-Hire-me",
    "https://github.com/fikretellek/authenticator",
    "https://github.com/fikretellek/Module-Servers/tree/chat-server/chat-server",
  ];
  const websiteLinks = [false, false, false, "https://fe-chat-react-app.netlify.app/"];
  const backgrounds = [b1];
  return (
    <>
      <div className={"project-container " + (id % 2 == 1 ? "reversed-flex-direction" : "")}>
        <div id={"project-" + id} className="top-margin-for-header"></div>
        <div style={{ backgroundImage: backgrounds[id - 1] }} className="project-image-container">
          <div className="background-img-elm" id={"b" + id}>
            .
          </div>
          {photos[id - 1] && <img src={photos[id - 1]} alt="" />}
        </div>
        <div className="project-info-container">
          {titles[id - 1] && <h2 className="project-title">{titles[id - 1]}</h2>}
          {info[id - 1] && <p className="project-info">{info[id - 1]}</p>}
          <div className="project-tags-container">
            {keys[id - 1] && keys[id - 1].map((key) => <p className="project-tag">{key}</p>)}
          </div>
          <div className="project-link-logo-container">
            {githubLinks[id - 1] && (
              <a href={githubLinks[id - 1]} target="_blank">
                <img className="project-link-logo" src={githubLogo} alt="" />
              </a>
            )}
            {websiteLinks[id - 1] ? (
              <a href={websiteLinks[id - 1]}>
                <img className="project-link-logo" src={linkLogo} alt="" />
              </a>
            ) : websiteLinks[id - 1] === false ? (
              <a className="not-implemented">
                <img className="project-link-logo" src={linkLogo} alt="" />
              </a>
            ) : (
              <a className="not-published">
                <img className="project-link-logo" src={linkLogo} alt="" />
              </a>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default EachProject;