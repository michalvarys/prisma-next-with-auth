module.exports = {
  async headers() {
    return [
      {
        source: '/api/:path*',
        headers: [
          { key: 'Access-Control-Allow-Credentials', value: 'true' },
          { key: 'Access-Control-Allow-Origin', value: '*' },
          {
            key: 'Access-Control-Allow-Methods',
            value: 'GET,OPTIONS,PATCH,DELETE,POST,PUT',
          },
        ],
      },
    ]
  },
  async rewrites() {
    return [
      {
        source: '/api:path',
        destination: `${process.env.NEXT_PUBLIC_API_URL}/api:path`,
      },
    ]
  },
  webpack(config, { isServer }) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            svgoConfig: {
              plugins: [
                {
                  removeViewBox: false,
                  ref: true,
                },
              ],
            },
            title: true,
          },
        },
      ],
    })

    return config
  },
  i18n: {
    locales: ['cs', 'en'],
    defaultLocale: 'cs',
  },
  serverRuntimeConfig: {
    JWT_SECRET: 'changeMe',
  },
}
