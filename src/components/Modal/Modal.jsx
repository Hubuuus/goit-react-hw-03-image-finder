import { Component } from "react";
import { PropTypes } from "prop-types";

export class Modal extends Component {
  render() {
    const { img, alt, onClose, onKeyDown } = this.props;
    return (
      <div className='Overlay' onClick={onClose} onKeyDown={onKeyDown}>
        <div className='Modal'>
          <img src={img} alt={alt} />
        </div>
      </div>
    );
  }
  componentDidMount() {
    document.addEventListener("keydown", this.props.onKeyDown);
  }
}

Modal.propTypes = {
  img: PropTypes.string,
  alt: PropTypes.string,
  onClose: PropTypes.func,
  onKeyDown: PropTypes.func,
};

export default Modal;
