import {Card, Button, Col} from "react-bootstrap"

function BasicCard(props) {
    return (
        <>
            <Card style={{ width: '15rem' }} >
                <Col className="d-flex justify-content-center"><Card.Img className="w-50" variant="top" src="https://solicitalia.es/wp-content/uploads/2020/10/Como-hacer-una-factura-logo.jpg"/></Col>
                <Card.Body>
                    <Card.Title className="py-1">{props.title}</Card.Title>
                    <Button variant="dark" className="py-1" href={props.link}>Emitir</Button>
                </Card.Body>
            </Card>
        </>
    )
}

export default BasicCard