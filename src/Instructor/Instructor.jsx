import Button from "../Button";
import "./Instructor.css";
import Icon1 from "../assets/icon1.png";
import Icon2 from "../assets/icon2.png";
import Icon3 from "../assets/icon3.png";
import Icon4 from "../assets/icon4.png";

const Instructor = ({
  instructorImage,
  instructorName,
  instructorTitle,
  Courses,
  Students,
  Views,
  Centers,
}) => {
  return (
    <div className="instructorCard">
      <img
        src={instructorImage}
        alt="instructorImage"
        className="instructorImage"
      />
      <div>
      <div className="instructorName">{instructorName}</div>
      <div className="instructorTitle">{instructorTitle}</div>
      </div>
      <hr className="cardDivider"></hr>
      <div className="instructorIcons">
        <div>
          <img src={Icon1} alt="instructorIcon" className="instructorIcon" />
          <div className="iconDescription">
            Courses
            <span className="iconDescriptionHighLight">{Courses}</span>
          </div>
        </div>

        <div>
          <img src={Icon2} alt="instructorIcon" className="instructorIcon" />
          <div className="iconDescription">
            Students
            <span className="iconDescriptionHighLight">{Students}</span>
          </div>
        </div>
        <div>
          <img src={Icon3} alt="instructorIcon" className="instructorIcon" />
          <div className="iconDescription">
            Views
            <span className="iconDescriptionHighLight">{Views}</span>
          </div>
        </div>
        <div>
          <img src={Icon4} alt="instructorIcon" className="instructorIcon" />
          <div className="iconDescription">
            Centers
            <span className="iconDescriptionHighLight">{Centers}</span>
          </div>
        </div>
      </div>
      <Button width={250}>See more</Button>
    </div>
  );
};

export default Instructor;
