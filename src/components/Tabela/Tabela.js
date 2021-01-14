import React from 'react';
import './Tabela.css'
import { Form } from 'react-bootstrap';

function Tabela(contas) {

    return (
        <tbody>
            <tr>
                <td><Form.Check type="checkbox" /></td>
                <td>{contas.descricao}</td>
                <td>{contas.data}</td>
                <td>{contas.valor}</td>
            </tr>
        </tbody>
    )
}
export default Tabela