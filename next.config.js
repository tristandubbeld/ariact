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
}
