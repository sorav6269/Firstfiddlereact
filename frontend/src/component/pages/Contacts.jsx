import React from 'react'

function Contacts() {
  return (
    <>
      <div className="container-fluid contact">
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <h1
              className="text-center"
              style={{
                paddingTop: "40%",
                color: "#fff",
                fontSize: "0.6in",
                fontFamily: "prague",
              }}
            >
              CONTACT US
            </h1>
          </div>
          <div className="col-md-3"></div>
        </div>
        {/* <!--row end--> */}
      </div>
      {/* <!--container-fluid end--> */}

      <div className="container mb-5">
        <div className="row ">
          <div className="col-md-6 mt-5">
            <h4 style={{ fontWeight: "100" }}>SEND US MESSAGE</h4>
            <form action="">
              <div className="mt-4">
                <input
                  type="text"
                  name=""
                  placeholder="Name*"
                  className="form-control"
                />
              </div>
              <div className="mt-4">
                <input
                  type="email"
                  name=""
                  placeholder="Email*"
                  className="form-control"
                />
              </div>
              <div className="mt-4">
                <input
                  type="number"
                  name=""
                  placeholder="Phone*"
                  className="form-control"
                />
              </div>
              <div className="mt-4">
                <input
                  type="text"
                  name=""
                  placeholder="Message*"
                  className="form-control"
                />
              </div>

              <div className="mt-4">
                <button className="btn bg-warning btn-lg text-light">
                  Submit
                </button>
              </div>
            </form>
          </div>

          <div className="col-md-5 mt-5">
            <h4 style={{ fontWeight: "100" }}>CONTACT INFO</h4>

            <h6 style={{ color: "orange", fontWeight: "400" }}>Address</h6>
            <p style={{ fontWeight: "150", fontSize: "17px" }}>
              6, Chanakyapuri Shopping Complex, 48, Malcha Marg, New Delhi
              110021
            </p>

            <h6 style={{ color: "orange", fontWeight: "400" }}>
              For Franchise Enquiry
            </h6>
            <p style={{ fontWeight: "150" }}>
              MOBILE:
              <b style={{ color: "orange", fontWeight: "400" }}>
                {" "}
                +91 9313663486
              </b>
            </p>
            <p style={{ fontWeight: "150" }}>
              EMAIL:
              <b style={{ color: "orange", fontWeight: "400" }}>
                {" "}
                franchise@firstfiddle.in
              </b>
            </p>

            <h6 style={{ color: "orange", fontWeight: "400" }}>
              For HR Enquiry
            </h6>
            <p style={{ fontWeight: "150" }}>
              MOBILE:
              <b style={{ color: "orange", fontWeight: "400" }}>
                {" "}
                +91 9999304427
              </b>
            </p>
            <p style={{ fontWeight: "150" }}>
              EMAIL:
              <b style={{ color: "orange", fontWeight: "400" }}>
                {" "}
                hr@firstfiddle.in
              </b>
            </p>

            <h6 style={{ color: "orange", fontWeight: "400" }}>
              For Other Enquiry
            </h6>
            <p style={{ fontWeight: "150" }}>
              MOBILE:
              <b style={{ color: "orange", fontWeight: "400" }}> 7676380000</b>
            </p>
            <p style={{ fontWeight: "150" }}>
              EMAIL:
              <b style={{ color: "orange", fontWeight: "400" }}>
                {" "}
                customercare@firstfiddle.in
              </b>
            </p>
            <p style={{ fontWeight: "150" }}>
              Open: Monday - Saturday 10:30 - 19:30
            </p>
          </div>
        </div>
        {/* <!--row end--> */}
      </div>
      {/* <!--container end--> */}
    </>
  );
}

export default Contacts