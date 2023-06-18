import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Header from '../components/header'
import Link from 'next/link';

import { Container, Row, Col } from '@nextui-org/react';

import CardOption from '../components/cards/CardOption'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>


      <main className={styles.main}>
        <Header />



          <Container>

              <Row justify="center" align="center">
                  <Col>
                      <Row gap={1}  aria-colspan={4} justify="center" align="center">
                          <Col span={4}>
                              <CardOption title="Photos Api" icon="https://cdn-icons-png.flaticon.com/512/25/25694.png" link="/photos" />
                          </Col>
                          <Col span={4}>
                              <CardOption title="Todos" icon="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" link="/todos" />
                          </Col>
                          <Col span={4}>
                              <CardOption title="Blogs" icon="https://www.onlygfx.com/wp-content/uploads/2017/12/grunge-yes-no-icon-1.png" link="/blogs" />
                          </Col>
                          <Col span={4}>
                              <CardOption title="Blogs" icon="https://www.onlygfx.com/wp-content/uploads/2017/12/grunge-yes-no-icon-1.png" link="/blogs" />
                          </Col>
                      </Row>

                  </Col>
              </Row>
          </Container>



      </main>
    </>
  )
}
