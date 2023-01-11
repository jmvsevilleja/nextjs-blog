import Layout from '../../components/layout';
import {getAllPostIds, getPostData} from '../../lib/posts';

export async function getStaticProps({params}) {
    console.log('getStaticProps params', params);
    const postData = getPostData(params.id);
    console.log('getStaticProps postData', postData);
    return {
        props: {
            postData,
        },
    };
}

export async function getStaticPaths() {
    const paths = getAllPostIds();
    console.log('getStaticPaths paths', paths);
    return {
        paths,
        fallback: false,
    };
}

export default function Post({postData}) {
    return (
        <Layout>
            {postData.title}
            <br />
            {postData.id}
            <br />
            {postData.date}
        </Layout>
    );
}