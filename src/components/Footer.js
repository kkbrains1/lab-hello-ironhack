// eslint-disable-next-line 
import React, { Component } from 'react';
//import declarative from '/images/icon1.png';
//import components from '/images/icon2.png';
//import singleWay from '/images/icon3.png';
//import JSX from 'images/icon4.png';

const footer = () => {
  return (
    <footer className="footer">
      <img src="/images/icon1.png" alt="declarative logo"/>
      <p>React makes it painless to create interactive UIs.</p>
      <img src="/images/icon2.png" alt="components logo"/>
      <p>Build encapsulated components that manage their state.</p>
      <img src="/images/icon3.png" alt="single way logo"/>
      <p>A set of immutable values are passed to the component's.</p>
      <img src="/images/icon4.png" alt="JSX logo"/>
      <p>Statically-typed, designed to run on modern browsers.</p>
    </footer>
  );
}

export default footer;
