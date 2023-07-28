import { Component } from "react";
import { PropTypes } from "prop-types";

export class Button extends Component {
  render() {
    const { OnSubmit } = this.props;
    return (
      <button className='Button' onClick={OnSubmit}>
        Load More
      </button>
    );
  }
}

Button.propTypes = {
  OnSubmit: PropTypes.func,
};
