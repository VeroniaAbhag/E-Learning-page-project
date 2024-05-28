import "./FooterList.css";

const FooterList = ({ children, title}) => {
  return (
    <ul className="footerList">
      <div className="footerListTitle">{title}</div>
      {children
        ? children.map((child) => (
            <li className="footerListContent">{child}</li>
          ))
        : undefined}
    </ul>
  );
};
export default FooterList;
