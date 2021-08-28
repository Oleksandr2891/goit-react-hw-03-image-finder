import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import GlobalStyles from "../src/style/GlobalStyle";
import ImageGallery from './Components/ImageGallery/ImageGallery';
import Searchbar from './Components/Seachbar/Searchbar';


class App extends Component {
  state = {
    imageNameSearch: '',
  };

  handleFormSubmit = imageNameSearch => {
    this.setState({ imageNameSearch })
  }

  render() {
    return (
      <>
        <GlobalStyles />
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery imageNameSearch={this.state.imageNameSearch} />
        <ToastContainer />
      </>
    );
  }
}

export default App
