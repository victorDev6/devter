import Link from 'next/link'
import Layout from '../components/layout'
import styles from '../styles/faq.module.css'

// el ruteo en nextjs ya viene incluido, es decir, solo con crear un archivo en la carpeta pages y exportarlo
// nextjs entendera que es una nueva pagina


function faq() {
  return (
    <Layout title='Faq'>
      <div className={styles.faq}>
        <h2>FAQ</h2>

        <div>
          <h3>Do you ship internationally?</h3>
          <p>
            Yes, we ship internationally. Make sure to enter your entire 
            international address in english characters, Don´t forget the Postal 
            Code!
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default faq