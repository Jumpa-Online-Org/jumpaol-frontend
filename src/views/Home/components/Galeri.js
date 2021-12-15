import React from 'react'
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
// import { Carousel } from "react-bootstrap";

const Galeri = () => {
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 2,
          slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 1 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
    };
    return (
        <div className="wrap-lp mt-5">
            <div className="header-lp">
                <div className="text-lp mb-4">Galeri <span className="text-red">Jumpa</span></div>
                {/* <hr className="line-galeri"></hr>
                <div className="seeall-galeri">
                    <a href="#" className="text-red">see all</a>
                </div> */}
            </div>
            <div className="content-galeri">
                <Carousel
                    swipeable={true}
                    draggable={true}
                    showDots={false}
                    responsive={responsive}
                    ssr={true} // means to render carousel on server-side.
                    infinite={true}
                    keyBoardControl={true}
                    customTransition="all .5"
                    transitionDuration={300}
                    containerClass="carousel-container"
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                    itemClass="carousel-item-padding-40-px"
                    >
                    <div className="mx-3"><img src="images/popular/popular-1.png" alt='galeri-img-1' /></div>
                    <div className="mx-3"><img src="images/popular/popular-2.png" alt='galeri-img-2' /></div>
                    <div className="mx-3"><img src="images/popular/popular-3.png" alt='galeri-img-3' /></div>
                    <div className="mx-3"><img src="images/popular/popular-4.png" alt='galeri-img-4' /></div>
                </Carousel>
            </div>
        </div>
    )
}

export default Galeri
