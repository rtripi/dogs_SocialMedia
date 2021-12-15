import React from 'react';
import Feed from '../Components/Feed/Feed';
import Head from './Helper/Head';

const Home = () => {
  return (
    <section className="container mainContainer">
      <Head title="Home" description="Home do site dogs" />
      <Feed />
    </section>
  );
};

export default Home;
