import React, { Component } from 'react'

import '../styles/slideshow.scss'

export default class Slideshow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      img: 0, // set the current image number in array
      imgNumber: this.props.images.length // reads the number of images in props array
    };
  }

  nextImg = () => {
    this.setState({ img: this.state.img + 1});
  }

  prevImg = () => {
    this.setState({ img: this.state.img - 1});
  }

  render() {
    return (
      <div className="slideshow__pictures" style={{ backgroundImage: `url(${this.props.images[this.state.img].image})`}}>
        <div className="slideshow__controls">
          <h1>{this.props.images[this.state.img].title}</h1>
          <h2>{this.props.images[this.state.img].date}</h2>
          {this.state.img < this.state.imgNumber-1 ? <button className="slideshow__button--next" onClick={this.nextImg}>Next</button> : ''}
          {this.state.img > 0 ? <button className="slideshow__button--prev" onClick={this.prevImg}>Prev</button> : ''}
        </div>
      </div>
    );
  }
}
