async function redirects() {
  return [
    {
      source: "/docs",
      destination: "/",
      permanent: true,
    },
  ];
}

module.exports = redirects;
