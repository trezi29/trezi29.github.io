import React from 'react'
import Slideshow from "../components/slideshow"

import '../styles/def.scss'

//import images from images folder
import Img1 from '../images/cartasu.ga_01.jpg';
import Img2 from '../images/cartasu.ga_02.jpg';

//map images with title and date
const imagesList = [
  {
    image: Img1,
    title: 'Orobie Ronde',
    date: 'Agosto 2018'
 },
  {
    image: Img2,
    title: 'Orobie Ronde',
    date: 'Agosto 2018'
  }
];

const IndexPage = () => (
  <Slideshow
    images={imagesList}
  />
)

export default IndexPage
