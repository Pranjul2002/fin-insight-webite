import React,  { useState }  from 'react';
import '../Blogs/BlogsStyle.css';

const Blogs = () => {
  const blogsData = [
    {
      imageSrc: 'algotrading.png',
      altText: 'Image 1',
      category: 'Algorithmic trading',
      title: "What is Algorithmic Trading and how does it works?",
      date: '2 days ago',
      link: '/blogs',
    },
    {
      imageSrc: 'howalgotradingworks.jpeg',
      altText: 'Image 2',
      category: 'Technology',
      title: 'How does algo trading works ',
      date: '3 days ago',
      link: '/blogs',
    },
    {
      imageSrc: 'prosandcons.png',
      altText: 'Image 3',
      category: 'Benefits and drawbacks',
      title: 'Benefits and drawbacks of algorithmic trading',
      date: '5 days ago',
      link: '/blogs',
    },
    {
      imageSrc: 'advantages.png',
      altText: 'Image 4',
      category: 'Advantages',
      title: 'Advantages of algorithmic trading',
      date: '10 days ago',
      link: '/blogs',
    },
  ];

  return (
    <div className="cards-container">
      {blogsData.map((card, index) => (
        <div className="card" key={index}>
          <img src={card.imageSrc} alt={card.altText} />
          <div className="info">
            <span className="category">{card.category}</span>
            <h2>{card.title}</h2>
            <p>{card.date}</p>
            <a href={card.link} className="read-more-button">Read More</a>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Blogs;
