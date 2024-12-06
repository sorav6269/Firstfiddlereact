import React from "react";
import {Link} from "react-router-dom"
function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-md fixed-top">
        <div className="container-fluid">
          <Link to={"/"} className="navbar-brand">
            <img src="image/nav1.png" className="weblogo" alt="" width="65px" />
            <img src="image/nav2.png" alt="no image" className="moblogo" />
          </Link>

          <button
            className="navbar-toggler "
            data-bs-target="#pn"
            data-bs-toggle="collapse"
          >
            <span className="navbar-toggler-icon "></span>
          </button>
          <div className="navbar-collapse collapse " id="pn">
            <ul className="navbar-nav ms-auto text-center">
              <li>
                <Link
                  to={"/"}
                  className="nav-link"
                  style={{
                    fontWeight: "lighter",
                    fontSize: "15px",
                    marginRight: " 4px",
                  }}
                >
                  HOME
                </Link>
              </li>
              <li>
                <Link
                  to={"/about"}
                  className="nav-link"
                  style={{
                    fontWeight: "lighter",
                    fontSize: "15px",
                    marginRight: " 4px",
                  }}
                >
                  ABOUT
                </Link>
              </li>
              <li>
                <Link
                  to={"/brand"}
                  className="nav-link"
                  style={{
                    fontWeight: "lighter",
                    fontSize: "15px",
                    marginRight: " 4px",
                  }}
                >
                  BRAND
                </Link>
              </li>
              <li>
                <Link
                  to={"/ourteam"}
                  className="nav-link"
                  style={{
                    fontWeight: "lighter",
                    fontSize: "15px",
                    marginRight: " 4px",
                  }}
                >
                  OUR TEAM
                </Link>
              </li>
              <li>
                <Link
                  to={"/pressrelese"}
                  className="nav-link"
                  style={{
                    fontWeight: "lighter",
                    fontSize: "15px",
                    marginRight: " 4px",
                  }}
                >
                  PRESS RELEASE
                </Link>
              </li>
              <li>
                <Link
                  to={"/contact"}
                  className="nav-link"
                  style={{
                    fontWeight: "lighter",
                    fontSize: "15px",
                    marginRight: " 4px",
                  }}
                >
                  CONTACT
                </Link>
              </li>
              <li>
                <Link
                  to={"/carrier"}
                  className="nav-link"
                  style={{
                    fontWeight: "lighter",
                    fontSize: "15px",
                    marginRight: " 4px",
                  }}
                >
                  CARRERS
                </Link>
              </li>
              <li>
                <Link
                  to={"#"}
                  className="nav-link"
                  style={{
                    fontWeight: "lighter",
                    fontSize: "15px",
                    marginRight: " 4px",
                  }}
                >
                  FRANCHISE
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {/* <!--container-fluid end--> */}
      </nav>
    </>
  );
}

export default Header;
