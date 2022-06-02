import { useContext } from 'react';
import styles from '../styles/cartButton.module.css'
import { AppContext } from './stateWrapper';

const CartButton = ({ item }) => {

    const cart = useContext(AppContext);

    const handleClick = () => {
        cart.addItemToCart(item);
        cart.handleOpenCart();
    }

    return ( 
        <button onClick={handleClick} className={styles.button}>Add to Cart</button>
    );
}

export default CartButton;
