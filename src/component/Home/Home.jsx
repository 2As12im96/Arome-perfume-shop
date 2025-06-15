import NavbarOffcanvase from '../Navbar/Navbar'
import Carousel from './carousel/carousel'
import Partations from './partations/partation'
import ProductsSelling from './Selling/productsSelling'
import { Featured } from './Selling/Selling'
import ProductFragrances from './Selling/productFragrances'
import OfferSection from './Selling/offerSection'
import Blog from './blog/blog'
import Footer from '../footer/footer'
import Accordion from './Accordion/Accordion'
import Testimonial from './testimonial/Testimonial'


function Home() {
  return (
    <>
      <NavbarOffcanvase/>
      <Carousel/>
      <Partations/>
      <ProductsSelling/>
      <Featured>
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-4">
              <div className="text text-center">
                <h5>SAFE & SECURE CHECKOUT</h5>
                <p>Guaranteed on all purchases</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-4">
              <div className="text text-center">
                <h5>AUTHENTIC FRAGRANCES</h5>
                <p>Genuine shop with confidence</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-4">
              <div className="text text-center">
                <h5>ITEMS SHIP SAME DAY</h5>
                <p>Fast reliable delivery every time</p>
              </div>
            </div>
          </div>
        </div>
      </Featured>
      <ProductFragrances/>
      <OfferSection/>
      <Testimonial/>
      <Accordion/>
      <Blog/>
      <Footer/>
    </>
  )
}

export default Home
