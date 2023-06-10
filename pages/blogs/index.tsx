import { GetStaticProps } from 'next';
import Link from 'next/link';

type Article = {
    id: number;
    title: string;
    description: string;
};

type IndexProps = {
    articles: Article[];
};

const IndexPage = ({ articles }: IndexProps) => {
    return (
        <div>
            <h1>Blog</h1>
            <ul>
                {articles.map((article) => (
                    <li key={article.id}>
                        <Link href={`/blogs/${article.id}`}>
                           {article.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export const getStaticProps: GetStaticProps<IndexProps> = async () => {
    const articles: Article[] = require('../../data/articles.json');

    return {
        props: {
            articles,
        },
    };
};

export default IndexPage;
