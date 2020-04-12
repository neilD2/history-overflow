import axios from 'axios';

axios.defaults.baseURL = "https://historyoverflow.firebaseio.com"

const articleArr = []

  function fetchGuardHistData () {
    axios.get("https://content.guardianapis.com/search?tag=education/historyandhistoryofart&show-fields=all&api-key=15b17c82-02d3-489e-a8fe-685e977efb26")
      .then(res => res.data)
      .then(res => res.response)
      .then(res => res.results)
      .then(res => res.map(art => {
        if (!art.id.includes('obituary') && !art.id.includes('tv-and-radio/')) {
          articleArr.push(art)
        }
      }))
      .then(res => articleArr.map(art => writeToDb(art)))
      .catch(err => console.log(err));
  }

  function fetchGuardArcData () {
    axios.get("https://content.guardianapis.com/search?tag=science/archaeology&show-fields=all&api-key=15b17c82-02d3-489e-a8fe-685e977efb26")
      .then(res => res.data)
      .then(res => res.response)
      .then(res => res.results)
      .then(res => res.map(art => {
        if (!art.id.includes('obituary') && !art.id.includes('tv-and-radio/')) {
          articleArr.push(art)
        }
      }))
      .then(res => articleArr.map(art => writeToDb(art)))
      .catch(err => console.log(err));

  }

  const writeToDb = (art) => {

    axios.get(`/guardArticles.json?orderBy="id"&equalTo="${art.id}"`)
      .catch(error => console.log(error))
      // if movie title is not found, add it
      .then(res => {
        if (Object.keys(res.data).length === 0) {
          axios.post(`/guardArticles.json`, {
            "id": art.id,
            "title": art.fields.headline,
            "thumbnail": art.fields.thumbnail,
            "bodyText": art.fields.bodyText,
            "pubDate": art.fields.firstPublicationDate
          })
            .then(res => console.log(res))
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

  fetchGuardArcData();
  fetchGuardHistData();



export default articleArr
