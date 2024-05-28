import "./Section.css";
import Button from "../Button";
import arrow from "../assets/arrow.png";

const Section = ({ title, subTitle, description, imageSrc, btnText, aboutTitle, appSubTitle }) => {
  return (
    <div className="homeSection">
      <div className="textSection">
        <div className="textSectionTitle">{title()}</div>
        {subTitle && <div className="textSectionSubTitle">{subTitle}</div>}
        <div className="aboutTitle">{aboutTitle}</div>
        <div className="appSubTitle">{appSubTitle}</div>
        <div className="textSectionDescription">{description}</div>
        <Button>{btnText}<img src={arrow} alt="arrow" style={{height:"16px"}}/></Button>
      </div>
      <div className="imageContainer">
        <img src={imageSrc} alt="Logo" className="imageSection" />
      </div>
    </div>
  );
};
export default Section;
