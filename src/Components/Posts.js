import React from 'react';
import ArticleText from '../Components/ArticleText'

const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
      <ul className="content">
        {posts.map((art, i) => (
          <li key={i} className="itemContainer">
            <span>{art.pubDate}</span>
            <h2>{art.title }</h2>
            <img src={art.thumbnail} style={{width: "100%"}}></img>
            <ArticleText bodyText={art.bodyText}/>
          </li>
        ))}
      </ul>
  );
};

export default Posts;
