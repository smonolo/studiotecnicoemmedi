import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html>
            <Head>
                <script src='https://cdn.tailwindcss.com' />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}