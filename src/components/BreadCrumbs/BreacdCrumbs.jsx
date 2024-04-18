import { Link, useLocation } from "react-router-dom";
import "./BreadCrumbs.css";

const BreacdCrumbs = () => {
  const location = useLocation();
  const currentLink = [];
  const crumbs = location.pathname.split("/").filter((crumb) => crumb !== "");
  if (
    crumbs.length === 3 &&
    (crumbs[1] === "view" || crumbs[1] === "vacation")
  ) {
    crumbs[2] = "cottage";
  }
  const result = crumbs.map((crumb, i, arr) => {
    currentLink.push(`/${crumb}`);
    return (
      <div className="crumb" key={i}>
        <Link to={currentLink.join("")}>{crumb}</Link>
      </div>
    );
  });
  return <div className="breadcrumbs"> {result} </div>;
};

export default BreacdCrumbs;
