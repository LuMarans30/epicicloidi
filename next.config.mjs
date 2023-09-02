/** @type {import('next').NextConfig} */
import pkg from 'next-pwa'

const WithPWA = pkg

const withPWA = WithPWA({
    dest: 'public',
    register: true,
    scope: '/',
    sw: 'service-worker.js',
    dynamicStartUrlRedirect: '/index'
})

const nextConfig = withPWA({
    i18n: {
        locales: ["it"],
        defaultLocale: "it",
    }
})

export default nextConfig