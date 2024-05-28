import Section from "../Section";
import "./Body.css";
import learn from "../assets/learn.png";
import about from "../assets/about.png";
import app from "../assets/app.png";
import slider from "../assets/e-learning.png";
import Card from "../Card";
import cardImg from "../assets/card-img.png";
import instructorImg from "../assets/Instructor.png";
import previous from "../assets/previous.png";
import next from "../assets/next.png";
import "../Section/Section.css";
import blueArrow from "../assets/blueIcon.png";
import Instructor from "../Instructor/Instructor";
import instructorImage from "../assets/Instructor-image.png";

const Body = () => {
  return (
    <div className="body">
      <Section
        subTitle={"Learn anywhere, finish courses and pass tests!"}
        title={() => (
          <span>
            Learn faster, with{" "}
            <span className="textSectionTitleHighlight">ED max</span>!
          </span>
        )}
        description={`It is a long established fact that a reader will be distracted by the
      readable content of a page when looking at its layout. The point of
      using Lorem Ipsum is that it has a more-or-less normal distribution of
      letters, as opposed to using`}
        btnText={`Discover more`}
        imageSrc={learn}
      />
      <div className="sliderSection">
        <div className="sliderSectionContent">
          <div>
            <div style={{ height: "85px" }}></div>
            <button className="sliderArrows">
              <div>
                <img src={previous} alt="previous" />
              </div>
            </button>
          </div>
          <div className="slider">
            <div className="sliderTitle">New at ED max</div>
            <img src={slider} alt="Logo" className="sliderImage" />
          </div>
          <div>
            <div style={{ height: "85px" }}></div>
            <button className="sliderArrows">
              <div>
                <img src={next} alt="previous" />
              </div>
            </button>
          </div>
        </div>
      </div>
      <Section
        title={() => (
          <span>
            {/* Learn faster, with{" "}
            <span className="textSectionTitleHighlight">ED max</span>! */}
          </span>
        )}
        aboutTitle={`Who are we`}
        description={`EDmax is an app that simply solves all the difficulties that faces the educational system specially in Egypt. It is not only an app that provides e-learning services but further beyond this. It is not onl y an e-learning app but it is a system over 2 (website and application) platforms each one serves one of the educational system participants .`}
        btnText={`Learn more`}
        imageSrc={about}
      />
      <div className="cardSectionTitle">
        <div className="aboutTitle">Available courses</div>
        <button className="seeMoreButton">
          See More
          <img src={blueArrow} alt="arrow" style={{ width: "16px" }} />
        </button>
      </div>
      <div className="cardsSection">
        <Card
          cardImg={cardImg}
          courseDetails={`3rd year, faculty of commerce`}
          courseDep={`Business Management`}
          courseName={`Global marketing`}
          coursePrice={`500 LE`}
          courseDescription={`It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum`}
          courseChapters={`10 chapters`}
          courseInstructor={`Mohammed Salem`}
          courseInstructorImg={instructorImg}
        />
        <Card
          cardImg={cardImg}
          courseDetails={`3rd year, faculty of commerce`}
          courseDep={`Business Management`}
          courseName={`Global marketing`}
          coursePrice={`500 LE`}
          courseDescription={`It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum`}
          courseChapters={`10 chapters`}
          courseInstructor={`Mohammed Salem`}
          courseInstructorImg={instructorImg}
        />
        <Card
          cardImg={cardImg}
          courseDetails={`3rd year, faculty of commerce`}
          courseDep={`Business Management`}
          courseName={`Global marketing`}
          coursePrice={`500 LE`}
          courseDescription={`It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum`}
          courseChapters={`10 chapters`}
          courseInstructor={`Mohammed Salem`}
          courseInstructorImg={instructorImg}
        />
      </div>
      <Section
        title={() => (
          <span>
            {/* Learn faster, with{" "}
            <span className="textSectionTitleHighlight">ED max</span>! */}
          </span>
        )}
        aboutTitle={`Want an easier access?`}
        appSubTitle={`Download our app`}
        description={`EDmax is an app that simply solves all the difficulties  that faces the educational system specially in Egypt. It is not only an app that provides e-learning services  but further beyond this.
        It is not onl
        y an e-learning app but it is a system over 
        2 (website and application) platforms each one serves one of the educational system participants .
        `}
        btnText={`Learn more`}
        imageSrc={app}
      />
      <div className="cardSectionTitle">
        <div className="aboutTitle">Our Instructors</div>
        <button className="seeMoreButton">
          See More
          <img src={blueArrow} alt="arrow" style={{ width: "16px" }} />
        </button>
      </div>
      <div className="instructorCardSection">
        <Instructor
          instructorImage={instructorImage}
          instructorName={`Mohammed Salem`}
          instructorTitle={`Category: Marketing`}
          Courses={`50`}
          Students={`120`}
          Views={`120`}
          Centers={`120`}
        />
        <Instructor
          instructorImage={instructorImage}
          instructorName={`Mohammed Salem`}
          instructorTitle={`Category: Marketing`}
          Courses={`50`}
          Students={`120`}
          Views={`120`}
          Centers={`120`}
        />
        <Instructor
          instructorImage={instructorImage}
          instructorName={`Mohammed Salem`}
          instructorTitle={`Category: Marketing`}
          Courses={`50`}
          Students={`120`}
          Views={`120`}
          Centers={`120`}
        />
      </div>
    </div>
  );
};

export default Body;
