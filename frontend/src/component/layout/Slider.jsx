import React from 'react'

function Slider() {
  return (
    <>
      <div className="carousel slide" data-bs-ride="carousel" id="a1">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#a1"
            data-bs-slide-to="0"
            className="active"
          ></button>
          <button
            type="button"
            data-bs-target="#a1"
            data-bs-slide-to="1"
            className="active"
          ></button>
          <button
            type="button"
            data-bs-target="#a1"
            data-bs-slide-to="2"
            className="active"
          ></button>
          <button
            type="button"
            data-bs-target="#a1"
            data-bs-slide-to="3"
            className="active"
          ></button>
        </div>
        {/* <!--carousel-indicators end--> */}

        <div className="carousel-inner ">
          <div className="carousel-item active">
            <img src="image/slider1.jpg" alt="kg1" className="w-100" />
          </div>
          {/* <!--carousel-item end--> */}
          <div className="carousel-item">
            <img src="image/slider2.jpg" alt="s1" className="w-100" />
          </div>
          {/* <!--carousel-item end--> */}
          <div className="carousel-item">
            <img src="image/slidwr3.jpg" alt="s1" className="w-100" />
          </div>
          {/* <!--carousel-item end--> */}
          <div className="carousel-item"></div>
          {/* <!--carousel-item end--> */}
        </div>
        {/* <!--carousel-inner end--> */}
      </div>
      {/* <!--carousel-slider end--> */}
    </>
  );
}

export default Slider