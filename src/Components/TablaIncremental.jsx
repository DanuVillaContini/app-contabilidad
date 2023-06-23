import { useRef, useState } from "react";
import { Button, Col, Container, FloatingLabel, Form, Row, Table } from "react-bootstrap";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";


function TablaIncremental() {
    const [rows, setRows] = useState([
        { cantidad: '', descripcion: '', precio: '', venta: '' },
    ]);
    const [total, setTotal] = useState(0);
    const [descuento, setDescuento] = useState(0);
    const [iva, setIVA] = useState(0);
    const [totalFinal, setTotalFinal] = useState(0);
    const printableRef = useRef(null);


    // -------- TABLA ---------
    const handleInputChange = (index, event) => {
        const { name, value } = event.target;
        const updatedRows = [...rows];
        updatedRows[index] = { ...updatedRows[index], [name]: value };
        setRows(updatedRows);
    };
    // -------- AGREGAR NUEVA FILA A LA TABLA ---------
    const handleAddRow = () => {
        setRows([...rows, { cantidad: '', descripcion: '', precio: '', venta: '' }]);
    };
    // -------- FUNCION CALCULAR TOTAL PARCIAL---------
    const handleCalculateTotal = () => {
        let calculatedTotal = 0;
        const updatedRows = rows.map((row) => {
            const cantidad = parseFloat(row.cantidad);
            const precio = parseFloat(row.precio);
            const venta = isNaN(cantidad) || isNaN(precio) ? '' : (cantidad * precio).toFixed(2);
            calculatedTotal += parseFloat(venta);
            return { ...row, venta };
        });
        setRows(updatedRows);
        setTotal(calculatedTotal);
    };
    // -------- FUNCION CALCULAR TOTAL FINAL---------
    const handleCalculateTotalFinal = () => {
        const totalDescuento = total - (total * (descuento / 100));
        const totalIVA = totalDescuento + (totalDescuento * (iva / 100));
        setTotalFinal(totalIVA);

        // Generar el contenido en formato PDF
        const inputContainer = printableRef.current;
        html2canvas(inputContainer).then((canvas) => {
            const imgData = canvas.toDataURL("image/png");
            const pdf = new jsPDF();
            pdf.addImage(imgData, "PNG", 10, 10, 190, 0);

            // Descargar el archivo PDF
            pdf.save("factura.pdf");
        });
    };
    return (
        <Container ref={printableRef}>

            {/* ------- TABLA PRODUCTOS/PRECIOS -------  */}
            <Table striped bordered className='table-custom my-2 mx-1'>
                <thead>
                    <tr>
                        <th>Cantidad</th>
                        <th>Descripción</th>
                        <th>Precio Unitario</th>
                        <th>Venta</th>
                        <th>+ Fila</th>
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row, index) => (
                        <tr key={index}>
                            <td className="col-2">
                                <Form.Control
                                    type="text"
                                    name="cantidad"
                                    value={row.cantidad}
                                    placeholder="Cantidad"
                                    onChange={(event) => handleInputChange(index, event)}
                                />
                            </td>
                            <td className="col-5">
                                <Form.Control
                                    type="text"
                                    name="descripcion"
                                    value={row.descripcion}
                                    placeholder="Descripción"
                                    onChange={(event) => handleInputChange(index, event)}
                                />
                            </td>
                            <td className="col-2">
                                <Form.Control
                                    type="text"
                                    name="precio"
                                    value={row.precio}
                                    placeholder="Precio por Unidad"
                                    onChange={(event) => handleInputChange(index, event)}
                                />
                            </td>
                            <td className="col-2">
                                <Form.Control
                                    type="text"
                                    name="venta"
                                    value={row.venta}
                                    placeholder="Venta"
                                    readOnly
                                />
                            </td>
                            <td className="col-1">
                                <Button onClick={handleAddRow} className="btt-custom">+</Button>

                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>


            {/* ------- CALCULAR TOTAL PARCIAL -------  */}
            <Row className="d-flex justify-content-end m-1 p-2">
                <Col md={2} lg={2} className="m-1">
                    <Button className="py-2 btt-custom " onClick={handleCalculateTotal}>Total Parcial</Button>
                </Col>
                <Col md={2} lg={2} className="m-1">
                    <Form.Control
                        className="inputs-custom"
                        type="text"
                        name="total"
                        value={total.toFixed(2)}
                        placeholder="$ _____"
                        readOnly
                    />
                </Col>
            </Row>


            {/* ------- DESCUENTO E IVA -------  */}
            <Row className="d-flex justify-content-end m-1 p-2">
                <Col md={2} lg={2} className="m-1">
                    <FloatingLabel controlId="floatingSelect" label="-Descuento %">
                        <Form.Control
                            className="inputs-custom"
                            type="number"
                            name="descuento"
                            value={descuento}
                            placeholder="Descuento (%)"
                            onChange={(event) => setDescuento(event.target.value)}
                        />
                    </FloatingLabel>

                </Col>
                <Col md={2} lg={2} className="m-1">
                    <FloatingLabel controlId="floatingSelect" label="+IVA %">
                        <Form.Control
                            className="inputs-custom"
                            type="number"
                            name="iva"
                            value={iva}
                            placeholder="IVA (%)"
                            onChange={(event) => setIVA(event.target.value)}
                        />
                    </FloatingLabel>

                </Col>
            </Row>


            {/* ------- CALCULAR TOTAL FINAL -------  */}
            <Row className="d-flex justify-content-end m-1 p-1">
                <Col md={2} lg={2} className="m-1">
                    <Button className="btt-custom" onClick={handleCalculateTotalFinal}>Total Final</Button>
                </Col>
                <Col md={2} lg={2} className="m-1">
                    <Form.Control
                        className="inputs-custom"
                        type="text"
                        name="totalFinal"
                        value={totalFinal}
                        placeholder="$ _____"
                        readOnly
                    />
                </Col>
            </Row>
        </Container>
    );
}

export default TablaIncremental;
