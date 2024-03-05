import { Button, Container, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import {crearProductoAPI, modificarProductoAPI, obtenerProductoAPI} from "../../helpers/queries";
import Swal from "sweetalert2";
import { useNavigate, useParams } from "react-router";
import { useEffect } from "react";

const AgregarProducto = ({editar,titulo}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue
  } = useForm();

  const {id} = useParams();
  const navegacion = useNavigate();

  useEffect(()=> {
    if (editar) {
      cargarDatosProductos();
    }
  },[])

  async function cargarDatosProductos () {
    // console.log(id)
    const respuesta = await obtenerProductoAPI(id);
    if (respuesta.status === 200) {
      const productoBuscado = await respuesta.json();
      setValue('nombreProducto',productoBuscado.nombreProducto);
      setValue('precio',productoBuscado.precio);
      setValue('imagen',productoBuscado.imagen);
      setValue('categoria',productoBuscado.categoria);
      setValue('descripcionBreve',productoBuscado.descripcionBreve);
      setValue('descripcionAmplia',productoBuscado.descripcionAmplia);
    }
  }

  const onSubmit = async (producto) => {
    if (editar) {
      // Aqui agregar la solicitud a la api para editar un producto
      // console.log('editar');
      const respuesta = await modificarProductoAPI(producto,id);

      if (respuesta.status === 200) {
        Swal.fire({
          title: "Producto modificado!",
          text: `El producto '${producto.nombreProducto}' se modifico correctamente.`,
          icon: "success"
        });
        navegacion('/administrador');

      } else {
        Swal.fire({
          title: "Ocurrio un error!",
          text: `El producto '${producto.nombreProducto}' no se pudo modificar correctamente, intente de nuevo en unos minutos.`,
          icon: "error"
        });
      }
    } else {
      // LLamar a la funcion encargada de pedirle a la api crear un producto
      const respuesta = await crearProductoAPI(producto);
      // Agregar un mensaje si el codigo es 201, todo salio bien, caso contrario mostrar un mensaje de que ocurrio un error 
      if (respuesta.status === 201) {
        Swal.fire({
          title: "Buen trabajo!",
          text: "El producto fue creado correctamente",
          icon: "success"
        });
        reset();
  
      } else {
        Swal.fire({
          title: "Ocurrio un error!",
          text: `Èl producto "${producto.nombreProducto}" no pudo ser agregado, intentelo de nuevo en unos minutos`,
          icon: "error"
        });
      }
    }
  };

  return (
    <Container className="flex-grow-1 my-5">
      <h1 className="mt-5 pt-4">{titulo}</h1>
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
                value: 100,
                message: "El monto debe ser mínimo de $100",
              },
              max: {
                value: 10000,
                message: "El monto debe ser máximo de $10.000",
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
            <option value="Bebidas Calientes">Bebidas Calientes</option>
            <option value="Bebidas Frías">Bebidas Frías</option>
            <option value="Pastelería y Dulces">Pastelería y Dulces</option>
            <option value="Desayunos y Snacks">Desayunos y Snacks</option>
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
                value: 10,
                message: "Debe ingresar como mínimo 10 caracteres",
              },
              maxLength: {
                value: 70,
                message: "Debe ingresar como máximo 70 caracteres",
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
                value: 15,
                message: "Debe ingresar como mínimo 15 caracteres",
              },
              maxLength: {
                value: 800,
                message: "Debe ingresar como máximo 800 caracteres",
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
