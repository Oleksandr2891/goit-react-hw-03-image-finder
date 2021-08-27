import { Component } from 'react';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import { toast } from 'react-toastify';
import Api from '../../utils/Api'
import Button from '../Button/Button';
import Modal from '../Modal/Modal';

import { ImageGalleryList } from './ImageGalleryStyled';

import 'react-toastify/dist/ReactToastify.css';




class ImageGallery extends Component {
    state = {
        imageNameSearch: '',
        page: 1,
        imageData: null,
        isModalOpen: false,
        setImagePath: '',
    };


    async componentDidUpdate(prevProps, prevState) {
        const prevName = prevProps.imageNameSearch;
        const nextName = this.props.imageNameSearch;
        const prevPage = prevState.page;
        const { page } = this.state;
        const notifySuccess = () => toast.success('Поиск успешно выполнен!!!');
        const notifyError = () => toast.error('По вашему запросу ничего не найдено');
        if (prevName !== nextName) {
            this.setState({ page: 1 });
            try {
                const response = await Api(nextName, page);

                if (response.length) {
                    this.setState({ imageData: response })
                    notifySuccess();
                } else {
                    return notifyError();
                }
            } catch (error) {
                alert(error);
            }
        }
        if (prevPage !== page) {
            try {
                const response = await Api(nextName, page);

                if (response.length) {
                    this.setState((prevState) => ({ imageData: [...prevState.imageData, ...response] }))

                } else {
                    return notifyError();
                }
            } catch (error) {
                alert(error);
            } finally {
                window.scrollTo({
                    top: document.documentElement.scrollHeight,
                    behavior: 'smooth',
                })
            }
        }
    }


    closeModal = () =>
        this.setState({ isModalOpen: false, setImagePath: '' })

    openModalWithImage = (path) => {
        this.setState({ isModalOpen: true, setImagePath: path })

    }

    onHandleLoadMore = () => {
        this.setState((prevState) => ({ page: prevState.page + 1 }))
    }


    render() {
        const { imageData, isModalOpen, setImagePath } = this.state;
        return (
            <>
                <ImageGalleryList>
                    {imageData && imageData.map(({ id, webformatURL, largeImageURL, tag }) => {
                        return < ImageGalleryItem
                            key={id}
                            id={id}
                            tag={tag}
                            webformatURL={webformatURL}
                            largeImageURL={largeImageURL}
                            openModalWithImage={this.openModalWithImage} />
                    })}
                </ImageGalleryList>
                {imageData?.length && <Button onHandleLoadMore={this.onHandleLoadMore} />}
                {isModalOpen && (
                    <Modal closeModal={this.closeModal}>
                        <img src={setImagePath} width="1000" height="800" alt="ItisPhoto" className="imageInModal" />
                    </Modal>
                )}
            </>
        );
    }
}

export default ImageGallery