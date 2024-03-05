import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Footer from "./components/common/Footer";
import Menu from "./components/common/Menu";
import Inicio from "./components/pages/Inicio";
import Administrador from "./components/pages/Administrador";
import AgregarProducto from "./components/pages/AgregarProducto";
import DetalleProducto from "./components/pages/DetalleProducto";
import Error404 from "./components/pages/error404";
import Login from './components/pages/Login';
import RutasProtegidas from "./components/routes/RutasProtegidas";
import RutasAdmin from "./components/routes/RutasAdmin";
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import "./App.css";
import { useState } from 'react';

function App() {
  const usuario = JSON.parse(sessionStorage.getItem('loginRollingCoffee')) || ""
  const [usuarioLogueado , setUsuarioLogueado] = useState(usuario);

  return (
    // Administrador de rutas 
    <BrowserRouter>
      <Menu  usuarioLogueado={usuarioLogueado} setUsuarioLogueado={setUsuarioLogueado}></Menu>
      <Routes>
        <Route exact path="/" element={<Inicio></Inicio>}></Route>
        <Route exact path="/login" element={<Login setUsuarioLogueado={setUsuarioLogueado}></Login>}></Route>
        <Route
          exact
          path="/administrador/*"
          element={
            <RutasProtegidas>
              <RutasAdmin></RutasAdmin>
            </RutasProtegidas>
          }
        ></Route>
        {/* <Route exact path="/administrador/agregar-producto" element={<AgregarProducto editar={false} titulo={'Nuevo producto'}></AgregarProducto>}></Route>
        <Route exact path="/administrador/editar-producto/:id" element={<AgregarProducto editar={true}  titulo={'Editar producto'}></AgregarProducto>}></Route>
        <Route exact path="/login" element={<Login></Login>}></Route> */}
        <Route exact path="/detalle-producto/:id" element={<DetalleProducto></DetalleProducto>}></Route> 
        <Route path="*" element={<Error404></Error404>}></Route>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
