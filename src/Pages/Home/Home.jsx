import React from 'react'
import { Link } from 'react-router-dom'

import '../Home/HomeStyle.css'

const Home = () => {
  return (
    <div className='home'>
        <div className="home-welcome">
          <div className='home-welcome-title'>
            Reinvent YOU in the world <br />
            of Trading and <br />
            investing.
          </div>

          <div className='read-more-button-wrapper'>
            <Link to="/read-more" className='read-more-button-link'>
              <div className='read-more-button-text'>READ MORE</div>
            </Link>
          </div>
        </div>

        <div className="services-wrapper">
          <div className='know-more-button-wrapper'>
            <Link to="/know-more" className='know-more-button-link'>
              <div className='know-more-button-text'>KNOW MORE</div>
            </Link>
          </div>

          <div className="services-title">
            We offer a wide variety of <br /> financial services
          </div>

          <div className='services-box'>
            <div className="service-first services">
              <div className='service-content'>
                <div className="service-no">01</div>
                <div className='service-heading'>Develop your own algo</div>
              </div>
            </div>

            <div className="service-second services">
              <div className='service-content'>
                <div className="service-no">02</div>
                <div className='service-heading'>Popular strategies</div>
              </div>
            </div>

            <div className="service-third services">
              <div className='service-content'>
                <div className="service-no">03</div>
                <div className='service-heading'>Algo Development Training</div>
              </div>
            </div>

            <div className="service-fourth services">
              <div className='service-content'>
                <div className="service-no">04</div>
                <div className='service-heading'>Algo Development Support</div>
              </div>
            </div>
          </div>
        </div>

        <div className="about-us-wrapper">
          <div className='about-left-box'>
            <div className='about-title'>About us</div>
            <div className="about-content">We have different experts for <br /> different financial services.</div>
            <div className='read-more-button-wrapper'>
              <Link to="/know-more" className='read-more-button-link'>
                <div className='read-more-button-text'>KNOW MORE</div>
              </Link>
            </div>
          </div>
          <div className="what-we-do-wrapper">
            <div className="what-we-do-wrapper-title">What we do</div>
            <div className="what-we-do-wrapper-content">
              We are dedicated to <br />
              helping businesses and <br />
              individuals navigate the <br />
              complex world of<br />
              finance. <br />
              <div className="what-we-do-wrapper-sub-content">
                We provide personalized solutions that are <br />
                tailored to the unique needs of each of our <br />
                clients.
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Home