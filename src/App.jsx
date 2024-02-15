import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Footer from "./components/common/Footer";
import Menu from "./components/common/Menu";
import Inicio from "./components/pages/Inicio";
import Administrador from "./components/pages/Administrador";
import AgregarProducto from "./components/pages/AgregarProducto";
import DetalleProducto from "./components/pages/DetalleProducto";
import Error404 from "./components/pages/error404";
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import "./App.css";


function App() {
  return (
    // Administrador de rutas 
    <BrowserRouter>
      <Menu></Menu>
      <Routes>
        <Route exact path="/" element={<Inicio></Inicio>}></Route>
        <Route exact path="/administrador" element={<Administrador></Administrador>}></Route>
        <Route path="*" element={<Error404></Error404>}></Route>
        <Route exact path="/administrador/agregar-producto" element={<AgregarProducto></AgregarProducto>}></Route>
        <Route exact path="/detalle-producto" element={<DetalleProducto></DetalleProducto>}></Route>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
