import Banner from './component/Banner/Banner.component';
import Carousel from './component/Carousel/Carousel.components';
import Faq from './component/Faq/Faq.component';
import Footer from './component/Footer/Footer.component';
import Header from './component/Header/Header.component';
import Mission from './component/Mission/Mission.component';
import Team from './component/Team/Team.component';

import {ReactComponent as TwitterIcon} from './asset/images/twitter-icon.svg';
import {ReactComponent as DiscordIcon} from './asset/images/discord-icon.svg';

const App = () => {
    return(
        <div className="app-container">
            <Header  TwitterIcon={TwitterIcon} DiscordIcon={DiscordIcon}/>
            <Banner/>
            <Carousel/>
            <Mission/>
            <Faq/>
            <Team/>
            <Footer TwitterIcon={TwitterIcon} DiscordIcon={DiscordIcon}/>
        </div>
    )
}

export default App;