import React, { Component } from "react";
import { Overlay } from "./ModalStyled";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

class Modal extends Component {
    state = {
        onLoadImage: false,
    }


    componentDidMount() {
        window.addEventListener("keydown", this.handleEscape);
        const body = document.querySelector("body");
        body.style.overflow = "hidden";
        const imageIsLoad = document.querySelector(".modal");
        // imageIsLoad.onload = function () {
        //     console.log("Выключись")
        // };
        // this.loaderOff(imageIsLoad);
    }

    // loaderOff = (imageIsLoad) => {

    //     imageIsLoad.onload = function () {
    //         console.log("Выключись")
    //         this.setState({ onLoadImage: false })
    //     };
    // }

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
                    {onLoadImage ? <Loader
                        type="Puff"
                        color="#00BFFF"
                        height={300}
                        width={300}
                        timeout={3000}
                    /> : children}

                </div>
            </Overlay>
        );
    }
}

export default Modal;