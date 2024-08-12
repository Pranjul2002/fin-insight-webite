import React from "react";
import "../Services/ServicesStyle.css";

const Services = () => {
  return (
    <div className="services-container">
      <h1>Our Services</h1>
      <div className="services-grid">
        <div className="service-card">
          <img src="services-01.jpeg" alt="Develop Your Own Algorithm" />
          <h2>Develop Your Own Algorithm</h2>
          <p>
            Unlock the power of financial markets by developing your own trading algorithms. Our expert team will guide you through the entire process, from conceptualizing your trading strategy to implementing it in a live market environment. Learn how to translate your ideas into code, optimize your algorithms, and stay ahead of market trends. Whether you are a novice or an experienced trader, our service ensures that your custom algorithm aligns with your unique trading goals.
          </p>
        </div>

        <div className="service-card">
          <img src="services-02.png" alt="Popular Strategies" />
          <h2>Popular Strategies</h2>
          <p>
            Explore a wide range of proven trading strategies that have stood the test of time. From momentum trading to mean reversion, our collection of popular strategies is designed to help you navigate the complexities of financial markets. Each strategy comes with detailed guidelines, performance metrics, and risk management techniques. Whether you’re looking to adopt a strategy or customize it to suit your needs, our comprehensive resources provide the foundation for successful trading.
          </p>
        </div>

        <div className="service-card">
          <img src="services-03.jpg" alt="Algorithm Development Training" />
          <h2>Algorithm Development Training</h2>
          <p>
            Elevate your trading skills with our in-depth algorithm development training. This service is perfect for traders and developers who want to deepen their understanding of algorithmic trading. Our training covers everything from basic concepts to advanced techniques, including backtesting, optimization, and implementation. With hands-on exercises and real-world examples, you’ll gain the confidence and skills needed to develop and deploy robust trading algorithms in live markets.
          </p>
        </div>

        <div className="service-card">
          <img src="services-04.jpg" alt="Algorithm Development Support" />
          <h2>Algorithm Development Support</h2>
          <p>
            Ensure the success of your trading algorithms with our dedicated support service. Our team of experts is available to assist you with any aspect of algorithm development, from debugging code to optimizing performance. We offer one-on-one consultations, code reviews, and performance analysis to help you refine your algorithms and achieve consistent results. Whether you’re facing technical challenges or looking to enhance your strategy, our support service is here to help.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;