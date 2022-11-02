import { AppProps } from "next/app";
import Head from "next/head";
import { Fragment } from "react";

import Layout from "../components/Layout";

import '../styles/global.css';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <Fragment>
            <Head>
                <meta charSet='utf-8' />
                <meta name='viewport' content='width=device-width, initial-scale=1.0' />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="crossorigin" />
                <link href="https://fonts.googleapis.com/css2?family=Albert+Sans:wght@100&family=Manrope:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
                <title>Studio Tecnico Immobiliare EmmeDì</title>
            </Head>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </Fragment>
    );
}