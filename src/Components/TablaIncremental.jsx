import { useState } from "react";
import { Button, Col, Container, Form, Row, Table } from "react-bootstrap"


function TablaIncremental() {
    const [rows, setRows] = useState([
        { precio: '', descripcion: '', precioUnitario: '', importe: '' },
    ]);
    const [total, setTotal] = useState(0);

    const handleInputChange = (index, event) => {
        const { name, value } = event.target;
        const updatedRows = [...rows];
        updatedRows[index] = { ...updatedRows[index], [name]: value };
        setRows(updatedRows);
    };

    const handleAddRow = () => {
        setRows([...rows, { precio: '', descripcion: '', precioUnitario: '', importe: '' }]);
    };

    const handleCalculateTotal = () => {
        let calculatedTotal = 0;
        rows.forEach((row) => {
            const importe = parseFloat(row.importe);
            if (!isNaN(importe)) {
                calculatedTotal += importe;
            }
        });
        setTotal(calculatedTotal);
    };

    return (
        <>
            <Container className="debug">
                <Table striped bordered >
                    <thead>
                        <tr>
                            <th>Precio</th>
                            <th>Descripción</th>
                            <th>Precio Unitario</th>
                            <th>Importe</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map((row, index) => (
                            <tr key={index}>
                                <td>
                                    <Form.Control
                                        type="text"
                                        name="precio"
                                        value={row.precio}
                                        placeholder="Ingrese el precio"
                                        onChange={(event) => handleInputChange(index, event)}
                                    />
                                </td>
                                <td>
                                    <Form.Control
                                        type="text"
                                        name="descripcion"
                                        value={row.descripcion}
                                        placeholder="Ingrese la descripción"
                                        onChange={(event) => handleInputChange(index, event)}
                                    />
                                </td>
                                <td>
                                    <Form.Control
                                        type="text"
                                        name="precioUnitario"
                                        value={row.precioUnitario}
                                        placeholder="Ingrese el precio unitario"
                                        onChange={(event) => handleInputChange(index, event)}
                                    />
                                </td>
                                <td>
                                    <Form.Control
                                        type="text"
                                        name="importe"
                                        value={row.importe}
                                        placeholder="Ingrese el importe"
                                        onChange={(event) => handleInputChange(index, event)}
                                    />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>

                <Row className="d-flex justify-content-end ">
                    <Col md={3} >
                        <Button onClick={handleAddRow}>Agregar fila</Button>
                    </Col>
                    <Col md={3} className=" d-flex m-1">
                        <Button onClick={handleCalculateTotal}>Calcular Total</Button>
                        <p className="debug p-2 m-1"> {'----->'} {total} {'<-----'}</p>
                    </Col>
                </Row>

            </Container>
        </>
    )
}

export default TablaIncremental