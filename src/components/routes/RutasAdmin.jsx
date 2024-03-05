import { Route, Routes } from "react-router";
import Administrador from "../pages/Administrador";
import AgregarProducto from "../pages/AgregarProducto";

const RutasAdmin = () => {
  return (
    <>
      <Routes>
        <Route
          exact
          path="/"
          element={<Administrador></Administrador>}
        ></Route>
        <Route
          exact
          path="/agregar-producto"
          element={
            <AgregarProducto
              editar={false}
              titulo="Nuevo producto"
            ></AgregarProducto>
          }
        ></Route>
        <Route
          exact
          path="/editar-producto/:id"
          element={
            <AgregarProducto
              editar={true}
              titulo="Editar producto"
            ></AgregarProducto>
          }
        ></Route>
      </Routes>
    </>
  );
};

export default RutasAdmin;