import React from 'react'

function Ourteam() {
  return (
    <>
     <div className="container-fluid team w-100">
        <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6">
            <h1 className="text-center" style={{ paddingTop: "50%", color: "#fff", fontSize: "0.6in", fontFamily: "prague" }}>
                    MEET THE TEAM</h1>
            </div>
            <div className="col-md-3"></div>
        </div>
        {/* <!--row end--> */}
      </div>
      {/* <!--container-fluid end--> */}

    <div className="container">
        <div className="row">
            <div className="col-md-5 mt-4">
                      <img src="image/priyank-our team.jpg" alt="no-img" className="w-100" style={{ height: "13.49cm" }} />
            </div>
            <div className="col-md-6 ">
                <h2 className="mt-4">Priyank Sukhija</h2>
                <h6>C.E.O. &amp; M.D.</h6>
            <p className="team-pera" style={{ fontWeight: "450", fontSize: "16px", letterSpacing: "1px", lineHeight: "35px" }}>A 19-year-old
                    dropout kid, who was just setting up his first venture, envisioned what nobody thought
                    would make him a business tycoon in the hospitality industry. Once he began, there was no stopping
                    this entrepreneur from reaching the heights he has reached today. It is the passion and creative
                    streak of Priyank Sukhija that has made him the most watched-out restaurateur of today’s time.
                    Coming from a family of lawyers, he ventured into the business world on his own with Lazeez Affaire
                    in 1999 and has never looked back since.</p>

            <button className="btn btn-warning btn-lg  mb-4 "
              style={{ backgroundColor: "#ffc107", fontSize: "25px", color: "#fff" }}>Read More</button>
                <div className="row">
                    <div className="col-md-6 ">
                <a href="#"><i className="fa-brands fa-facebook" style={{ color: "orange", fontSize: "35px" }}></i></a>
                        <a href="#"><i className="fa-brands fa-twitter"
                               style={{ color: "orange", fontSize: "35px",marginLeft: "3px"}}></i></a>
                        <a href="#"><i className="fa-brands fa-instagram"
                                style={{ color: "orange", fontSize: "35px",marginLeft: "3px"}}></i></a>

                    </div>
                </div>
            </div>
        </div>
        {/* <!--row end--> */}
      </div>
      {/* <!--container end--> */}

    <div className="container mt-3 mb-2">
        <div className="row">
            <div className="col-md-4 mt-2 mb-2">
                <div className="card shadow-lg YPAshok">
              <h4 className="text-center text-white" style={{ paddingTop: "7cm" }}>Y. P. ASHOK</h4>
                    <p className="text-center text-white ">chairman</p>
                </div>
            </div>
            <div className="col-md-4 mt-2 mb-2">
                <div className="card shadow-lg BR">
                    <h4 className="text-center text-white" style={{ paddingTop: "7cm" }}>B.R. SACHDEVA</h4>
                    <p className="text-center text-white ">Director Finance & Legal</p>
                </div>
            </div>
            <div className="col-md-4 mt-2 mb-2">
                <div className="card shadow-lg sagar">
                    <h4 className="text-center text-white" style={{ paddingTop: "7cm" }}>SAGAR BAJAJ</h4>
                    <p className="text-center text-white ">Corporate Chef</p>
                </div>
            </div>
        </div>
        {/* <!--row--> */}
      </div>
      {/* <!--container end--> */}

    <div className="container mt-3 mb-2">
        <div className="row">
            <div className="col-md-4 mt-2 mb-2">
                <div className="card shadow-lg jay">
                    <h4 className="text-center text-white" style={{ paddingTop: "7cm" }}>JAY SHANKAR NATRAJ</h4>
                    <p className="text-center text-white ">Franchise Lead</p>
                </div>
            </div>
            <div className="col-md-4 mt-2 mb-2">
                <div className="card shadow-lg vi">
                    <h4 className="text-center text-white" style={{ paddingTop: "7cm" }}>VIBHUTI SOOD</h4>
                    <p className="text-center text-white ">PR And Communications Head</p>
                </div>
            </div>
        </div>
        {/* <!--row--> */}
      </div>
      {/* <!--container end--> */}



    </>
  )
}

export default Ourteam