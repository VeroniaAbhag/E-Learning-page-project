import "./App.css";

const App = ({ Icon, appName }) => {
  return (
    <button className="appButton">
      <img src={ Icon } alt="Icon" className="appIcon" />
      <div className="appButtonText">
      Download on the
      <span className="appName">{appName}</span>
      </div>
    </button>
  );
};
export default App;
