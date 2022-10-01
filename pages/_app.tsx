import { AppProps } from "next/app";
import Head from "next/head";
import { Fragment } from "react";
import '../styles/global.css';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <Fragment>
            <Head>
                <meta charSet='utf-8' />
                <meta name='viewport' content='width=device-width, initial-scale=1.0' />
                <title>Studio Tecnico Immobiliare EmmeDì</title>
                <script src='https://cdn.tailwindcss.com' async />
            </Head>
            <Component {...pageProps} />
        </Fragment>
    );
}