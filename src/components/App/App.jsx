import { Component } from 'react';
import { fetchImages } from '../../services/image-api';
import { ToastContainer, toast } from 'react-toastify';
import { Searchbar } from '../Searchbar/Searchbar';
import { ImageGallery } from '../ImageGallery/ImageGallery';
import { Button } from '../Button/Button';
import { GlobalStyle } from '../GlobalStyle';
import { AppStyled } from './App.styled';
import { Modal } from '../Modal/Modal';

export class App extends Component {
  state = {
    query: '',
    images: [],
    modalImg: {},
    page: 1,
    showModal: false,
  };

  async componentDidUpdate(prevProps, prevState) {
    try {
      const { page, query, images } = this.state;
      if (prevState.page !== page || prevState.query !== query) {
        this.setState({ isLoading: true });
        const response = await fetchImages(query, page);
        const data = response.hits.map(
          ({ id, largeImageURL, webformatURL }) => {
            return {
              id,
              webformatURL,
              largeImageURL,
            };
          }
        );
        this.setState({
          images: [...images, ...data],
          isLoading: false,
        });
      }
    } catch (error) {
      toast.error('Oops! Something went wrong! Please try again.');
    }
  }

  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  searchImage = ({ searchQuery }) => {
    const { query } = this.state;
    if (searchQuery !== query) {
      this.setState({
        images: [],
        page: 1,
      });
    }
    this.setState({
      query: searchQuery,
      page: 1,
    });
  };
  showModal = modalImg => {
    this.setState({ modalImg });
  };

  hideModal = () => {
    this.setState({ modalImg: {} });
  };

  render() {
    const { images, isLoading, modalImg } = this.state;
    return (
      <>
        <AppStyled>
          <Searchbar onSubmit={this.searchImage} />
          {images.length > 0 && (
            <ImageGallery images={images} onSelect={this.showModal} />
          )}
          {images.length > 11 && !isLoading && (
            <Button onClick={this.loadMore} />
          )}
          {/* {isLoading && <Loader />} */}
          {modalImg.largeImageURL && (
            <Modal modalImg={modalImg} onClose={this.hideModal} />
          )}
          <ToastContainer />
          <GlobalStyle />
        </AppStyled>
      </>
    );
  }
}
