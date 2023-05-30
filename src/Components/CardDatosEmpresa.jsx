import { Col, Container, Form,  Row } from "react-bootstrap"
import TablaIncremental from "./TablaIncremental";


function CardDatosEmpresa(props) {

    return (
        <>
            <Container className=" ">
                <Row className="d-flex justify-content-center">
                    <Col xs={6} md={4} lg={6} className="debug">
                        <h2>INTERPRISE SRL</h2>
                        <p>San Martin 154 - SAN MIGUEL DE TUCUMAN</p>
                        <p>interprise.srl@gmail.org</p>
                        <p>Tel 0123 - 89644</p>
                        <p>CUIT: 48-4893644 -2</p>
                    </Col>
                    <Col xs={6} md={4} lg={6} className="debug">
                        <Row className="d-flex " >
                            <Col className="debug text-center" lg={2}><span className="fs-1 ">{props.tipo}</span></Col>
                            <Col className="debug text-center" lg={10}><span className="fs-5">N° 00001 - 00065987</span></Col>
                        </Row>
                        <Row className="d-flex " >
                            <Col className="debug " lg={3}><span className="fs-3">{props.clase}</span></Col>
                            <Col className="debug " lg={9}>
                                <Form.Group controlId="formDate">
                                    <Form.Label >Fecha</Form.Label>
                                    <Form.Control type="date" placeholder="Ingrese una fecha" />
                                </Form.Group>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row className="d-flex justify-content-center debug">
                    <Form.Group className="m-1">
                        <Form.Control
                            required
                            type="text"
                            placeholder="Señor(es):"
                            aria-describedby="basic-addon1"
                        />
                    </Form.Group>
                    <Form.Group className="m-1">
                        <Form.Control
                            required
                            type="text"
                            placeholder="CUIT:"
                            aria-describedby="basic-addon1"
                        />
                    </Form.Group>
                    <Form.Group className="m-1">
                        <Form.Control
                            required
                            type="text"
                            placeholder="Domicilio:"
                            aria-describedby="basic-addon1"
                        />
                    </Form.Group>
                </Row>

                <Row>
                    <Col md={1} className="debug text-center"><span className="fs-3">IVA</span></Col>
                    <Col md={8} className="debug text-center">
                        <Form>
                            {['radio'].map((type) => (
                                <div key={`reverse-${type}`} className="mb-2 d-flex ">
                                    <Form.Check
                                        className="mx-1"
                                        reverse
                                        label="Responsable Inscripto"
                                        name="group1"
                                        type={type}
                                        id={`reverse-${type}-1`}
                                    />
                                    <Form.Check
                                        className="mx-1"
                                        reverse
                                        label="No Resp"
                                        name="group1"
                                        type={type}
                                        id={`reverse-${type}-2`}
                                    />
                                    <Form.Check
                                        className="mx-1"
                                        reverse
                                        label="Mono. Social"
                                        name="group1"
                                        type={type}
                                        id={`reverse-${type}-2`}
                                    />
                                    <Form.Check
                                        className="mx-1"
                                        reverse
                                        label="Exento"
                                        name="group1"
                                        type={type}
                                        id={`reverse-${type}-2`}
                                    />
                                    <Form.Check
                                        className="mx-1"
                                        reverse
                                        label="Resp. Mono"
                                        name="group1"
                                        type={type}
                                        id={`reverse-${type}-2`}
                                    />
                                    <Form.Check
                                        className="mx-1"
                                        reverse
                                        label="Cons. Final"
                                        name="group1"
                                        type={type}
                                        id={`reverse-${type}-2`}
                                    />
                                </div>
                            ))}
                        </Form>
                    </Col>
                    <Col md={3} className="debug text-center">
                        <Form.Group className="m-1">
                            <Form.Control
                                required
                                type="text"
                                placeholder="CUIT:"
                                aria-describedby="basic-addon1"
                            />
                        </Form.Group></Col>
                </Row>

                <Row>
                    <Col md={2} className="debug text-center"><span className="fs-4">Condiciones de Venta</span></Col>
                    <Col md={6} className="debug text-center">
                        <Form>
                            {['radio'].map((type) => (
                                <div key={`reverse-${type}`} className="mb-2 d-flex ">
                                    <Form.Check
                                        className="mx-3"
                                        reverse
                                        label="Contado"
                                        name="group1"
                                        type={type}
                                        id={`reverse-${type}-1`}
                                    />
                                    <Form.Check
                                        className="mx-3"
                                        reverse
                                        label="Cuenta Corriente"
                                        name="group1"
                                        type={type}
                                        id={`reverse-${type}-2`}
                                    />
                                    <Form.Check
                                        className="mx-3"
                                        reverse
                                        label="Tarjeta"
                                        name="group1"
                                        type={type}
                                        id={`reverse-${type}-2`}
                                    />
                                </div>
                            ))}
                        </Form>
                    </Col>
                    <Col md={4} className="debug text-center">
                        <Form.Group className="m-1">
                            <Form.Control
                                required
                                type="text"
                                placeholder="Remito N°:"
                                aria-describedby="basic-addon1"
                            />
                        </Form.Group></Col>
                </Row>

                <Row>
                    <TablaIncremental/>
                </Row>
            </Container>

        </>
    )
}

export default CardDatosEmpresa