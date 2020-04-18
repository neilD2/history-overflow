import React, { useState, useEffect } from "react";
let Parser = require('rss-parser');
let parser = new Parser();
import parse from 'html-react-parser';
import axios from 'axios'
import regeneratorRuntime from "regenerator-runtime";
import MediaContainer from '../Components/MediaContainer'
import AddToListAction from '../Components/AddToListAction'
import ArticleText from '../Components/ArticleText'
import Posts from '../components/Posts';
import Pagination from '../components/Pagination';

const News = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get('/guardArticles.json?orderBy="pubDate"&limitToLast=200');
      let copy=[];
      Object.keys(res.data).forEach(key => {
        copy.push(res.data[key])
      });
      console.log('copy>>',copy)

      setPosts(copy);
      setLoading(false);
    };

    fetchPosts();
  }, []);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className="container">
      <h1> News </h1>
      <p>latest history news articles courtesy of the Guardian.co.uk</p>
      <Posts posts={currentPosts} loading={loading} />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
    </div>
  );
};

export default News;
