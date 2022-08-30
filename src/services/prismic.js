import Prismic from '@prismicio/client'

export function getPrismicClient(req) {
  const prismic = Prismic.createClient(
    'https://poc-prismiccms.prismic.io/api/v2',
    {
      req,
      accessToken: 'MC5ZcnV0eHhFQUFDUUFjcXg3.77-977-977-977-977-977-9Be-_ve-_ve-_vTEg77-977-9QGTvv70iYu-_ve-_ve-_ve-_ve-_vU9G77-9Q2da77-9Hg'
    }
  )

  return prismic
}

