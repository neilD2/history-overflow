import axios from 'axios';

axios.defaults.baseURL = "https://historyoverflow.firebaseio.com"

const movieArr = []

  function fetchMovieData () {
  console.log('here fetchMovieData>>')

    //382
    //let i
    //for (i = 0; i < 383; i++) {

      //console.log('i>>', i)
      fetch(`https://api.themoviedb.org/3/discover/movie?api_key=f07a2f04dc7718f8dc7d36a3282da49a&language=en-US&sort_by=release_date.desc&include_adult=true&include_video=false&with_genres=36&page=1`)
        .then(res => res.json())
        .then(result => result.results)
        .then(res => res.map(art => {
          movieArr.push(art)
        }))
        .then(res => movieArr.map(art => writeToDb(art)))
        .catch(err => console.log(err));
    //}
  }

  const writeToDb = (art) => {



    axios.get(`/myMovieDb.json?orderBy="movieTitle"&equalTo="${art.title}"`)
      .catch(error => console.log(error))
      // if movie title is not found, add it
      .then(res => {
        if (Object.keys(res.data).length === 0) {
          console.log('doesnt exist>>')
          axios.post(`/myMovieDb.json`, {"movieTitle":art.title,"movieOverview":art.overview,"moviePoster":art.poster_path,"movieScore":art.vote_average,"movieReleaseDate":art.release_date,"voteCount":art.vote_count,"popularity":art.popularity})
            .then(res => console.log('post res>',res))
            .catch(error => console.log(error))
        }
      })

    /*  axios.post(`/guardArticles.json`, {"id":art.id,"title":art.fields.headline,"thumbnail":art.fields.thumbnail,"bodyText":art.fields.bodyText, "pubDate": art.fields.firstPublicationDate})
        .then(res => console.log(res))
        .catch(error => console.log(error))*/

    /*  axios.get(`/guard-articles.json?&equalTo="${art.fields.title}"`)
        .catch(error => console.log(error))
        // if movie title is not found, add it
        .then(res => {if(Object.keys(res.data).length===0){
          axios.post(`/guard-articles.json`, {"title":art.fields.headline,"thumbnail":art.fields.thumbnail,"bodyText":art.fields.bodyText, "pubDate": art.fields.firstPublicationDate})
            .then(res => console.log(res))
            .catch(error => console.log(error))
        }
        })*/
  }

fetchMovieData();

export default movieArr
