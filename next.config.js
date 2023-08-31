/** @type {import('next').NextConfig} */
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

const nextConfig = {
    i18n: {
        locales: ["it"],
        defaultLocale: "it",
    },
    //Webpack bundle analyzer
    webpack: (config, { isServer }) => {
        if (!isServer) {
            config.plugins.push(new BundleAnalyzerPlugin({
                analyzerMode: 'server',
                analyzerPort: 8888,
                openAnalyzer: true,
            }))
        }
        return config
    }
}

module.exports = nextConfig