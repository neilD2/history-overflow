import axios from 'axios';

axios.defaults.baseURL = "https://historyoverflow.firebaseio.com"

const tvArr = []

  function fetchTvData () {
  console.log('here fetchTvData>>')

    //382
    //let i
    //for (i = 0; i < 383; i++) {

      //console.log('i>>', i)
      fetch(`https://api.themoviedb.org/3/discover/tv?api_key=f07a2f04dc7718f8dc7d36a3282da49a&language=en-US&sort_by=release_date.desc&include_adult=true&include_video=false&with_genres=36&page=4`)
        .then(res => res.json())
        .then(result => result.results)
        .then(res => res.map(art => {
          tvArr.push(art)
        }))
        .then(res => tvArr.map(art => writeToDb(art)))
        .catch(err => console.log(err));
    //}
  }

  const writeToDb = (art) => {

    axios.post(`/myTvDb.json`, {"tvName":art.name,"tvOverview":art.overview,"tvPoster":art.poster_path,"tvScore":art.vote_average,"tvReleaseDate":art.release_date,"voteCount":art.vote_count,"popularity":art.popularity})
      .then(res => console.log('post res>',res))
      .catch(error => console.log(error))

/*    axios.get(`/myMovieDb.json?orderBy="movieName"&equalTo="${art.name}"`)
      .catch(error => console.log(error))
      // if movie title is not found, add it
      .then(res => {
        if (Object.keys(res.data).length === 0) {
          console.log('doesnt exist>>')
          axios.post(`/myTvDb.json`, {"tvName":art.name,"tvOverview":art.overview,"tvPoster":art.poster_path,"tvScore":art.vote_average,"tvReleaseDate":art.release_date,"voteCount":art.vote_count,"popularity":art.popularity})
            .then(res => console.log('post res>',res))
            .catch(error => console.log(error))
        }
      })*/

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

fetchTvData();

export default tvArr
