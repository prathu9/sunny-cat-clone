import './Header.style.css';

const Header = ({TwitterIcon, DiscordIcon}) => {
    return(
        <div className="header-container">
            <div className="left-nav">
                <div className="logo-container">
                    <img src={require("../../asset/images/catLogo.png")} alt="cat-logo" />
                </div>
                <div className="left-nav-item">
                    <div className="nav-options">
                        MISSION
                    </div>
                    <div className="nav-options">
                        FAQ
                    </div>
                    <div className="nav-options">
                        TEAM
                    </div>
                </div>
            </div>
            <div className="right-nav">
                <div className="twitter-icon-header">
                    <TwitterIcon/>
                </div>
                <div className="discord-icon-header">
                <DiscordIcon/>
                </div>
                <button className="connect-btn">Connect</button>
            </div>
        </div>
    )
}

export default Header;