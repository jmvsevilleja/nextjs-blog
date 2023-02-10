import Layout from '../../components/layout';
import {getAllPostIds, getPostData} from '../../lib/posts';
import Head from 'next/head';
import Date from '../../components/date';
import utilStyles from '../../styles/utils.module.css';

export async function getStaticProps({params}) {
    console.log('getStaticProps params', params);
    const postData = await getPostData(params.id);
    console.log('getStaticProps postData', postData);
    return {
        props: {
            postData,
        },
        revalidate: 1, // In seconds
    };
}

export async function getStaticPaths() {
    const paths = getAllPostIds();
    console.log('getStaticPaths paths', paths);
    return {
        paths,
        fallback: 'blocking',
    };
}

export default function Post({postData}) {
    return (
        <Layout>
            <Head>
                <title>{postData.title}</title>
            </Head>
            <article>
                <h1 className={utilStyles.headingXl}>{postData.title} JS</h1>
                <div className={utilStyles.lightText}>
                    <Date dateString={postData.date} />
                </div>
                <div dangerouslySetInnerHTML={{__html: postData.contentHtml}} />
            </article>
        </Layout>
    );
}