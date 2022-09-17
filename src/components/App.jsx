import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import Searchbar from "./Searchbar/Searchbar";
import ImageGallery from "./ImageGallery/ImageGallery"


export default class App extends Component {
  state = {
    searchKey: '',
  };
  
  handleFormSubmit = searchKey => {
    this.setState({ searchKey });
  };
  
  render() {
    return (
      <div>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery searchKey={this.state.searchKey} />
        <ToastContainer autoClose={3000} position="top-right"/>
      </div>
    );
  };
}