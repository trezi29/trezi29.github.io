import React, { Component } from 'react'
import Slideshow from "../components/slideshow"

//import images from images folder
import Img1 from '../images/moontains/moontains_01.jpg';
import Img2 from '../images/moontains/moontains_02.jpg';
import Img3 from '../images/moontains/moontains_03.jpg';

//map images with title and date
let imagesList = [Img1, Img2, Img3];

export default class Moontains extends Component {
  render() {
    return (
      <Slideshow
        images={imagesList}
        galleryTitle="Moontains"
        galleryPhotographer="Matteo Tressi"
      />
    );
  }
}
