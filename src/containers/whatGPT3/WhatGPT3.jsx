import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatgpt3.css';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="What is GPT-3" text="It's the future. This SaaS is the solution to all your questions. It uses OpenAI and integrates functionalities unseen before. " />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
      <p>Explore the Library</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Chatbots" text="Chatbots are used to strengthen the output of the service. Ask your question and watch the chatbot answer accurately." />
      <Feature title="Knowledgebase" text="Pulling from the world wide web, and teaching from the pool of the MIT library, this knowledgebase is the last one you will ever need." />
      <Feature title="Education" text="If you are looking to learn, look no further. This open source software has everything you need to increase all you know." />
    </div>
  </div>
);

export default WhatGPT3;