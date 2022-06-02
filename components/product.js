import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/product.module.css';
import { convertToPath } from '../lib/utils';
import CartButton from './cartButton';

function Product({ item, showAs, qty }) {

    if (showAs === 'Page') {
        return (
            <div className={styles.page}>
                <div>
                    <Image alt={item.description} src={item.image} width={500} height={500} />
                </div>
                <div className={styles.info}>
                    <div><h2>{item.title}</h2></div>
                    <div className={styles.price}>${item.price}</div>
                    <div>{item.description}</div>
                    <div>
                        <CartButton item={item} />
                    </div>
                </div>
            </div>
        );
    }

    if (showAs === 'ListItem') {
        return (
            <div className={styles.listItem}>
                <div>
                    <Image alt={item.description} src={item.image} width={50} height={50} />
                </div>
                <div>
                    <div><h3>{item.title}</h3></div>
                    <div>${item.price}</div>
                    { qty === 0 ? '' : <div>{qty} unit(s)</div> }
                    { qty === 0 ? '' : <div>Subtotal: ${qty * item.price}</div> }
                </div>
            </div>
        );
    }

    return (
        <div className={styles.item}>
            <div>
                <Link href={`/store/${convertToPath(item.title)}`}>
                    <a>
                        <Image alt={item.description} src={item.image} width={500} height={500} />
                    </a>
                </Link>
            </div>
            <div>
                <h3>
                    <Link href={`/store/${convertToPath(item.title)}`}>
                        <a>{item.title}</a>
                    </Link>
                </h3>
            </div>
            <div>${item.price}</div>
            <div><CartButton item={item} /></div>
        </div>
    );

}

export default Product;