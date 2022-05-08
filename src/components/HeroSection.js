import React, { Component } from "react";
import "../css/HeroSection.css";

import articleImg from "../assets/images/article_img.jpg";
import HeroVideo from "../assets/videos/video.mp4";
import Slider from "./Slider";
import HomeCard from "./HomeCard";

import img1 from "../assets/images/card/img1.jpg";
import img2 from "../assets/images/card/img2.jpg";
import img3 from "../assets/images/card/img3.jpg";
import img4 from "../assets/images/card/img4.jpg";
import myStudio from "../assets/images/mystudio.jpg"
import main from "../assets/images/main.jpg"

class HeroSection extends Component {
  render() {
    return (
      <div>
        <div className="heroSection">
          <video autoPlay loop muted className="back-video">
            <source src={HeroVideo} type="video/mp4" />
          </video>
          <div>
            <h1 className="heroHeader">
              Let's Imagine The <br></br>Future Together
            </h1>
          </div>

          <div>
            <p className="heroPara">
              Ready to experience the science Fiction yet ? Let's <br /> make it
              real.
            </p>
          </div>

          <div className="buttons">
            <button className="heroButtonLeft button">Book a Demo</button>
            <button className="heroButtonRight button">
              Technology Updates
            </button>
          </div>
        </div>
        <div className="heroSlider">
          <Slider></Slider>
        </div>
        <div className="heroArticle">
          <div className="articleTextPart">
            <div className="articleHeader">
              <h2>Our imagination, Your rules</h2>
            </div>
            <div className="articlePara">
              <p>
                We creates original promo products for great companies. From the
                initial concept to R&D, to design, to mass production –
                everything is done by our team. Our goal is to bring emotions
                back to giveaways and promotions. That's why we put people's
                feeling first when creating new products. for more than 3 years
                we’ve been a trusted partner for brands who needed promotional
                products. We’ve provided countless clients with great products,
                but it was so hard to find the right fresh promo gift for
                everyone. That’s why we founded VRQUIN.
              </p>
            </div>
          </div>

          <div className="articleImgPart">
            <img src={articleImg} alt="" className="articleImg" />
          </div>
        </div>

        <div className="homeCardSection">
          <div className="homeCardRow1">

            <div className = "homeCardRowEl">
              <HomeCard
                img={img1}
                heading="HOLO-X"
                desc="Series Of Holographic Display"
                buttonText="Explore HOLO-X"

              ></HomeCard>
            </div>

            <div className = "homeCardRowEl">
              <HomeCard
                img={img2}
                heading="TRANS-X"
                desc="Advanced 3D Display"
                buttonText="Explore TRANS-X"
              ></HomeCard>
            </div>
          </div>
          <div className="homeCardRow2">

            <div className = "homeCardRowEl">
              <HomeCard
                img={img3}
                heading="MAYA"
                desc="Virtual Receptionist"
                buttonText="Explore MAYA"
              ></HomeCard>
            </div>

            <div className = "homeCardRowEl">
              <HomeCard
                img={img4}
                heading="SMART DISPLAY"
                desc="Innovative Season Display"
                buttonText="Explore SMART-X"
              ></HomeCard>
            </div>
          </div>
        </div>
       
       <div className = "myStudio">
         <div className = "myStudioTextPart">
           <p className = "myStudioHeadPara">Power Of Interaction</p>
           <h2>My-Studio</h2>
           <p className = "myStudioDesc">Have the freedom to go further with the <br />
            amazing 3D Content.</p>
           <button>Learn More</button>
         </div>
         <div className = "myStudioImgPart">
           <img src = {myStudio} alt="" />
         </div>
       </div>

    <div className="featureSection">
<div className="featureSectionContent">
  <h2>"CREATING MAGICAL <br /> MOMENTS THROUGH <br /> TECHNOLOGY"</h2>
  <p> Throughout our organisation we’ve always looked <br /> to bring together the right skills and knowledge to <br /> support our technology development, network <br /> growth and customer service. With experience <br /> that goes beyond the telecome.
    <br /><br />
    We bring the future to your City !!
  </p>
  <button>Check Our Service</button>
</div>
<div className="featureSectionImage">
  <img src={main} alt="" />
</div>
    </div>
      </div>
    );
  }
}

export default HeroSection;
