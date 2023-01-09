import PropTypes from 'prop-types';
import { GalleryItem, Image } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({
  webformatURL,
  largeImageURL,
  onSelect,
  tags,
}) => {
  return (
    <GalleryItem onClick={() => onSelect({ largeImageURL, tags })}>
      <Image src={webformatURL} alt={tags} />
    </GalleryItem>
  );
};

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
};
