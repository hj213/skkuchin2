import Head from "next/head";
import Navbar from "../components/Navbar";

const Layout = ({title, content, children}) => (
    <>
        <Head>
            <title>{title}</title>
            <meta name="description" content={content} ></meta>
        </Head>
        <Navbar/>
        <div className="container">
            {children}
        </div>
    </>
);

Layout.defaultProps = {
    title: '스꾸친',
    content: 'hos의 layout.js의 페이지입니다.'
}

export default Layout;