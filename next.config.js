const { withContentlayer } = require("next-contentlayer");

module.exports = withContentlayer({
  reactStrictMode: false,
  swcMinify: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'css')],
  },
  redirects: require("./next-redirects"),


});
