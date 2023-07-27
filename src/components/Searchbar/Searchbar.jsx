import { PropTypes } from "prop-types";
import { Component } from "react";

export class Searchbar extends Component {
  render() {
    const { OnSubmit } = this.props;
    return (
      <header className='Searchbar'>
        <form className='SearchForm' onSubmit={OnSubmit}>
          <button type='submit' className='SearchForm-button'>
            <span className='SearchForm-button-label'>Search</span>
          </button>

          <input
            onChange={this.handleChange}
            className='SearchForm-input'
            name='name'
            type='text'
            required
            placeholder='Search images and photos'
          />
        </form>
      </header>
    );
  }
}
Searchbar.propTypes = {
  OnSubmit: PropTypes.func,
};
