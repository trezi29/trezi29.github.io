import React, { Component } from 'react';

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
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.date}</h2>
        <img width="300" src={this.props.images[this.state.img]}></img>
        {this.state.img < this.state.imgNumber-1 ? <button onClick={this.nextImg}>Next</button> : ''}
        {this.state.img > 0 ? <button onClick={this.prevImg}>Prev</button> : ''}
      </div>
    );
  }
}
