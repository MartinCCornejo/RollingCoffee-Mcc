import { Col,Card, Button } from "react-bootstrap";

const CardProducto = () => {
  return (
    <Col>
      <Card className="card-customized h-100">
        <Card.Img variant="top" src='https://th.bing.com/th/id/R.793127db17ef0bf7cbf42d8ff997caa6?rik=xJh8aaQrJwkMDg&pid=ImgRaw&r=0' className="img-fluid w-100"/>
        <Card.Body>
          <Card.Title className="text-success fw-bold fs-4">Café Americano</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
          <Card.Footer className="text-end">
            <Button variant="success">Ver más</Button>
          </Card.Footer>
      </Card>
    </Col>
  );
};

export default CardProducto;
