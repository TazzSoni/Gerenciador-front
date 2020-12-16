import React from 'react'
import { Card } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import {
    PieChart, Pie, Cell, Label
} from 'recharts';


function CardsMid() {

    const data = [
        { name: 'Group A', value: 400 },
        { name: 'Group B', value: 300 },
        { name: 'Group C', value: 300 },
        { name: 'Group D', value: 200 },
    ]
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
    const renderLabel = "R$ 1500,00"

    return (
        <Card className="cardMid" border="info" text="info">
            <Card.Body>
                <Card.Title >Gastos no mês</Card.Title>
                <PieChart width={800} height={400} >
                    <Pie
                        data={data}
                        cx={200}
                        cy={200}
                        innerRadius={160}
                        outerRadius={180}
                        fill="#8884d8"
                        paddingAngle={5}
                        dataKey="value"
                    > <Label position="center" style={{ fontSize: '40px', fill: '#17A2B8' }} >{renderLabel}</Label>
                        {
                            data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
                        }
                    </Pie>
                </PieChart>
            </Card.Body>
        </Card>

    )
}

export default CardsMid
