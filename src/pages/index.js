import React from 'react'
import Helmet from 'react-helmet'
import Header from "../components/header"
import GalleryCard from "../components/galleryCard"

import '../styles/def.scss'

import Moontains from '../images/cartasu.ga_01.jpg';


const IndexPage = () => (
  <div>
    <Header />
    <Helmet
      title='cartasu.ga'
    />
    <GalleryCard
      title='moontains'
      img={Moontains}
      photographer='Matteo Tressi'
    />
    <GalleryCard
      title='moontains'
      img={Moontains}
      photographer='Matteo Tressi'
      rightImage={true}
    />
    <GalleryCard
      title='moontains'
      img={Moontains}
      photographer='Matteo Tressi'
    />
  </div>
)

export default IndexPage
