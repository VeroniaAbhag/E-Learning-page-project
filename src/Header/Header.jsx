import "./Header.css";
import logo from "../assets/logo.png";
import Button from "../Button";
import { useState } from "react";
import language from "../assets/language.png";
import searchIcon from "../assets/searchIcon.png";

const Header = () => {
  const pages = [
    { name: "Home", route: "/home" },
    { name: "About us", route: "/about-us" },
    { name: "Courses", route: "/courses" },
    { name: "Instructors", route: "/instructors" },
  ];

  const [selectedPage, setSelectedPage] = useState(0);
  const [selectedValue, setSelectedValue] = useState("English");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
  return (
    <div className="header">
      <div className="pages">
        <img src={logo} alt="Logo" />
        <div className="list-group">
          {pages.map((page, index) => (
            <div
              className={selectedPage === index ? "selected-page" : "page"}
              onClick={() => setSelectedPage(index)}
            >
              {page.name}
            </div>
          ))}
        </div>
      </div>

      <div className="control">
        <div className="languageSelector">
          <img
            src={language}
            alt="language"
            style={{ objectFit: "contain", width: "16px" }}
          />
          <select
            value={selectedValue}
            onChange={handleChange}
            className="selectElement"
          >
            <option value="English" selected={selectedValue !== "English"}>
              English
            </option>
            <option value="Arabic" selected={selectedValue !== "Arabic"}>
              Arabic
            </option>
          </select>
        </div>
        <div className="searchInput">
          <img
            className="searchIcon"
            alt="searchIcon"
            src={searchIcon}
            style={{ objectFit: "contain", width: "20px", margin: "12px" }}
          />
          <input type="text" placeholder="Search" className="searchElement" />
        </div>
        <Button height="35px">Login / Sign up</Button>
      </div>
    </div>
  );
};

export default Header;
