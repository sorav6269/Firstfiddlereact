import React from 'react'
import Slider from '../layout/Slider'

function Home() {
  return (
    <>
    

  
<Slider/>
    <div className="container">
        <h2 className=" mt-3 a">WELCOME TO <b style={{ color: "chartreuse" }}>FIRST FIDDLE</b></h2>
        <div className="row mt-4">
            <div className="col-md-7 mb-5">

                <p className="b">First Fiddle Restaurants, one of India's most prominent F&B companies in the
                    casual dining sector, is headed by Priyank Sukhija. Starting the journey from Lazeez Affair in 1999
                    to Miso Sexy and Bougie in 2022, we have created wave after wave in the industry with over 30+
                    restaurants, brands, and franchises across India..</p>
                <center>
                            <button className="btn btn-warning btn-lg mt-5 text-center "
                              style={{ backgroundColor: "#b1f01e", fontSize: "25px ", color: "#fff"}}>JOIN THE JURENEY</button>
                </center>
            </div>
            <div className="col-md-5 text-center mb-5">
                <img src="image/first.jpg" alt="no img" className="img12"/>

            </div>
                          </div>
                          {/* <!--row end--> */}
                        </div>
                        {/* <!--container end--> */}

    <div className="container-fluid media">

        <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-8 text-center media-text " style={{paddingTop: "140px"}}>
                          <h1 className="text-center h" style={{ color: "#fff;" }}>MEDIA MENTIONS</h1>
                <p className="text-center" style={{ color: "#fff" }}>We've been making splashes and headlines since 1999 for our
                    innovative concepts and aesthetic ideations,
                    experimental gastronomic affairs, and exotic mixology. We’ve made our way from the heart of the
                    country into
                    the hearts of its people!
                </p>

                <button className="btn btn-lg text-center mb-4" style={{backgroundColor: "#b1f01e"}}>Know More</button>
            </div>
            <div className="col-md-2"></div>
                          </div>
                          {/* <!--row end--> */}

                        </div>
                        {/* <!--container end--> */}

    <div className="container-fluid mb-5">
                      <h1 className="text-center mb-3 mt-5">EXPLORE <b style={{ color: "#b1f01e" }}>OUR BRANDS</b></h1>
        <div className="row" style={{marginLeft: "100px", marginRight: "100px"}}>
            <div className="col-md-3 mb-3"><img src="image/ffpic1.jpg" alt="no-img" className="w-100"/></div>
            <div className="col-md-3 mb-3"><img src="image/ffpic2.jpg" alt="no-img" className="w-100"/></div>
            <div className="col-md-3 mb-3"><img src="image/ffpic3.jpg" alt="no-img" className="w-100"/></div>
            <div className="col-md-3 mb-3"><img src="image/ffpic4.jpg" alt="no-img" className="w-100"/></div>
                          </div>
                          {/* <!--row end--> */}
                        </div>
                        {/* <!--container-fluid end--> */}

    <div className="container-fluid experience">
        <div className="row">
            <div className="col-md-2"></div>
                        <div className="col-md-8 text-center experience-text " style={{ paddingTop: "140px" }}>
                <h1 className="text-center exp " style={{color: "#fff"}}>EXPERIENCE OUR CONCEPTS</h1>
                <p className="text-center" style={{color: "#fff"}}>Moving beyond just offering Indian, international, and
                    fusion cuisines, our restaurants create magic with our special events, mood-setting music,
                    Insta-worthy aesthetics, and tongue-tingling signatures! Head over to experience it for yourself!
                </p>
                          <button className="btn btn-lg text-center mb-4" style={{ backgroundColor: "#b1f01e" }}>Know More</button>
            </div>
            <div className="col-md-2"></div>
                          </div>
                          {/* <!--row end--> */}
                        </div>
                        {/* <!--container-fluid end--> */}

    
    </>
  )
}

export default Home