const URI_Producto = import.meta.env.VITE_API_PRODUCTO;

console.log(URI_Producto);

// POST
export async function crearProductoAPI(productoNuevo) {
  try {
    const respuesta = await fetch(URI_Producto, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productoNuevo),
    });
    // const data = await respuesta.json();
    return respuesta;
  } catch (error) {
    console.log(error);
  }
}

// GET

export async function leerProductosAPI() {
  try {
    const respuesta = await fetch(URI_Producto);
    return respuesta;
    // return respuesta;
  } catch (error) {
    console.log(error);
  }
}

// DELETE

export async function borrarProductoAPI(id) {
  try {
    const respuesta = await fetch(`${URI_Producto}/${id}`, {
      method: "DELETE"
    });
    return respuesta;
  } catch (error) {
    console.log(error);
  }
}

// GET de un producto

export async function obtenerProductoAPI(id) {
  try {
    const respuesta = await fetch(`${URI_Producto}/${id}`);
    console.log(respuesta)
    return respuesta;
  } catch (error) {
    console.log(error);
  }
}
