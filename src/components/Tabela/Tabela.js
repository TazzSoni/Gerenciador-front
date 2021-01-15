import React from 'react';
import './Tabela.css'
import { Form } from 'react-bootstrap';

function Tabela({ conta }) {

    return (
        <tr>
            <td><Form.Check type="checkbox" /></td>
            <td>{console.log(conta), conta.descricao}</td>
            <td>teste</td>
            <td>{conta.valor}</td>
        </tr>
    )
}
export default Tabela