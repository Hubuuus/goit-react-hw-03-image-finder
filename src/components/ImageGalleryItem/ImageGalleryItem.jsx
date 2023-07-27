import { PropTypes } from "prop-types";
import { Component } from "react";

export class ImageGalleryItem extends Component {
  render() {
    const { smallUrl, alt, onClick } = this.props;
    return (
      <li className='ImageGalleryItem'>
        <img className='ImageGalleryItem-image' src={smallUrl} alt={alt} onClick={onClick} />
      </li>
    );
  }
}

ImageGalleryItem.propTypes = {
  smallUrl: PropTypes.string,
  alt: PropTypes.string,
  bigFormatUrl: PropTypes.string,
  onClick: PropTypes.func,
};
