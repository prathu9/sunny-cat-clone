import './Footer.style.css';

const Footer = ({TwitterIcon, DiscordIcon}) => {
    return(
        <div className="footer-container">
            <div className="footer-copyright">
                <span>
                    COPYRIGHT © 2021 SUNNYCATS.
                    ALL RIGHTS RESERVED
                </span>
            </div>
            <div className="social-media-icon">
                <div className="twitter-icon-footer">
                    <TwitterIcon/>
                </div>
                <div className="discord-icon-footer">
                    <DiscordIcon/>
                </div>
            </div>
        </div>
    )
}

export default Footer;