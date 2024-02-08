import { Button, Container, Form } from "react-bootstrap";

const AgregarProducto = () => {
  return (
    <Container className="flex-grow-1 my-5">
      <h1 className="mt-5 pt-4"><span className="text-success display-4 fw-semibold">N</span>uevo producto</h1>
      <hr className="text-success" />
      <Form>
        <Form.Group className="mb-3" controlId="producto">
          <Form.Label className="text-montserrat">Producto</Form.Label>
          <Form.Control type="text" placeholder="Ej: Cafe" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="precio">
          <Form.Label className="text-montserrat">Precio</Form.Label>
          <Form.Control type="number" placeholder="Ej: 50" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="imagenURL">
          <Form.Label className="text-montserrat">Imagen URL</Form.Label>
          <Form.Control type="text" placeholder="Agregue la URL de la imagen" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="categoria">
          <Form.Label className="text-montserrat">Categoría</Form.Label>
          <Form.Select aria-label="categoria">
            <option>Seleccione una opcion</option>
            <option value="1">Opcion 1</option>
            <option value="2">Opcion 2</option>
            <option value="3">Opcion 3</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3" controlId="descripcionBreve">
          <Form.Label className="text-montserrat">Descripción breve</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: Una taza de café suave y aromático"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="descripcionAmplia">
          <Form.Label className="text-montserrat">
            Descripción amplia
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="Agregue una descripción detallada"
          />
        </Form.Group>
        <Button variant="success" className="text-montserrat fw-semibold mt-3">Guardar</Button>
      </Form>
    </Container>
  );
};

export default AgregarProducto;
