import "./Footer.css";
import FooterList from "../FooterList/FooterList";
import footerLogo from "../assets/footerLogo.png";
import App from "../App";
import apple from "../assets/apple.png";
import store from "../assets/play-store.png";

const Footer = () => {
  const homeList = [
    { name: "Who are we", route: "/who-are-we" },
    { name: "ED MAX News", route: "/ed-max-news" },
    { name: "Our instructors", route: "/our-instructors" },
    { name: "Download App", route: "/download-app" },
    { name: "Available courses", route: "/available-courses" },
  ];
  const aboutList = [
    { name: "History", route: "/history" },
    { name: "Vision", route: "/vision" },
    { name: "Mission", route: "/mission" },
    { name: "FAQs", route: "/faqs" },
  ];
  const courses = [
    { name: "Latest courses", route: "/latest-courses" },
    { name: "Marketing", route: "/marketing" },
    { name: "Management", route: "/management" },
    { name: "Computer", route: "/computer" },
  ];
  const instructors = [
    { name: "Top instructors", route: "/top-instructors" },
    { name: "Marketing", route: "/marketing" },
    { name: "Management", route: "/management" },
    { name: "Computer", route: "/computer" },
  ];
  const myAccount = [
    { name: "Login", route: "/login" },
    { name: "Sign up", route: "/sign-up" },
  ];
  const downloadApp = [
    { icon: apple, name: "App store", route: "/app-store" },
    { icon: store, name: "Play store", route: "/play-store" },
  ];
  return (
    <div className="footer">
      <div className="footerContent">
        <div className="footerLists">
          <div>
            <img src={footerLogo} alt="Logo" className="footerLogo" />
          </div>
          <FooterList title="Home">
            {homeList.map((listItem) => (
              <div>{listItem.name}</div>
            ))}
          </FooterList>
          <FooterList title="About us">
            {aboutList.map((listItem) => (
              <div>{listItem.name}</div>
            ))}
          </FooterList>
          <FooterList title="Courses">
            {courses.map((listItem) => (
              <div>{listItem.name}</div>
            ))}
          </FooterList>
          <FooterList title="Instructors">
            {instructors.map((listItem) => (
              <div>{listItem.name}</div>
            ))}
          </FooterList>
          <FooterList title="My account">
            {myAccount.map((listItem) => (
              <div>{listItem.name}</div>
            ))}
          </FooterList>
          <FooterList title="Download app">
            {downloadApp.map((listItem) => (
              <App Icon={listItem.icon} appName={listItem.name} />
            ))}
          </FooterList>
        </div>
        <div className="copyRight">
          <hr className="footerLine"></hr>
          <div className="copyRightContent">
            Created by innovation scope 2024. All rights reserved
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
