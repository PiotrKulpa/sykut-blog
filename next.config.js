module.exports = {
  webpack: (cfg) => {
      cfg.module.rules.push(
          {
              test: /\.md$/,
              loader: 'frontmatter-markdown-loader',
              options: { mode: ['react-component', 'html'] }
          }
      )
      return cfg;
  }
}

module.exports = {
    async redirects() {
      return [
        {
          source: '/blog',
          destination: '/blog/strona/1',
          permanent: true,
        },
      ]
    },
  }