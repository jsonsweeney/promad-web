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
};
