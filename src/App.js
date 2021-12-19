import Banner from './component/Banner/Banner.component';
import Carousel from './component/Carousel/Carousel.components';
import Faq from './component/Faq/Faq.component';
import Footer from './component/Footer/Footer.component';
import Header from './component/Header/Header.component';
import Mission from './component/Mission/Mission.component';
import Team from './component/Team/Team.component';

const App = () => {
    return(
        <div className="app-container">
            <Header/>
            <Banner/>
            <Carousel/>
            <Mission/>
            <Faq/>
            <Team/>
            <Footer/>
        </div>
    )
}

export default App;