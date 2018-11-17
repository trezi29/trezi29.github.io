import React from 'react'
import Slideshow from "../components/slideshow"

import '../styles/def.scss'

//import images from images folder
import Img1 from '../images/cartasu.ga_01.jpg';

const imagesList = [
  {
    image: {Img1},
    title: 'Orobie Ronde 01',
    date: 'Agosto 2018'
 },
  {
    image: '../images/cartasu.ga_02.jpg',
    title: 'Orobie Ronde 02',
    date: 'Agosto 2018'
  }
];

const IndexPage = () => (
  <div>
    <Slideshow
      images={imagesList}
    />
  </div>
)

export default IndexPage
