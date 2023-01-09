import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import { Overlay, ModalWindow } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      this.props.onClose();
    }
  };

  render() {
    const {
      modalImg: { largeImageURL },
    } = this.props;
    return createPortal(
      <Overlay onClick={this.handleBackdropClick}>
        <ModalWindow>
          <img src={largeImageURL} alt="Large" />
        </ModalWindow>
      </Overlay>,
      modalRoot
    );
  }
}
