import React, { Component } from "react";
import { Overlay } from "./ModalStyled";
import PropTypes from 'prop-types';
import LoaderSpiner from "../Loader/Loader";


class Modal extends Component {
    state = {
        onLoadImage: false,
    };

    componentDidMount() {
        window.addEventListener("keydown", this.handleEscape);
        const body = document.querySelector("body");
        body.style.overflow = "hidden";
        this.showLoaderForSrc();
    }

    showLoaderForSrc = () => {
        const imageIsLoad = document.querySelector(".imageInModal");
        this.setState({ onLoadImage: true });
        const context = this;
        imageIsLoad.onload = function () {
            context.setState({ onLoadImage: false });
        };
    };

    componentWillUnmount() {
        window.removeEventListener("keydown", this.handleEscape);
        const body = document.querySelector("body");
        body.style.overflow = "auto";
    }

    handleEscape = (e) => e.code === "Escape" && this.props.closeModal();

    onOverlayClick = ({ target, currentTarget }) => {
        target === currentTarget && this.props.closeModal();
    };

    render() {
        const { children } = this.props;
        const { onLoadImage } = this.state;
        return (
            <Overlay onClick={this.onOverlayClick}>
                <div className='modal'>
                    {onLoadImage ? <LoaderSpiner /> : children}
                </div>
            </Overlay>
        );
    }
}

export default Modal;

Modal.propTypes = {
    children: PropTypes.object,
}