import './Carousel-img-box.style.css';

const CarouselImgBox = ({imageUrl}) => {
    return(
        <div className="carousel-img-container">
            <img src={imageUrl} alt="cat"/>
        </div>
    )
}

export default CarouselImgBox;