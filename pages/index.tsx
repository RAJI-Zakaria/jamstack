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

      <main className="flex flex-col justify-between items-center p-4 md:p-8 lg:p-12 min-h-screen">
        <Header />

        <Container>
          <Row justify="center" align="center" className="gap-4">
            {/* For small and extra small screens, display only two cards */}
            <Col className="w-full md:w-1/2">
              <CardOption
                title="Photos Api"
                icon="https://cdn-icons-png.flaticon.com/512/25/25694.png"
                link="/photos" 
              />
            </Col>
            <Col className="w-full md:w-1/2">
              <CardOption
                title="Todos"
                icon="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                link="/todos"
              />
            </Col>
            {/* For larger screens, display more cards */}
            <Col className="hidden sm:block w-full md:w-1/2 lg:w-1/3 xl:w-1/4">
              <CardOption
                title="Blogs"
                icon="https://www.onlygfx.com/wp-content/uploads/2017/12/grunge-yes-no-icon-1.png"
                link="/blogs"
              />
            </Col>
            <Col className="hidden sm:block w-full md:w-1/2 lg:w-1/3 xl:w-1/4">
              <CardOption
                title="Api using nextjs"
                icon="https://boumgrafik.com/wp-content/uploads/2021/02/api.png"
                link="/api/hello"
              />
            </Col>
            <Col className="hidden sm:block w-full md:w-1/2 lg:w-1/3 xl:w-1/4">
              <CardOption
                title="Api using nextjs"
                icon="https://m.media-amazon.com/images/I/71hSAIENHkL._AC_UF894,1000_QL80_.jpg"
                link="/calculator"
              />
            </Col>
          </Row>
        </Container>
      </main>
    </>
  );
}
