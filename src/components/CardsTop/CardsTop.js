import React from 'react';
import { Card } from 'react-bootstrap'
import { GiTakeMyMoney, GiReceiveMoney, GiPayMoney } from "react-icons/gi";
import { AiFillCreditCard } from "react-icons/ai";
import './CardsTop.css'


function CardsTop({ usuario }) {
    return (
        <>
            <Card bg='info' text='white' className="card">
                <Card.Header>Saldo Atual
                    <GiTakeMyMoney size={50} className="iconCard"></GiTakeMyMoney>
                </Card.Header>
                <Card.Body>
                    <Card.Title id="cardValor">R$ {usuario.carteira}</Card.Title>
                </Card.Body>
            </Card>
            <Card bg='info' text='white' className="card">
                <Card.Header>Receitas
                    <GiReceiveMoney size={50} className="iconCard"></GiReceiveMoney>
                </Card.Header>
                <Card.Body>
                    <Card.Title id="cardValor">R$ {usuario.receita}</Card.Title>
                </Card.Body>
            </Card>
            <Card bg='info' text='white' className="card">
                <Card.Header>Despesas
                    <GiPayMoney size={50} className="iconCard"></GiPayMoney>
                </Card.Header>
                <Card.Body>
                    <Card.Title id="cardValor">R$ {usuario.despesas}</Card.Title>
                </Card.Body>
            </Card>
            <Card bg='info' text='white' className="card">
                <Card.Header>Cartão de Crédito
                    <AiFillCreditCard size={50} id="iconCardC"></AiFillCreditCard>
                </Card.Header>
                <Card.Body>
                    <Card.Title id="cardValor">R$ 1500,00</Card.Title>
                </Card.Body>
            </Card>
        </>
    );
}

export default CardsTop;
