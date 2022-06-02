import { useContext } from 'react';
import Link from 'next/link'
import styles from '../styles/menu.module.css'
import { AppContext } from './stateWrapper'

function Menu() {

  const cart = useContext(AppContext);
  const handleOpenCart = () => {
    cart.handleOpenCart();
  }

  return (
    <nav className={styles.menu}>
        <div>
            <Link href="/"><a className={styles.link}>Home</a></Link>
            <Link href="/store"><a className={styles.link}>Store</a></Link>
            <Link href="/faq"><a className={styles.link}>FAQ</a></Link>
        </div>
        <div>
            <a onClick={handleOpenCart} className={styles.link} href='#'>Cart ({ cart.getNumberOfItems() })</a>
        </div>
    </nav>
  )
}

export default Menu