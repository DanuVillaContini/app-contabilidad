import {Card, Button, Col} from "react-bootstrap"
import facturaImg from "../assets/facturaImg.png"

function BasicCard(props) {
    return (
        <>
            <Card style={{ width: '15rem' }} >
                <Col className="d-flex justify-content-center mb-2"><Card.Img className="w-50" variant="top" src={facturaImg} /></Col>
                <Card.Body>
                    <Card.Title className="py-1">{props.title}</Card.Title>
                    <Button variant="dark" className="py-1" href={props.link}>Emitir</Button>
                </Card.Body>
            </Card>
        </>
    )
}

export default BasicCard