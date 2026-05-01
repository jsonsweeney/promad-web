module.exports = {
  async rewrites() {
    return [
      {
        source: "/privacy",
        destination: "/privacy.html",
      },
      {
        source: "/terms",
        destination: "/terms.html",
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/.well-known/:file",
        destination: "/api/.well-known/:file",
        permanent: false,
      },
    ];
  },
};
