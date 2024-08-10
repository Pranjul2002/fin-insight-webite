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
          <div className="services-title">
            We offer a wide variety of <br /> financial services
          </div>
          <div className="service-first services">Develop your own algo</div>
          <div className="service-second services">Popular strategies</div>
          <div className="service-third services">Algo Development Training</div>
          <div className="service-forth services">Algo Development Support</div>
        </div>
    </div>
  )
}

export default Home