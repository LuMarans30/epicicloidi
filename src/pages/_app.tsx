import type { AppProps } from 'next/app'

import Layout from '@/app/components/Layout'

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
}