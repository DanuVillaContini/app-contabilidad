import {Container} from "react-bootstrap"
// import BasicCard from "../Components/BasicCard"
import ModelFactura from "../Components/ModelFactura"


function MenuFactura() {

  return (
    <>
      <Container fluid className="text-center bg-dark mt-2">

        {/* <h1 className="my-2">Sistema Contable de Emision</h1> */}
        <ModelFactura/>






        {/* <Row className="p-1 justify-content-center">
          <Col xs={6}  md="4" lg="3" >
            <BasicCard title="Factura A" link="/facturaA"/> 
          </Col>
          <Col xs={6}  md="4" lg="3" >
            <BasicCard title="Factura B" link="/facturab"/>
          </Col>
          <Col xs={6}  md="4" lg="3" >
            <BasicCard title="Factura C" link="/facturac"/>
          </Col>
        </Row>
        <Row className="p-1 justify-content-center">
          <Col xs={6}  md="4" lg="3" >
            <BasicCard title="Remito" link="/ruta-del-enlace"/>
          </Col>
          <Col xs={6}  md="4" lg="3" >
            <BasicCard title="Recibo" link="/ruta-del-enlace"/>
          </Col>

        </Row> */}
      </Container>
    </>
  )
}

export default MenuFactura
