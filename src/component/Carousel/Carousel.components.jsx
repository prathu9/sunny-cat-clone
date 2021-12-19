import CarouselImgBox from '../Carousel-img-box/Carousel-img-box.component';

import './Carousel.style.css';

const imageArray = [
    "https://sunnycats.art/static/media/R-07-7.1679_XAYTU.89f8516b.png",
    "https://sunnycats.art/static/media/R-09-4.0440%20jRiGx.9116ff68.png",
    "https://sunnycats.art/static/media/R-07-2.2616%20xyIJH.fa480a9c.png",
    "https://sunnycats.art/static/media/R-09-1.7827%20RZrEo.c6f19562.png",
    "https://sunnycats.art/static/media/R-09-7.4205%20jiZFN.4c5323bf.png",
    "https://sunnycats.art/static/media/R-07-7.8320%20LQsvK.96fbef7f.png",
    "https://sunnycats.art/static/media/R-09-6.5033%20zKwHK.0dac2009.png",
    "https://sunnycats.art/static/media/R-07-5.5570%20POxyi.b97336e0.png",
    "https://sunnycats.art/static/media/R-07-7.0045%20erwOl.f6bc5099.png",
    "https://sunnycats.art/static/media/R-07-5.6241_ciGmA.7c9a241e.png",
    "https://sunnycats.art/static/media/R-08-8.1934%20nSsLt.8b489406.png",
    "https://sunnycats.art/static/media/R-08-7.2442_sEIaq.428a8185.png",
    "https://sunnycats.art/static/media/R-07-1.5331%20MNVvN.2f8dd3b2.png",
    "https://sunnycats.art/static/media/R-08-8.1934%20ZSQrf.461d369f.png",
    "https://sunnycats.art/static/media/R-07-4.0584%20ySQaO.be2adb46.png",
    "https://sunnycats.art/static/media/R-07-8.5921%20gTVro.51094092.png",
    "https://sunnycats.art/static/media/R-08-8.1934%20DOpEn.eddf2051.png",
    "https://sunnycats.art/static/media/R-08-7.8087%20qxlLZ.340d7b9b.png",
    "https://sunnycats.art/static/media/R-08-7.8087%20qxlLZ.340d7b9b.png"
]

const Carousel = () => {
    return(
        <div className="carousel-container">
            <div className="carousel-wrapper">
                <div className="carousel">
                    {
                        imageArray.map(
                            (imageUrl, i) => <CarouselImgBox 
                                                key={i}
                                                imageUrl={imageUrl}
                                            />
                        )
                    }
                </div>
                {/* <div className="carousel">
                    {
                        imageArray.map(
                            (imageUrl, i) => <CarouselImgBox 
                                                key={i}
                                                imageUrl={imageUrl}
                                            />
                        )
                    }
                </div> */}
            </div>
        </div>
    )
}

export default Carousel;