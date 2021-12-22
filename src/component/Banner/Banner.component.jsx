import BannerImage from '../../asset/images/background.fd94845c.jpg';

import './Banner.style.css';

const Banner = () => {
  return(
      <div className="banner-container" styles={{ backgroundImage:`url(${BannerImage})` }}>
          <div className="left-banner">
            <div className="banner-title">
                <img src={require("../../asset/images/sunnyCatsHeroImg.png")} alt="hero-img"/>
            </div>
            <div className="banner-text">
                <p>A collection of 10,000 artfully designed cats living on the 
                    Solana blockchain with a mission to benefit the community.</p>
            </div>
          </div>
          <div className="right-banner">
            <div className="banner-img">
            <img src={require("../../asset/images/collage.fb8be9f4.jpg")} alt="collage"/>
            </div>
          </div>
      </div>
  )
}

export default Banner;