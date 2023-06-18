import { useRouter } from 'next/router';
import { Card, Row, Col } from '@nextui-org/react';
import React from "react";
import Link from "next/link";

type CardProps = {
    title: string;
    icon: string;
    link: string;
};

const Cardoption: React.FC<CardProps> = ({ title, icon, link }) => {
    const router = useRouter();

    const handleClick = () => {
        router.push(link);
    };

    return (
        <Link href={link}>
        <Card
            onClick={handleClick}
            style={{
                borderRadius: '8px',
                transition: 'background-color 0.3s',
                cursor: 'pointer',
            }}
            className="card"
        >
            <Card.Body style={{
                textAlign: 'center'
            }}>
                <Row align="center" justify="center">
                    <Col>
                        <img height="120" src={icon} alt="Icon" />
                    </Col>
                </Row>
                <Row align="center" justify="center">
                    <Col>
                        <h3>{title}</h3>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
        </Link>
    );
};

export default Cardoption;
