module.exports = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/test/test',
        permanent: true,
      },
    ]
  },
}