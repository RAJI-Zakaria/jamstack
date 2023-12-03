import { GetStaticProps, GetStaticPaths } from 'next';

type Article = {
    id: number;
    title: string;
    description: string;
};

type ArticleProps = {
    article: Article;
};

const ArticlePage = ({ article }: ArticleProps) => {
    return (
        <div className="p-4">
            <h1 className="text-3xl font-bold mb-4">{article.title}</h1>
            <p>{article.description}</p>
        </div>
    );
};

export const getStaticPaths: GetStaticPaths = async () => {
    const articles: Article[] = require('../../data/articles.json');
    const paths = articles.map((article) => ({
        params: { id: article.id.toString() },
    }));

    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps<ArticleProps> = async ({ params }) => {
    const articles: Article[] = require('../../data/articles.json');
    const article = articles.find((a) => a.id.toString() === params?.id);

    return {
        props: {
            article,
        },
    };
};

export default ArticlePage;
