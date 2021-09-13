import React from 'react';
import hardcoreHistoryLogo from '../Assets/img/dc-homepage-cover-img.jpg'
import historyOnFireLogo from '../Assets/img/HOF-Cover-Art.png'
import martrMade from '../Assets/img/FA-Boxer-Podcast.jpg'
import twitterLogo from '../Assets/img/twitter.png'
import {Button} from '../StyledComponents/StyledComponents'

const Homepage = () => {
  return (
    <div className="container">
      <h1> Home </h1>
      <p>
        Greetings! I'm Neil Dickens and welcome to History Overflow.
      </p>
      <p>
        I created History Overflow in the belief that every single person should have a rounded concept of the greatest events that have occurred during the time
        that history has been recorded.
      </p>
      <p>
        Understanding of history is one of the most salient pieces of knowledge a person can have, giving them
        the key to understanding events not only of the past, but also of the present and the future.
      </p>
    </div>
  );
}

const ContactUs = () => {
  return (
    <div className="container">
      <h1> Contact Us </h1>
      <p>
        Contact for me for any info: neil_duk@yahoo.com
      </p>

    </div>
  );
}

const Podcasts = () => {

  return (
    <div className="container">
      <h1> Podcasts </h1>

      <p>
        A big inspiration behind this site and my later life interest in history has been the quality of the history podcasts available on the internet.

        In particular, Dan Carlin's Hardcore History and Daniele Bolelli's History on fire, and Darryl Cooper's Martyrmade podcasts have all been amazing tools in helping me discover more
        about the past.
      </p>

      <h2>Here are the links to there material and socials:</h2>
        <div className="content">
        <div className="itemContainer podcasts">
          <h2>Dan Carlin - Hardcore History</h2>
          <img className="headImage"
            src={hardcoreHistoryLogo}>
          </img>
            <div>
              <a target="_blank" href='https://www.dancarlin.com/hardcore-history-series/'>
                <Button>
                  Hardcode History Link
                </Button>
              </a>
                <a target="_blank"  href='https://twitter.com/hardcorehistory'>
                  <img className="twitterLogo"
                       src={twitterLogo}>
                  </img>
                </a>
            </div>
        </div>
        <div className="itemContainer podcasts">
          <h2>Daniele Bolelli - History On Fire</h2>
          <img className="headImage"
               src={historyOnFireLogo}>
          </img>
          <div>
            <a target="_blank" href='http://historyonfirepodcast.com/'>
              <Button>
                History On Fire Link
              </Button>
            </a>
            <a target="_blank"  href='https://twitter.com/DBolelli?s=20'>
              <img className="twitterLogo"
                   src={twitterLogo}>
              </img>
            </a>
          </div>
        </div>
        <div className="itemContainer podcasts">
          <h2>Darryl Cooper - Martyrmade</h2>
          <img className="headImage"
               src={martrMade}>
          </img>
          <div>
            <a target="_blank" href='https://martyrmade.com/'>
              <Button>
                Martyrmade Link
              </Button>
            </a>
            <a target="_blank"  href='https://twitter.com/martyrmade?s=20'>
              <img className="twitterLogo"
                   src={twitterLogo}>
              </img>
            </a>
          </div>
        </div>
        </div>
    </div>
  );
}

export {Podcasts, ContactUs, Homepage}
