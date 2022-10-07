import CarouselImgBox from '../Carousel-img-box/Carousel-img-box.component';

import './Carousel.style.css';

const imageArray = [
    require("../../asset/images/sunny_cat1.jpg"),
    require("../../asset/images/sunny_cat2.jpg"),
    require("../../asset/images/sunny_cat3.jpg"),
    require("../../asset/images/sunny_cat4.jpg"),
    require("../../asset/images/sunny_cat5.jpg"),
    require("../../asset/images/sunny_cat6.jpg"),
    require("../../asset/images/sunny_cat7.jpg"),
    require("../../asset/images/sunny_cat8.jpg"),
    require("../../asset/images/sunny_cat9.jpg"),
    require("../../asset/images/sunny_cat1.jpg"),
    require("../../asset/images/sunny_cat2.jpg"),
    require("../../asset/images/sunny_cat3.jpg"),
    require("../../asset/images/sunny_cat4.jpg"),
    require("../../asset/images/sunny_cat5.jpg"),
    require("../../asset/images/sunny_cat6.jpg"),
    require("../../asset/images/sunny_cat7.jpg"),
    require("../../asset/images/sunny_cat8.jpg"),
    require("../../asset/images/sunny_cat9.jpg"),
    require("../../asset/images/sunny_cat1.jpg")
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