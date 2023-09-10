/** @type {import('next').NextConfig} */
import pkg from 'next-pwa'

const WithPWA = pkg

const withPWA = WithPWA({
    dest: 'public',
    register: true,
    scope: '/',
    sw: 'service-worker.js',
    dynamicStartUrlRedirect: '/index',
    disable: process.env.NODE_ENV === "development"
})

const nextConfig = withPWA({
    i18n: {
        locales: ["it"],
        defaultLocale: "it",
    },
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: ["@svgr/webpack"]
        });

        return config;
    }
})

export default nextConfig