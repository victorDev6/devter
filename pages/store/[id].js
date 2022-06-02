import Layout from "../../components/layout";
import Product from "../../components/product";
import { getItemData, getPathsFromIds } from "../../lib/utils";

// componente para crear rutas dinamicas
const ProductPage = ({ productInfo }) => {
    return (
        <Layout>
            <Product item={productInfo.data} showAs='Page' />
        </Layout>
    );
}
export default ProductPage;

// getStaticPaths: permite generar la ruta dinamica
export const getStaticPaths = async () => {
    const paths1 = await getPathsFromIds();

    return {
        // el nombre de la propiedad siempre debe ser paths
        paths: paths1,
        // si la ruta no existe se redirecciona a la ruta 404
        fallback: false
    }
}

// es como el useEffect se ejecuta primero
export const getStaticProps = async ({ params }) => {
    const id = params.id;
    const item = await getItemData(id);

    return {
        props: {
            productInfo: item
        }
    }
}
