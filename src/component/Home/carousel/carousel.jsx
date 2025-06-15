import { Link } from "react-router-dom"
import { CarouselFade } from "./carousel_style"

function Carousel(){
    return(
        <>
            <CarouselFade id="carouselExampleCaptions" className="carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active rounded-circle" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2" className=' rounded-circle'></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3" className=' rounded-circle'></button>
                </div>

                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <img src="images/s1-dsdcopy.webp" className="d-block w-100" alt="..."/>
                    <div className="carousel-caption d-md-block text-start text-left">
                        <h5>
                            <span>Fragrance For</span>
                            <br></br>
                            <span>Every Occasion</span>
                        </h5>
                        <p>
                            <span>Dive into our Summer Scent Sale and enjoy up to</span>
                            <br></br>
                            <span>30% off on selected arome Perfume.</span>
                        </p>
                        <button><Link to='/Shop'>SHOP NOW</Link></button>
                    </div>
                    </div>

                    <div className="carousel-item">
                    <img src="images/s1-dfercopy.webp" className="d-block w-100" alt="..."/>
                    <div className="carousel-caption d-md-block text-start">
                        <h5>
                            <span>Finest Perfumes</span>
                            <br></br>
                            <span> Shop For Women</span>
                        </h5>
                        <p>
                            <span>Dive into our Summer Scent Sale  and enjoy up to </span>
                            <br></br>
                            <span>30% off on selected arome Perfume.</span>
                        </p>
                        <button><Link to='/Shop'>SHOP NOW</Link></button>
                    </div>
                    </div>

                    <div className="carousel-item">
                    <img src="images/s1-rtecopy.webp" className="d-block w-100" alt="..."/>
                    <div className="carousel-caption d-md-block text-start text-left">
                        <h5>
                            <span>Explore  Your</span>
                            <br></br>
                            <span> Signature Scent</span>
                        </h5>
                        <p>
                            <span>Dive into our Summer Scent Sale  and enjoy up to </span>
                            <br></br>
                            <span>30% off on selected arome Perfume.</span>
                        </p>
                        <button><Link to='/Shop'>SHOP NOW</Link></button>
                    </div>
                    </div>
                </div>

                <button className="carousel-control-prev rounded-circle" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next rounded-circle" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </CarouselFade>
        </>
    )
}
export default Carousel