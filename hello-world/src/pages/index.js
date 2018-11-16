import React, { Component } from 'react';
import Slideshow from "../components/slideshow"
import List from "../components/list"

export default class App extends Component {
  render() {
    return (
      <div>
        <Slideshow
          images={['./cartasu.ga_01.jpg', './cartasu.ga_02.jpg']}
          title="Orobie Ronde"
          date="Agosto 2018"
        />
        <List items={['./cartasu.ga_01.jpg', './cartasu.ga_02.jpg']} />
      </div>
    );
  }
}
