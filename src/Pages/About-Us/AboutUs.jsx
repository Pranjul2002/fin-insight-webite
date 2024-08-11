import React from 'react'

const AboutUs = () => {
  return (
    <div className='aboutUs'>
        <div className="about-us-welcome-banner">
            <div className="about-us-text">
                About Us
            </div>
        </div>
        <div className="about-algo-trading">
            <div className="about-algo-trading-head">
                Algo Trading
            </div>
            <p className='algo-trading-content'>Algorithmic trading strategiess involve making trading decisions based on pre set rules tht are programmed into a computer. <br />
                A trader  or investor writes cide that executes trade on behalf of the trader or investor whwn certain condition are met.
            </p>
        </div>

        <div className="pros-cons-wrapper">
            <div className="pros-cons-wrapper-title">
                What you able to do.
            </div>
            <div className="pro-wrapper">
                <div className="pros-points-list box">
                    <li className='pros-point'>Rule based... Do exactly what I want</li>
                    <li className='pros-point'>Zero Emotions.. This is the enemy i want to kill first</li>
                    <li className='pros-point'>Brokerage savings... create your own system and save commissions</li>
                    <li className='pros-point'>Everyonr talks about AI..someday I will also do it</li>
                    <li className='pros-point'>It works even when you are not working</li>
                </div>
            </div>
            <div className="cons-wrapper">
                cons
            </div>
        </div>
    </div>
  )
}

export default AboutUs