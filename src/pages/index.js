import React from 'react'
import Slideshow from "../components/slideshow"

import '../styles/def.scss'

//import images from images folder
import Img1 from '../images/cartasu.ga_01.jpg';
import Img2 from '../images/cartasu.ga_02.jpg';
import Img3 from '../images/cartasu.ga_03.jpg';
import Img4 from '../images/cartasu.ga_04.jpg';
import Img5 from '../images/cartasu.ga_05.jpg';
import Img6 from '../images/cartasu.ga_06.jpg';
import Img7 from '../images/cartasu.ga_07.jpg';
import Img8 from '../images/cartasu.ga_08.jpg';
import Img9 from '../images/cartasu.ga_09.jpg';
import Img10 from '../images/cartasu.ga_10.jpg';
import Img11 from '../images/cartasu.ga_11.jpg';
import Img12 from '../images/cartasu.ga_12.jpg';
import Img13 from '../images/cartasu.ga_13.jpg';
import Img14 from '../images/cartasu.ga_14.jpg';
import Img15 from '../images/cartasu.ga_15.jpg';

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
  },
  {
    image: Img3,
    title: 'Orobie Ronde',
    date: 'Agosto 2018'
  },
  {
    image: Img4,
    title: 'Orobie Ronde',
    date: 'Agosto 2018'
  },
  {
    image: Img5,
    title: 'Orobie Ronde',
    date: 'Agosto 2018'
  },
  {
    image: Img6,
    title: 'Orobie Ronde',
    date: 'Agosto 2018'
  },
  {
    image: Img7,
    title: 'Orobie Ronde',
    date: 'Agosto 2018'
  },
  {
    image: Img8,
    title: 'Orobie Ronde',
    date: 'Agosto 2018'
  },
  {
    image: Img9,
    title: 'Orobie Ronde',
    date: 'Agosto 2018'
  },
  {
    image: Img10,
    title: 'Orobie Ronde',
    date: 'Agosto 2018'
  },
  {
    image: Img11,
    title: 'Orobie Ronde',
    date: 'Agosto 2018'
  },
  {
    image: Img12,
    title: 'Orobie Ronde',
    date: 'Agosto 2018'
  },
  {
    image: Img13,
    title: 'Orobie Ronde',
    date: 'Agosto 2018'
  },
  {
    image: Img14,
    title: 'Orobie Ronde',
    date: 'Agosto 2018'
  },
  {
    image: Img15,
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
