import { getPrismicClient } from '../../src/services/prismic'
// import styles from './styles.module.scss'
import Prismic from '../../src/services/prismic'

export default function Posts() {
  return (
    <>
    <Head>
      <title>Posts</title>
    </Head>

    <main className={styles.container}>
      <div className={styles.posts}>
        <a>

        </a>
      </div>
    </main>


    </>
    
  )
}

export const getStaticProps = async () => {
  const prismic = getPrismicClient()

  // const response = await prismic.getByType([
  //   Prismic.predicates.at('document.type', 'article'),
  // ], {
  //   fetch: ['publication.title', 'publication.content'],
  //   pageSize: 100,
  // })
  const response = await useAllPrismicDocumentsByType('article')

  console.log(response)

  return {
    props: {}
  }
}