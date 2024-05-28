import Button from "../Button";
import "./Card.css";
import { useState } from "react";
import cardVideo from "../assets/card-video.mp4";
const Card = ({
  cardImg,
  courseDetails,
  courseDep,
  courseName,
  coursePrice,
  courseDescription,
  courseChapters,
  courseInstructor,
  courseInstructorImg,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className="Card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="CardUpperSection">
        {isHovered ? (
          <video className="cardImg" autoPlay loop muted>
            <source src={cardVideo} type="video/mp4" />
          </video>
        ) : (
          <img src={cardImg} alt="img" className="cardImg" />
        )}
        <div className="courseInfo">
          <div className="courseInfoText">{courseDetails}</div>
          <div className="courseInfoText">{courseDep}</div>
        </div>
      </div>

      <div className="coursePrice">
        <div className="coursePriceText">{courseName}</div>
        <div className="coursePriceText">{coursePrice}</div>
      </div>
      <div className="CardLowerSection">
        <div className="courseDescription">{courseDescription}</div>
        <div className="courseInfo">
          <div className="courseDetailsText">{courseChapters}</div>
          <div className="instructor">
            <div className="courseInstructorDetails">{courseInstructor}</div>
            <img
              src={courseInstructorImg}
              alt="img"
              className="courseInstructorImg"
            />
          </div>
        </div>
        <div className="cardButtons">
          <Button width={200}>Add to cart</Button>
          <button className="cardButton">View details</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
