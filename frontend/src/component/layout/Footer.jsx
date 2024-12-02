import React from "react";

function Footer() {
  return (
    <>
      

 <div className="container-fluid">
                      <div className="row" style={{ backgroundColor: "#111215" }}>
            <div className="col-md-1"></div>
            <div className="col-md-3">
                          <img src="image/contact.png" alt="" style={{ width: "80%", marginTop: "2cm" }} />
            </div>
            <div className="col-md-1"></div>
            <div className="col-md-6">
                          <h1 className="text-light mt-4 contact-h"> <span style={{ color: "orange" }}>CONTACT</span>  <span>US</span></h1>
                          <p style={{ lineHeight: "30px", wordSpacing: "1px", fontSize: "18px", color: "aliceblue" }}>We're a team focusing
                        on redefining the way the hospitality industry works by bringing in concept based restaurants
                        across India. We are truly committed to catering to the ever-changing cosmopolitan taste of the
                        customer and revolutioning the F & B industry!</p>
                        <div className="row">
                            <div className="col-md-6">
                              <h6 className="contact-h" style={{ color: "orange" }}>Address</h6>
                                <p className="text-light">S-357 2nd floor, Block S, Panchsheel Park South, Panchsheel Park,
                                    New Delhi, Delhi 110017</p>
                            </div>
                            <div className="col-md-6">
                                <h6 className="contact-h" style={{color: "orange"}}>Enquiry</h6>
                                <p className="text-light" style={{marginBottom: "3cm"}}>
                                    Email:
                                      <b style={{ color: "orange", fontWeight: "400" }}> customercare@firstfiddle.in</b>
                                </p>
                            </div>
                            <div className="row">
                                <div className="col-md-6 mb-5">
                              <a href="/"><i className="fa-brands fa-facebook"
                                style={{ color: "orange", fontSize: "40px" }}></i></a>
                                    <a href="/"><i className="fa-brands fa-instagram"
                                            style={{color: "orange", fontSize: "40px", marginLeft:" 3px"}}></i></a>
                                    <a href="/"><i className="fa-brands fa-whatsapp"
                                            style={{color: "orange", fontSize: "40px", marginLeft:" 3px"}}></i></a>
                                </div>
                            </div>
                            </div>
                            {/* <!--row end--> */}
                        <br/>
            </div>
                        </div>
                        {/* <!--row end--> */}
                      </div>
                      {/* <!--container-fluid end--> */}





      <div className="container-fluid">
        <div className="row bg-black">
          <div className="col-md-3"></div>
          <div className="col-md-6 text-light">
            <p className="mt-3 text-center" style={{ fontWeight: "250" }}>
              EMPLOYEE POLICIES |PRIVACY POLICY |TERMS AND CONDITIONS | BLOG |APP
              <b
                style={{display:"block", fontWeight: "250", marginLeft: "0.85cm" }}
                className="foot"
              >
                COPYRIGHT © 2021 FIRST FIDDLE F&amp;B PRIVATE LIMITED{" "}
              </b>
            </p>
          </div>
        </div>
        {/* <!--row end--> */}
      </div>

      {/* <!--container-fluid end--> */}
    </>
  );
}

export default Footer;
