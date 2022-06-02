import Image from "next/image";
import Layout from "../../components/layout"
import Product from "../../components/product";
import { getItems } from "../../services/itemService"
import styleItems from '../../styles/product.module.css'

function index({ items }) {
  return (
    <Layout title='store'>
      <h1>STORE</h1>
      <div className={styleItems.items}>
        {
          items && items.map(item => (
            <Product key={item.id} item={item}  />
          ))
        }
      </div>
    </Layout>
  )
}
export default index;

// se esta utilizando el metodo de static genertion de nextjs
// el cual trabaja con los archivos que se generan cuando se compila el codigo,
export const getStaticProps = async () => {
  const items = await getItems();
  return {
    props: {
      items
    }
  }
}



// nota: para el metodo de server side rendering se utiliza el metodo getServerSideProps


