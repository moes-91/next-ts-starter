import Head from "next/head";

export default function Header() {
    return (
        <>
            <Head>
                <title>Next-ts-starter</title>
                <meta name="format-detection" content="telephone=no" />
                <meta name="description" content="Next-ts-starter" />
                <meta httpEquiv='content-language' content='en-gb'></meta>
                <link rel="icon" href="/favicon.ico" />
            </Head>
        </>
    )
};