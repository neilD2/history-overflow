import React, { useState, useEffect } from "react";
let Parser = require('rss-parser');
let parser = new Parser();
import parse from 'html-react-parser';
import axios from 'axios'
import regeneratorRuntime from "regenerator-runtime";
import MediaContainer from '../Components/MediaContainer'

export default class News extends React.Component {

  constructor() {
    super();
    this.state = { myArticles:[]
    }
  }

  componentDidMount() {

    axios.get(`/guardArticles.json?orderBy="pubDate"&limitToLast=10`)
      .catch(error => console.log(error))
      .then( res => {

        let copy=[];
        Object.keys(res.data).forEach(key => {
          copy.push(res.data[key])
        });

        this.setState({
          myArticles :copy
        })
    })
  }

  render() {

    return (
      <div className="container">
        <h1> News </h1>
        <p>news...</p>
        <ul className="content">
          { this.state.myArticles &&
          this.state.myArticles.length > 0 ? this.state.myArticles.map((art, i) =>
            <li key={i} className="itemContainer">
              <h2>{art.title }</h2>
              <img src={art.thumbnail} style={{width: "100%"}}></img>
              <div>{art.bodyText}
              </div>
            </li>
          ): ''
          }
        </ul>
      </div>
    )
  }
}
