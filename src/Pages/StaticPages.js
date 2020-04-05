import React from 'react';

const Homepage = () => {
  return (
    <div className="container">
      <h1> Home </h1>
      <p>
        Greetings! This site is all about history.
        <br/>
        <br/>
        I believe every single person should have a rounded concept of the greatest events that have occurred during the time
        that history has been recorded.
        <br/>
        <br/>
        Also, get a picture of the key characters of the past, both ''good' and 'bad'.
      </p>
    </div>
  );
}

const ContactUs = () => {
  return (
    <div className="container">
      <h1> Contact Us </h1>
      <p>
        Contact for me any info: neil_duk@yahoo.com
      </p>

    </div>
  );
}

const Podcasts = () => {
  return (
    <div className="container">
      <h1> Podcasts </h1>

      <p>
        A big inspiration behind this site is the quality of history podcasts available on the web.

        In particular, Dan Carlins Hardcore History and Daneile Boleli History on fire have been amazing tools in helping me discover more
        about the past.
      </p>

    </div>
  );
}

export {Podcasts, ContactUs, Homepage}
