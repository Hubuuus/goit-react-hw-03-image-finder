import { PropTypes } from "prop-types";
import { Component } from "react";

export class Searchbar extends Component {
  state = {
    searchValue: "",
  };

  handleChange = evt => {
    //Przechwytywanie wartości inputu
    const { name, value } = evt.target;
    this.setState({ [name]: value });
    console.log("searchValue:", this.state);
  };

  handleSubmit = evt => {
    evt.preventDefault();

    const { searchImg } = this.props;
    const searchValue = this.state.searchValue;
    searchImg(searchValue);
    //resety inputu
    this.setState({ searchValue: "" });
  };

  render() {
    const { search } = this.state;
    return (
      <header className='searchbar'>
        <form className='form' onSubmit={this.handleSubmit}>
          <button type='submit' className='button'>
            <span className='button-label'>Search</span>
          </button>

          <input
            onChange={this.handleChange}
            className='input'
            value={search}
            name='searchValue'
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
  searchImg: PropTypes.func,
};
