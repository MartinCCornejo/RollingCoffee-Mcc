import { Button, Container, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";

const AgregarProducto = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (producto) => {
    console.log(producto);
  };

  return (
    <Container className="flex-grow-1 my-5">
      <h1 className="mt-5 pt-4">
        <span className="text-success display-4 fw-semibold">N</span>uevo
        producto
      </h1>
      <hr className="text-success" />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3" controlId="producto">
          <Form.Label className="text-montserrat">Producto</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: Cafe"
            {...register("nombreProducto", {
              required: "Este campo es obligatorio",
              minLength: {
                value: 2,
                message: "Debe ingresar como mínimo 2 caracteres",
              },
              maxLength: {
                value: 50,
                message: "Debe ingresar como máximo 50 caracteres",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.nombreProducto?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="precio">
          <Form.Label className="text-montserrat">Precio</Form.Label>
          <Form.Control
            type="number"
            placeholder="Ej: 50"
            {...register("precio", {
              required: "El precio es obligatorio",
              min: {
                value: 0,
                message: "El precio debe ser mayor o igual a 0",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.precio?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="imagenURL">
          <Form.Label className="text-montserrat">Imagen URL</Form.Label>
          <Form.Control
            type="text"
            placeholder="Agregue la URL de la imagen"
            {...register("imagen", {
              required: "La URL de la imagen es obligatoria",
              pattern: {
                value: /^(http|https):\/\/\S+\.(jpeg|jpg|gif|png|bmp)$/i,
                message: "Ingrese una URL válida",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.imagen?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="categoria">
          <Form.Label className="text-montserrat">Categoría</Form.Label>
          <Form.Select
            aria-label="categoria"
            {...register("categoria", { required: "Seleccione una categoría" })}
          >
            <option value="">Seleccione una opción</option>
            <option value="1">Opción 1</option>
            <option value="2">Opción 2</option>
            <option value="3">Opción 3</option>
          </Form.Select>
          <Form.Text className="text-danger">
            {errors.categoria?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="descripcionBreve">
          <Form.Label className="text-montserrat">Descripción breve</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: Una taza de café suave y aromático"
            {...register("descripcionBreve", {
              required: "Este campo es obligatorio",
              minLength: {
                value: 5,
                message: "Debe ingresar como mínimo 5 caracteres",
              },
              maxLength: {
                value: 40,
                message: "Debe ingresar como máximo 40 caracteres",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.descripcionBreve?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="descripcionAmplia">
          <Form.Label className="text-montserrat">
            Descripción amplia
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="Agregue una descripción detallada"
            {...register("descripcionAmplia", {
              required: "Este campo es obligatorio",
              minLength: {
                value: 10,
                message: "Debe ingresar como mínimo 10 caracteres",
              },
              maxLength: {
                value: 700,
                message: "Debe ingresar como máximo 700 caracteres",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.descripcionAmplia?.message}
          </Form.Text>
        </Form.Group>
        <Button
          variant="success"
          type="submit"
          className="text-montserrat fw-semibold mt-3"
        >
          Guardar
        </Button>
      </Form>
    </Container>
  );
};

export default AgregarProducto;
