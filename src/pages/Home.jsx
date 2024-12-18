import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Tokenomics from '../components/Tokenomics';
import Contacts from '../components/Contacts';
import Tweets from '../components/Tweets';
import Memes from '../components/Memes';
import Featured from '../components/Featured';

const Home = () => {
  return (
    <div>
      <Hero />
      <Featured direction="right" />
      <Tweets direction="right" />
      <About />
      <Tweets direction="left" />
      <Tokenomics />
      <Memes direction="right" />
      <Contacts />
    </div>
  )
}

export default Home;
