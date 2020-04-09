import React, { useState, useEffect } from "react";
import regeneratorRuntime from "regenerator-runtime";

const News = () => {
  const [hasError, setErrors] = useState(false);
  const [articles, setArticles] = useState({});

  async function fetchData() {
    const res = await fetch("http://newsapi.org/v2/everything?domains=historynewsnetwork.org&apiKey=5dd724c572c144b09f6c67b9354c66cb");

    res.json()
      .then(res => res.articles)
      .then(articles =>  setArticles(articles))
      .catch(err => setErrors(err));

  }

  useEffect(() => {
    fetchData();
  });

  return (
    <div className="container">
      <h1> News </h1>
      <div>
        <ul>
          {
            articles.length > 0 ? articles.map(art =>
              <li>
                <div>{art.title}</div>
                <div>{art.description}</div>
                <div><img src={art.urlToImage}></img></div>

              </li>)  : ''
          }

        </ul>
        <hr />
        <span>Has error: {JSON.stringify(hasError)}</span>
      </div>
    </div>
  );
};

export default News;
