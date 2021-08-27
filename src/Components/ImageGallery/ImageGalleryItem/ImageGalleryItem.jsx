import { GalleryItem } from "./GalleryItemStyled";

const ImageGalleryItem = ({ webformatURL, largeImageURL, tag, openModalWithImage }) => {
    const openImage = () => openModalWithImage(largeImageURL);
    return (
        <GalleryItem>

            <img src={webformatURL} alt={tag} className="ImageGalleryItem-image" onClick={openImage} />

        </GalleryItem>
    );
}

export default ImageGalleryItem;