import React, { Component } from 'react'
import Helmet from 'react-helmet'
import ImagesLoaded from 'react-images-loaded';
import Header from "../components/header"

import '../styles/slideshow.scss'

export default class Slideshow extends Component {
  constructor(props) {
    super(props);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.state = {
      img: 0, // set the current image number in array
      imgNumber: this.props.images.length, // reads the number of images in props array
      imgLoaded: false
    };
  }

// gallery controls

  nextImg = () => {
    this.setState({ img: this.state.img + 1});
  }

  prevImg = () => {
    this.setState({ img: this.state.img - 1});
  }

  handleOnAlways = () => {
    this.setState({ imgLoaded: true});
  };

  handleKeyPress = (event) => {
    if(event.key === 'ArrowRight'){
      // console.log('right arrow press! ')
      if(this.state.img < this.state.imgNumber-1){
        this.nextImg();
      }
    } else if(event.key === 'ArrowLeft'){
      // console.log('left arrow press! ')
      if(this.state.img > 0){
        this.prevImg();
      }
    }
  }



  componentDidMount() {
    //keyboard arrows binding
    document.addEventListener("keydown", this.handleKeyPress);
  }

  componentWillUnmount(){
    //keyboard arrows unbinding
    document.removeEventListener("keydown", this.handleKeyPress);
  }

  render() {
    return (
      <div>
        <Header />
        <Helmet
          title={'cartasu.ga - ' + this.props.galleryTitle}
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
            this.props.images.map((item, index) => <img className="slideshow__hidden" alt="" height="300" key={index} src={item} />)
          }
          {this.state.imgLoaded ? '' :
          <div className="slideshow__loading">
            <h1 className="slideshow__logo">cartasu.ga</h1>
            <div className="slideshow__loader" />
          </div>}
        </ImagesLoaded>
        <div className="slideshow__container">
          <div className="slideshow__pictures" style={{ backgroundImage: `url(${this.props.images[this.state.img]})`}}>
          </div>
          <div className="slideshow__controls">
            <button className={`slideshow__button${this.state.img > 0 ? '--prev' : '--hidden'}`} onClick={this.prevImg}>Prev</button>
            <button className={`slideshow__button${this.state.img < this.state.imgNumber-1 ? '--next' : '--hidden'}`} onClick={this.nextImg}>Next</button>
          </div>
          <div className="slideshow__info">
            <h1 className="slideshow__title">{this.props.galleryTitle}</h1>
            <h2 className="slideshow__photographer">{'ph. ' + this.props.galleryPhotographer}</h2>
          </div>
        </div>
      </div>
    );
  }
}
