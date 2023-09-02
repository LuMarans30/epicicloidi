/** @type {import('next').NextConfig} */
import pkg from 'next-pwa'

const WithPWA = pkg

const withPWA = WithPWA({
    dest: 'public',
})

const nextConfig = withPWA({
    i18n: {
        locales: ["it"],
        defaultLocale: "it",
    }
})

export default nextConfig