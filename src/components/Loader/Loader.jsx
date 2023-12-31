import { Component } from "react";
import { Blocks } from "react-loader-spinner";

export class Loader extends Component {
  render() {
    return (
      <Blocks
        visible={true}
        height='80'
        width='80'
        ariaLabel='blocks-loading'
        wrapperStyle={{}}
        wrapperClass='Loader'
      />
    );
  }
}
