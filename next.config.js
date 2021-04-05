module.exports = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/about-this-project/introduction',
        permanent: false,
      },
    ]
  },
  future: {
    webpack5: true,
  },
}
