import axios from 'axios';

axios.defaults.baseURL = "https://historyoverflow.firebaseio.com"

const bookArr = []

  function fetchBookData () {
  console.log('here fetchBookData>>')

    //380
    let i
    for (i = 0; i < 383; i++) {

      console.log('i>>', i)
      fetch(`https://www.googleapis.com/books/v1/volumes?q=subject:history&maxResults=40&startIndex=${i}&key=AIzaSyB0ybtQtX4CcyL3DkXyo0brl-b5EfLLXKI`)
        .then(res => res.json())
        .then(result => result.items)
        .then(res => res.map(art => {
          bookArr.push(art)
        }))
        .then(res => bookArr.map(art => writeToDb(art)))
        .catch(err => console.log(err));
    }
  }

  const writeToDb = (art) => {

  console.log('art>>>',art)



   axios.get(`/myBooksDb.json?orderBy="bookTitle"&equalTo="${art.volumeInfo.title}"`)
      .catch(error => console.log(error))
      // if movie title is not found, add it
      .then(res => {
        if (Object.keys(res.data).length === 0) {
          console.log('doesnt exist>>')
    axios.post(`/myBooksDb.json`, {"bookTitle":art.volumeInfo.title,"bookAuthors":art.volumeInfo.authors.toString(),
      "publisher":art.volumeInfo.publisher,"publishedDate":art.volumeInfo.publishedDate,"description":art.volumeInfo.description,
      "industryIdentifiers":art.volumeInfo.industryIdentifiers.length > 1 ? art.volumeInfo.industryIdentifiers[0].identifier : art.volumeInfo.industryIdentifiers.identifier ,"printType":art.volumeInfo.printType,
      "categories":art.volumeInfo.categories.toString(),"language":art.volumeInfo.language, "webReaderLink":art.volumeInfo.webReaderLink
    })
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

fetchBookData();

export default bookArr
