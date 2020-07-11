const title = 'elrypto - developer builder';
const description = 'Builder of scalable, performant modern web applications';

const SEO = {
  title,
  description,
  canonical: 'https://elrypto.dev',
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    url: 'https://elrypto.dev',
    title,
    description,
    images: [
      {
        url: 'https://elrypto.dev/static/images/og.jpg',
        alt: title,
        width: 1280,
        height: 720
      }
    ]
  },
  twitter: {
    handle: '@elrypto',
    site: '@elrypto',
    cardType: 'summary_large_image'
  }
};

export default SEO;
