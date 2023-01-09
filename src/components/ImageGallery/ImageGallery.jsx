import PropTypes from 'prop-types';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { GalleryList } from './ImageGallery.styled';

export const ImageGallery = ({ images, onSelect }) => {
  return (
    <GalleryList>
      {images.map(({ id, webformatURL, largeImageURL, tags }) => {
        return (
          <ImageGalleryItem
            key={id}
            webformatURL={webformatURL}
            tags={tags}
            largeImageURL={largeImageURL}
            onSelect={onSelect}
          />
        );
      })}
    </GalleryList>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
  onSelect: PropTypes.func.isRequired,
};
