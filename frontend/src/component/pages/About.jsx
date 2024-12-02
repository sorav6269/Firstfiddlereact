import React from 'react'

function About() {
  return (
    <>
     <div className="container-fluid about">
        <div className="row ">
            <div className="col-md-2"></div>
          <div className="col-md-8" style={{ paddingTop: "140px" }}>
            <h1 className="text-center" style={{ color: "#fff", fontSize: "50px", paddingTop: "140px" }}>
                    OUR STORY</h1>
            </div>
            <div className="col-md-2"></div>
        </div>
      </div>
      {/* <!--container-fluid end--> */}

    <div className="container">
        <h2 className=" mt-2 head-text">ONCE UPON
          <b style={{ color: "chartreuse" }}>AN AFFAIRE</b>
        </h2>
        <div className="row mt-4">
            <div className="col-md-7 mb-5">

                <p className="pera ">

                    First Fiddle Restaurants, formerly known as The Lazeez Affaire Group, was conceived in the year 1999
                    by Priyank Sukhija and Y.P. Ashok. Since then, the company has made a name for itself as innovators
                    and leaders in the industry. Starting with their first brand, Lazeez Affaire, Priyank popularised
                    the conceptof fine dining at a time when the same was unheard of. Following its success, First
                    Fiddle introduced the concept of casual dining with brands such as Warehouse Cafe, Tamasha, Lord of
                    The Drinks, Flying Saucer Cafe, and more, storming Delhi’s nightlife. WIth each new brand, First
                    Fiddle brought a concept that was never experienced or heard of before, such as Plum by Bent Chair,
                    Miso Sexy, Diablo, and more. The restaurants are spread all over India in major metropolitan cities
                    like New Delhi, Mumbai, Pune, Lucknow and more, with plans to expand internationally soon.
                </p>

            </div>
            <div className="col-md-5 text-center mb-5">
                <img src="image/first.jpg" alt="no img" className="img12"/>

            </div>
        </div>
        {/* <!--row end--> */}
      </div>
      {/* <!--container end--> */}

    <div className="container-fluid game">

        <div className="row">
            <div className="col-md-2"></div>
          <div className="col-md-8 text-center game-text " style={{ paddingTop: "140px" }}>
            <h1 className="text-center " style={{ color: "#fff" }}>THE GAME CHANGER</h1>
            <p className="text-center" style={{ color: "#fff" }}>The company is dedicated to being a game changer in the F&B
                    industry with the introduction of ‘concept’ restaurants. It is committed to catering to the
                    ever-changing cosmopolitan taste of its customers & customer satisfaction is an utmost priority.
                </p>
            </div>
            <div className="col-md-2"></div>
        </div>
        {/* <!--row end--> */}

      </div>
      {/* <!--container end--> */}

    <div className="container">
        <h2 className=" mt-5 fiddle-text">THE MAN
            <b style={{color: "rgb(114, 218, 10)"}}> BEHIND THE FIDDLE</b>
        </h2>
        <div className="row mt-4">
            <div className="col-md-5 text-center mb-5">
            <img src="image/sor.jpg" alt="no img" style={{ width: "80%" }} />

            </div>
            <div className="col-md-7 mb-5">

                <p className="fiddle-subtext ">

                    With over 30 restaurants in 23 years under his belt, the prolific restaurateur Priyank Sukhija has
                    become somewhat of a legend in the industry, starting his journey at a mere age of 19. Priyank was
                    the first in his family to venture into business, hailing from a family of lawyers, going on to
                    create an empire in F&B. Following his heart and tongue through his F&B career, Priyank has
                    successfully created some of the most talked-about brands in the industry - Diablo, Lord of the
                    Drinks, Plum by Bent Chair, Lazeez Affaire, Tamasha, The Flying Saucer Cafe, and many more.
                </p>

            </div>

        </div>
        {/* <!--row end--> */}
      </div>
      {/* <!--container end--> */}
    <div className="container">
        <h2 className=" mt-3 a text-center">JOIN<b style={{ color: "rgb(106, 194, 19)" }}> OUR FAMILY</b></h2>
        <div className="row mt-4">
            <div className="col-md-7 mb-5">

                <p className="family-pera">At First Fiddle Restaurants, we leave no stone unturned to provide the most
                    desirable experience across markets and restaurants. Serving over five lakh customers monthly with
                    15+ brands and 35+ restaurants, our brands like Diablo, Plum by Bent Chair, Dragonfly Experience,
                    Tamasha, Daddy, JLWA, and more have revolutionized the experience of dining & nightlife for
                    everyone. Exploring a franchise with First Fiddle Restaurants provides you with a large existing
                    customer base besides the added advantage of nation-wide recognition.</p>

            <center>            <button className="btn btn-warning btn-lg mt-5 mb-5 "
              style={{ backgroundColor: "#ffc107", fontSize: "25px", color: "#fff" }}>Franchise With Us</button>
</center>

            </div>
            <div className="col-md-5 text-center mb-5 mt-3">
            <img src="image/family.jpg" alt="no img" style={{ width: "90%", height: "100%" }} />

            </div>
        </div>
        {/* <!--row end--> */}
      </div>
      {/* <!--container end--> */}

    </>
  )
}

export default About