import { ButtonLoader } from "./ButtonStyled";


const Button = ({ onHandleLoadMore }) => {
    const loadMore = () => onHandleLoadMore()
    return (
        <ButtonLoader>
            <button type="button" onClick={loadMore} className="Button">Load more</button>
        </ButtonLoader>
    );
}

export default Button;