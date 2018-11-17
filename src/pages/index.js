import React from 'react'
import Slideshow from "../components/slideshow"

const imagesList = [
  {
    image: '../images/cartasu.ga_01.jpg',
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
