import React from 'react';
import PropTypes from 'prop-types';
import {ImageGalleryStyled} from './Gallery.styled';
import { ImageGalleryItem } from '../GalleryItem/GaleryItem';


export const ImageGallery = ({ images = [{}], onOpenModal }) => {
    return (
      <ImageGalleryStyled>
        {images.map(image => (
          <ImageGalleryItem
            key={image.id}
            image={image}
            onOpenModal={onOpenModal}
          />
        ))}
      </ImageGalleryStyled>
    );
  };
  
  ImageGallery.propTypes = {
    images: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
    onOpenModal: PropTypes.func.isRequired,
  };