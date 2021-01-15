import React from 'react';
import './Tabela.css'
import { Form } from 'react-bootstrap';

function Tabela(contas) {

    return (
        <tr>
            <td><Form.Check type="checkbox" /></td>
            <td>{contas.descricao}</td>
            <td>teste</td>
            <td>{contas.valor}</td>
        </tr>
    )
}
export default Tabela