import React from 'react';
import './Trends.css';

const Trends = () => {
  const trends = [
    {
      title: 'Sugar Wax',
      image: require('../../assets/trends/sugar-wax.png')
    },
    {
      title: 'BIAB Nails',
      image: require('../../assets/trends/biab.png')
    },
    {
      title: 'Curly Hair',
      image: require('../../assets/trends/curls.png')
    },
    {
      title: 'Microblading',
      image: require('../../assets/trends/microblading.png')
    }
  ];

  return (
    <section className="trends" id="trends">
      <div className="container">
        <h2 className="section-title">Discover the latest trends</h2>
        <p className="trends-subtitle">Stay up to date with the newest beauty techniques and styles</p>
        <div className="trends-grid">
          {trends.map((trend, index) => (
            <div className="trend-card" key={index}>
              <div className="trend-image">
                <img src={trend.image} alt={trend.title} />
                <div className="trend-title-overlay">
                  <h3 className="trend-title">{trend.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trends;