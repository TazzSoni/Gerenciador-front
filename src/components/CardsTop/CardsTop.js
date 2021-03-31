import React from 'react';
import { Card } from 'react-bootstrap'
import { GiTakeMyMoney, GiReceiveMoney, GiPayMoney } from "react-icons/gi";


function CardsTop({ usuario }) {
    const styles = {
        icon: {
            justifyContent: "right",
            float: "right"
        },
        cardValor: {
            display: "flex",
            justifyContent: "center",
        },
        card: {
            margin: "1rem 1rem 1rem 0",
            width: '20.3rem',
        },
        col: {
            width: "10%"
        }

    }

    return (
        <>
            <Card bg='info' text='white' style={styles.card}>
                <Card.Header >Saldo Atual
                    <GiTakeMyMoney
                        size={50}
                        style={styles.icon}
                    />
                </Card.Header>
                <Card.Body>
                    <Card.Title style={styles.cardValor}>R$ {usuario.carteira}</Card.Title>
                </Card.Body>
            </Card>
            <Card bg='info' text='white' style={styles.card}>
                <Card.Header>Receitas
                    <GiReceiveMoney
                        size={50}
                        style={styles.icon}
                    />
                </Card.Header>
                <Card.Body>
                    <Card.Title style={styles.cardValor}>R$ {usuario.receita}</Card.Title>
                </Card.Body>
            </Card>
            <Card bg='info' text='white' style={styles.card}>
                <Card.Header>Despesas
                    <GiPayMoney
                        size={50}
                        style={styles.icon}
                    />
                </Card.Header>
                <Card.Body>
                    <Card.Title style={styles.cardValor}>R$ {usuario.despesas}</Card.Title>
                </Card.Body>
            </Card>


        </>
    );
}

export default CardsTop;
