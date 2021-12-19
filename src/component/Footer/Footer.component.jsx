import './Footer.style.css';

const Footer = () => {
    return(
        <div className="footer-container">
            <div className="footer-copyright">
                <span>
                    COPYRIGHT © 2021 SUNNYCATS.
                    ALL RIGHTS RESERVED
                </span>
            </div>
            <div className="social-media-icon">
                <div className="twitter-icon">
                    <i className='fab fa-twitter'></i>
                </div>
                <div className="discord-icon">
                    <i className="fab fa-discord"></i>
                </div>
            </div>
        </div>
    )
}

export default Footer;