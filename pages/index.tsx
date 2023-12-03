import Head from 'next/head';
import Header from '../components/header';
import { Container, Row, Col } from '@nextui-org/react';
import CardOption from '../components/cards/CardOption';

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>

      <main className="flex flex-col justify-between items-center p-24 min-h-screen">
        <Header />

        <Container>
          <Row justify="center" align="center" className="gap-4">
            <Col className="w-full md:w-1/2 lg:w-1/4">
              <CardOption
                title="Photos Api"
                icon="https://cdn-icons-png.flaticon.com/512/25/25694.png"
                link="/photos" 
              />
            </Col>
            <Col className="w-full md:w-1/2 lg:w-1/4">
              <CardOption
                title="Todos"
                icon="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                link="/todos"
              />
            </Col>
            <Col className="w-full md:w-1/2 lg:w-1/4">
              <CardOption
                title="Blogs"
                icon="https://www.onlygfx.com/wp-content/uploads/2017/12/grunge-yes-no-icon-1.png"
                link="/blogs"
              />
            </Col>
            <Col sm className="w-full md:w-1/2 lg:w-1/4">
              <CardOption
                title="Api using nextjs"
                icon="https://boumgrafik.com/wp-content/uploads/2021/02/api.png"
                link="/api/hello"
              />
            </Col>
          </Row>
        </Container>
      </main>
    </>
  );
}
