import React from 'react';
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './blog.css';

const Blog = () => (
  <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">A lot is happening, <br /> people are talking about it.</h1>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupA">
        <Article imgUrl={blog01} date="Sep 20, 2020" text="GPT-3 and Open  AI is the future. Let us exlore it?" />
      </div>
      <div className="gpt3__blog-container_groupB">
        <Article imgUrl={blog02} date="January 1, 2021" text="Will CHATGPT bring about an age of AI?" />
        <Article imgUrl={blog03} date="April 13, 2021" text="Can OpenAI be the missing link to the RPA industry?" />
        <Article imgUrl={blog04} date="July 24, 2021" text="The Genesis of Chatbot!" />
        <Article imgUrl={blog05} date="August 30, 2022" text="Will GPT-3 have competition?" />
      </div>
    </div>
  </div>
);

export default Blog;