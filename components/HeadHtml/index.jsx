import Head from "next/head";

const HeadHtml = ({ title, description, keywords }) => (
  <Head>
    <title>{title}</title>
    <meta name="author" content="Carolina Gonçalves" />
    <meta name="description" content={description} />
    <meta name="keywords" content={keywords} />
    <link rel="icon" href="/favicon.ico" />
  </Head>
);

export default HeadHtml;
