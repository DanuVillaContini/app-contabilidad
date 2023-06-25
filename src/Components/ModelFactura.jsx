import { useEffect, useRef, useState } from "react";
import { Button, Col, Container, FloatingLabel, Form, Row, Table } from "react-bootstrap";
import Logo from '../assets/logo.jpg'
import html2canvas from "html2canvas";
import jsPDF from "jspdf";


function ModelFactura() {
    const [rows, setRows] = useState([
        { cantidad: "", descripcion: "", precio: "", venta: "" },
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
        setRows([...rows, { cantidad: "", descripcion: "", precio: "", venta: "" }]);
    };

    // -------- FUNCION CALCULAR TOTAL PARCIAL---------
    const handleCalculateTotal = () => {
        let calculatedTotal = 0;
        const updatedRows = rows.map((row) => {
            const cantidad = parseFloat(row.cantidad);
            const precio = parseFloat(row.precio);
            const venta = isNaN(cantidad) || isNaN(precio) ? "" : (cantidad * precio).toFixed(2);
            calculatedTotal += parseFloat(venta);
            return { ...row, venta };
        });
        setRows(updatedRows);
        setTotal(calculatedTotal);
    };

    useEffect(() => {
        if (totalFinal !== 0) {
            // Generar el contenido en formato PDF
            const inputContainer = printableRef.current;
            html2canvas(inputContainer).then((canvas) => {
                const imgData = canvas.toDataURL("image/png");
                const pdf = new jsPDF();
                const pdfWidth = pdf.internal.pageSize.getWidth();
                const pdfHeight = pdf.internal.pageSize.getHeight();
                pdf.addImage(imgData, "PNG", 0, 0,200, pdfWidth, pdfHeight);

                // Descargar el archivo PDF
                pdf.save("factura.pdf");
            });
        }
    }, [totalFinal]);

    // -------- FUNCION CALCULAR TOTAL FINAL---------
    const handleCalculateTotalFinal = () => {
        const totalDescuento = total - (total * (descuento / 100));
        const totalIVA = totalDescuento + (totalDescuento * (iva / 100));
        setTotalFinal(totalIVA.toFixed(2));
    };



    return (
        <>

            <Container className='custom-container-factura' ref={printableRef}>
                <div className="margin"></div>
                {/* ---- DATOS EMPRESA/ TIPO FACTURA Y FECHA/ TIPO DEL COMPRADOR ---- */}
                <Row className=''>
                    <Col md="4" lg="4" className='p-3 mx-2'>
                        <ul className='custom-list-info'>
                            <h2>SPACE LAPTOPS SRL</h2>
                            <li>San Martin 154 - SAN MIGUEL DE TUCUMAN</li>
                            <li>spaceLaptops_srl@gmail.org</li>
                            <li>Tel 0123 - 89644</li>
                            <li>CUIT: 48-4893644 -2</li>
                        </ul>
                    </Col>
                    <Col md="3" lg="4">
                        <img src={Logo} alt="logoEmpresa" className='custom-logo' />

                    </Col>
                    <Col md="2" lg="3" className='p-1'>
                        <Form.Control
                            className='m-2 inputs-custom'
                            required
                            type="text"
                            placeholder="Vendedor/a:"
                            aria-describedby="basic-addon1"
                        />

                        <FloatingLabel controlId="floatingSelect" label="Fecha de Emision">
                            <Form.Control
                                className='m-2 inputs-custom'
                                type="date" placeholder="Ingrese una fecha" />
                        </FloatingLabel>

                    </Col>
                </Row>


                {/* ---- DATOS DEL COMPRADOR ---- */}
                <Row className=''>
                    <Col md="6" lg="8" className='mx-5'>
                        <Form.Group className="m-1">
                            <Form.Control
                                className='inputs-custom'
                                required
                                type="text"
                                placeholder="Señor/a:"
                                aria-describedby="basic-addon1"
                            />
                        </Form.Group>
                        <Form.Group className="m-1">
                            <Form.Control
                                className='inputs-custom'
                                required
                                type="text"
                                placeholder="CUIT:"
                                aria-describedby="basic-addon1"
                            />
                        </Form.Group>
                        <Form.Group className="m-1">
                            <Form.Control
                                className='inputs-custom'
                                required
                                type="text"
                                placeholder="Domicilio:"
                                aria-describedby="basic-addon1"
                            />
                        </Form.Group>
                    </Col>
                    <Col md="4" lg="3" className=''>
                        <div className="m-1">
                            <FloatingLabel controlId="floatingSelect" label="Tipo de Factura" >
                                <Form.Select aria-label="Default select example" className='inputs-custom'>
                                    <option value="1">A</option>
                                    <option value="2">B</option>
                                    <option value="3">C</option>
                                    <option value="4">Recibo</option>
                                    <option value="5">Remito</option>
                                </Form.Select>
                            </FloatingLabel>
                        </div>
                        <div className="m-1">
                            <FloatingLabel controlId="floatingSelect" label="Tipo segun Rentas">
                                <Form.Select aria-label="Default select example" className='inputs-custom'>
                                    <option value="1">Consumidor Final</option>
                                    <option value="2">Resp. Inscripto</option>
                                    <option value="3">No Inscripto</option>
                                    <option value="4">Mono. Social</option>
                                    <option value="5">Responsable Mono.</option>
                                    <option value="6">Exento</option>
                                </Form.Select>
                            </FloatingLabel>
                        </div>
                    </Col>
                </Row>



                {/* ---- Tabla Crud  ---- */}
                <Row className="my-2 mx-1">
                    {/* ------- TABLA PRODUCTOS/PRECIOS -------  */}
                    <Table striped bordered className='table-custom '>
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
                </Row>

            </Container>

        </>
    )
}

export default ModelFactura