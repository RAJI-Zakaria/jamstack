// pages/Calculator.tsx
import { useState } from 'react';
import styles from '../../styles/calculator.module.css';
import {Col, Container, Row} from "@nextui-org/react";
import CardOption from "../../components/cards/CardOption";

const Calculator = () => {
    //hold the expressions : ex : 12+2/21*49 =
    const [expression, setExpression] = useState('');
    //hold the result
    const [result, setResult] = useState('');

    const handleButtonClick = (value: string) => {
        if (value === '=') {
            try {
                const calculatedResult = eval(expression);
                setResult(calculatedResult);
            } catch (error) {//if the expression is not correct show error message
                setResult('Invalid expression');
            }
        } else if (value === 'C') {//reset the inputs
            setExpression('');
            setResult('');
        } else {
            setExpression(prevExpression => prevExpression + value);
        }
    };

    return (

        <Container justify="center" className={styles.container}>
            <label>Expression</label>
            <Row justify="center">
                <Col span={12}>
                    <input type="text" className={styles['input-field']} value={expression} readOnly />
                </Col>
            </Row>
            <label>Result</label>
            <Row justify="center">
                <Col span={12}>
                    <input type="text" className={styles['input-field']} value={result} readOnly />
                </Col>
            </Row>

                <Row >
                    <button className={styles.button}  onClick={() => handleButtonClick('1')}>1</button>
                    <button className={styles.button}  onClick={() => handleButtonClick('2')}>2</button>
                    <button className={styles.button}  onClick={() => handleButtonClick('3')}>3</button>
                    <button className={styles.button}  onClick={() => handleButtonClick('+')}>+</button>
                </Row>
                <Row>
                    <button className={styles.button}  onClick={() => handleButtonClick('4')}>4</button>
                    <button className={styles.button}  onClick={() => handleButtonClick('5')}>5</button>
                    <button className={styles.button}  onClick={() => handleButtonClick('6')}>6</button>
                    <button className={styles.button}  onClick={() => handleButtonClick('-')}>-</button>
                </Row>
                <Row>
                    <button className={styles.button}  onClick={() => handleButtonClick('7')}>7</button>
                    <button className={styles.button}  onClick={() => handleButtonClick('8')}>8</button>
                    <button className={styles.button}  onClick={() => handleButtonClick('9')}>9</button>
                    <button className={styles.button}  onClick={() => handleButtonClick('*')}>*</button>
                </Row>
                <Row>
                    <button className={styles.button}  onClick={() => handleButtonClick('0')}>0</button>
                    <button className={styles.button}  onClick={() => handleButtonClick('.')}>.</button>
                    <button className={`${styles.button} ${styles.equal}`}  onClick={() => handleButtonClick('=')}>=</button>
                    <button className={styles.button}  onClick={() => handleButtonClick('/')}>/</button>
                </Row>
                <Row >
                    <button className={`${styles.button} ${styles.clear}`}  onClick={() => handleButtonClick('C')}>C</button>
                </Row>



        </Container>


    );
};

export default Calculator;
