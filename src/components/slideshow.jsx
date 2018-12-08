import React, { Component } from 'react'
import Helmet from 'react-helmet'
import ImagesLoaded from 'react-images-loaded';

import '../styles/slideshow.scss'

export default class Slideshow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      img: 0, // set the current image number in array
      imgNumber: this.props.images.length, // reads the number of images in props array
      imgLoaded: false
    };
  }

  nextImg = () => {
    this.setState({ img: this.state.img + 1});
  }

  prevImg = () => {
    this.setState({ img: this.state.img - 1});
  }

  handleOnAlways = () => {
    this.setState({ imgLoaded: true});
  };

  render() {
    return (
      <div>
      <Helmet
        title={'cartasu.ga - ' + this.props.images[this.state.img].title}
      />
      <ImagesLoaded
        // elementType={'ul'} // defaults to 'div'
        className={'ImagesLoadedContainer'} // defaults to 'images-loaded-container'
        onAlways={this.handleOnAlways}
        onProgress={this.handleOnProgress}
        onFail={this.handleOnFail}
        done={this.handleDone}
        // background=".image" // true or child selector
      >
        {/* Your images */}
        {
          this.props.images.map((item, index) => <img className="slideshow__hidden" alt="" height="300" key={index} src={item.image} />)
        }
        {this.state.imgLoaded ? '' :
        <div className="slideshow__loading">
          <h1 className="slideshow__logo">cartasu.ga</h1>
          <div className="slideshow__loader" />
        </div>}
      </ImagesLoaded>
      <div className="slideshow__pictures" style={{ backgroundImage: `url(${this.props.images[this.state.img].image})`}} onMouseMove={this.mouseMoving}>
        <div className="slideshow__controls">
          <h1 className="slideshow__title">{this.props.images[this.state.img].title}</h1>
          <h2 className="slideshow__date">{this.props.images[this.state.img].date}</h2>
          {this.state.img < this.state.imgNumber-1 ? <button className="slideshow__button--next" onClick={this.nextImg}>Next</button> : ''}
          {this.state.img > 0 ? <button className="slideshow__button--prev" onClick={this.prevImg}>Prev</button> : ''}
        </div>
      </div>
      </div>
    );
  }
}
