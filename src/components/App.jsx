import { Component } from "react";
import { Searchbar } from "./Searchbar/Searchbar";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { ImageGalleryItem } from "./ImageGalleryItem/ImageGalleryItem";
import { Button } from "./Button/Button";
import { Loader } from "./Loader/Loader";
import { Modal } from "./Modal/Modal";

class App extends Component {
  searchImg = searchValue => {
    console.log("Searching...", searchValue);
  };

  render() {
    return (
      <>
        <Searchbar searchImg={this.searchImg} />
        <ImageGallery />
        <ImageGalleryItem />

        <Button />
        <Loader />
        <Modal />
      </>
    );
  }
}

export default App;
