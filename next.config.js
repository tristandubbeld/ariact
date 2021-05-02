module.exports = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/introduction/about-this-project',
        permanent: false,
      },
    ]
  },
  future: {
    webpack5: true,
  },
}
