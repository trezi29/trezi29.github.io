import React, { Component } from 'react'
import { navigate } from "gatsby"

import '../styles/galleryCard.scss'

export default class GalleryCard extends Component {
  render() {
    return (
      <div className={`galleryCard__container${this.props.rightImage ? '--right' : ''}`}>
        <img className="galleryCard__image" alt="" height="300" src={this.props.img} onClick={ () => navigate('/' + this.props.title)}/>
        <div className="galleryCard__descriptioContainer">
          <p className="galleryCard__title">{this.props.title}</p>
          {this.props.description === '' ? '' : <p className="galleryCard__description">{this.props.description}</p>}
          <div className="galleryCard__ph">
            <p>ph. </p>
            <p>{this.props.photographer}</p>
          </div>
        </div>
      </div>
    );
  }
}

GalleryCard.defaultProps = {
  description: '',
  rightImage: false
}
