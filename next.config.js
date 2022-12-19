module.exports = {
  async redirects() {
    return [
      {
        source: '/apis/*',
        destination: 'http://142.93.44.240:8100', // Matched parameters can be used in the destination
        permanent: true,
      },
    ]
  },
}
