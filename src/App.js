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

  componentDidMount() {
    // const parsedContacts = JSON.parse(localStorage.getItem('contacts'))
    // this.setState({ contacts: parsedContacts })
  }

  componentDidUpdate(prevProps, prevState) {
    // if (this.state.contacts !== prevState.contacts) {
    //   localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
    // }
  }

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
