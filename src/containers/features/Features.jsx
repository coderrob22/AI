import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'Ever Improving Technology',
    text: 'This tech is next level with its learning capabilities.',
  },
  {
    title: 'State of the art design',
    text: 'Google employees wish they designed this bot.',
  },
  {
    title: 'Intelligence unparalleled',
    text: 'Pulling from the web to answer every question asked to it is just the tip of the iceberg for this bot.',
  },
  {
    title: 'Creative by design',
    text: 'This bot has the ability to create original pieces of art that do not currently exist.',
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">The Future is Now, Living AI. Step into the Future Today. Make it Happen.</h1>
      <p>Request Early Access to Get Started</p>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;