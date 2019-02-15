import React from 'react'
import Slideshow from "../components/slideshow"

//import images from images folder
import Img1 from '../images/moontains/moontains_01.jpg';
import Img2 from '../images/moontains/moontains_02.jpg';
import Img3 from '../images/moontains/moontains_03.jpg';
import Img4 from '../images/moontains/moontains_04.jpg';

//map images with title and date
const imagesList = [Img1,Img2,Img3,Img4];

const Moontains = () => (
  <Slideshow
    images={imagesList}
    galleryTitle="Moontains"
    galleryPhotographer="Matteo Tressi"
  />
)

export default Moontains
