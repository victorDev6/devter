import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Layout from '../components/layout'
import Product from '../components/product'
import { getLatestItems } from '../services/itemService'
import styles from '../styles/Home.module.css'
import stylesProduct from '../styles/product.module.css'

export default function Home({ items }) {
  return (
    <Layout title='Home'>
      <div className={styles.banner}>
        <div className={styles.bannerBackground}>
          <div className={styles.bannerInfo}>
            <h2>Shop the summer 2022 collection</h2>
            <p>
              lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Quisquam doloremque quia quos quaerat quidem dolore dolorem dolorum  
              voluptate,
            </p>
          </div>
        </div>
      </div>

      <h3>Latest Products</h3>
      <div className={stylesProduct.items}>
        {
          items && items.map(item => (
            <Product key={item.id} item={item} showAs='item' />
          ))
        }
      </div>
    </Layout>
  )
}

export const getStaticProps = async () => {
  const res = await getLatestItems();

  return {
    props: {
      items: res
    }
  }
}
