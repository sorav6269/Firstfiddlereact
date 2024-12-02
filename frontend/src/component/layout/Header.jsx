import React from "react";

function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-md fixed-top">
        <div className="container-fluid">
          <a href="#" className="navbar-brand">
            <img src="image/nav1.png" className="weblogo" alt="" width="65px" />
            <img src="image/nav2.png" alt="no image" className="moblogo" />
          </a>
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
                <a
                  href="/"
                  className="nav-link"
                  style={{
                    fontWeight: "lighter",
                    fontSize: "15px",
                    marginRight: " 4px",
                  }}
                >
                  HOME
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="nav-link"
                  style={{
                    fontWeight: "lighter",
                    fontSize: "15px",
                    marginRight: " 4px",
                  }}
                >
                  ABOUT
                </a>
              </li>
              <li>
                <a
                  href="/brand"
                  className="nav-link"
                  style={{
                    fontWeight: "lighter",
                    fontSize: "15px",
                    marginRight: " 4px",
                  }}
                >
                  BRAND
                </a>
              </li>
              <li>
                <a
                  href="/ourteam"
                  className="nav-link"
                  style={{
                    fontWeight: "lighter",
                    fontSize: "15px",
                    marginRight: " 4px",
                  }}
                >
                  OUR TEAM
                </a>
              </li>
              <li>
                <a
                  href="/pressrelese"
                  className="nav-link"
                  style={{
                    fontWeight: "lighter",
                    fontSize: "15px",
                    marginRight: " 4px",
                  }}
                >
                  PRESS RELEASE
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="nav-link"
                  style={{
                    fontWeight: "lighter",
                    fontSize: "15px",
                    marginRight: " 4px",
                  }}
                >
                  CONTACT
                </a>
              </li>
              <li>
                <a
                  href="/carrier"
                  className="nav-link"
                  style={{
                    fontWeight: "lighter",
                    fontSize: "15px",
                    marginRight: " 4px",
                  }}
                >
                  CARRERS
                </a>
              </li>
              {/* <li>
                <a
                  href="careers.html"
                  className="nav-link"
                  style={{
                    fontWeight: "lighter",
                    fontSize: "15px",
                    marginRight: " 4px",
                  }}
                >
                  FRANCHISE
                </a>
              </li> */}
            </ul>
          </div>
        </div>
        {/* <!--container-fluid end--> */}
      </nav>
      {/* <!--nav end--> */}
    </>
  );
}

export default Header;
