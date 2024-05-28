import "./Button.css";

const Button = ({ lineHeight = "27px",width="fit-content", children }) => {
  return (
    <button
      className="button"
      style={{
        lineHeight,
        width
      }}
    >
      {children}
    </button>
  );
};
export default Button;
