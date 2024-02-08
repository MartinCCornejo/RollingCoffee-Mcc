import { Container } from "react-bootstrap";

const AgregarProducto = () => {
  return (
    <Container className="flex-grow-1 my-5">
      <h1 className="mt-5 pt-5">Nuevo producto</h1>
      <hr className="text-success" />
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Example textarea</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
      </Form>
    </Container>
  );
};

export default AgregarProducto;
