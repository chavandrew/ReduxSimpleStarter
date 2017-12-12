import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const API_KEY = 'AIzaSyCrFAHKZB99coN22my-6MT6GdwSj731c00';
// create a new component--produce some HTML

const App = () =>  {
  return <div>Hi!</div>;
}





//taks this component's generated HTML and put it on the page(in the DOM)

ReactDOM.render(<App />, document.querySelector('.container'));
