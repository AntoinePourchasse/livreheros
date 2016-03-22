const $ = require('jquery');
const angular = require('angular');

const ReactDOM = require('react-dom');
const React = require('react');

const Link = require('./components/LinkComponent.jsx');


$(function(){
  ReactDOM.render(<Link title='Créer votre héros'/>,
  document.getElementById('appcontainer'));

})


