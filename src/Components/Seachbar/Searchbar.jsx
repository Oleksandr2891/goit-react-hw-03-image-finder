import { Component } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SearchbarWrapper } from './SearchbarStyled';


class Searchbar extends Component {
    state = {
        imageNameSearch: '',
    };

    handleImageNameChange = event => {
        this.setState({ imageNameSearch: event.currentTarget.value.toLowerCase() })
    }


    handleSubmit = event => {
        event.preventDefault();

        const notify = () => toast.warn('Для нового поиска изображения необходимо ввести слово!');
        if (this.state.imageNameSearch.trim() === '' & this.state.imageNameSearch.length) {
            notify();
            return;
        }

        this.props.onSubmit(this.state.imageNameSearch);
        this.setState({ imageNameSearch: '' });
    }


    render() {
        return (
            <SearchbarWrapper>
                <form className="SearchForm" onSubmit={this.handleSubmit}>
                    <button type="submit" className="SearchForm-button">
                        <span className="SearchForm-button-label">Search</span>
                    </button>

                    <input
                        className="SearchForm-input"
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                        name="imageNameSearch"
                        onChange={this.handleImageNameChange}
                    />
                </form>
            </SearchbarWrapper>
        );
    }
}

export default Searchbar