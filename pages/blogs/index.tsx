import { GetStaticProps } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Container, Row, Col } from '@nextui-org/react';

type Article = {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
};

type IndexProps = {
    articles: Article[];
};

const IndexPage = ({ articles }: IndexProps) => {
    return (
        <Container className='flex justify-center items-center h-full'>
            <Row className="p-4">
                <Col>
                    <h1 className="text-3xl font-bold mb-4">Blog</h1>
                    <ul className="space-y-4">
                        {articles.map((article) => (
                            <li key={article.id} className="flex items-center space-x-4">
                                <Link href={`/blogs/${article.id}`} passHref>
                                    <span className="flex items-center space-x-4">
                                        <div className="w-16 h-16 rounded-full overflow-hidden">
                                            <Image
                                                src={article.imageUrl}
                                                alt={article.title}
                                                width={64}
                                                height={64}
                                            />
                                        </div>
                                        <div>
                                            <h2 className="text-lg font-semibold">{article.title}</h2>
                                            <p className="text-gray-600">{article.description}</p>
                                        </div>
                                    </span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </Col>
            </Row>
        </Container>
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
