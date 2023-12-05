import { GetStaticProps, GetStaticPaths } from 'next';
import { ParsedUrlQuery } from 'querystring';

type Article = {
    id: number;
    title: string;
    description: string;
};

type ArticleProps = {
    article: Article;
};

const ArticlePage = ({ article }: ArticleProps) => {
    if (!article) {
        // Handle the case where the article is not found
        return <div>Article not found</div>;
    }

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

    if (!article) {
        // If the article with the given ID is not found, return a not found page
        return {
            notFound: true,
        };
    }

    return {
        props: {
            article,
        },
    };
};

export default ArticlePage;
