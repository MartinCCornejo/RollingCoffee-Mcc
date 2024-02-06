import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Footer from "./components/common/Footer";
import Menu from "./components/common/Menu";
// import Inicio from "./components/pages/Inicio";
import Administrador from './components/pages/Administrador';
import "./App.css";


function App() {
  return (
    <>
      <Menu></Menu>
      <Administrador></Administrador>
      <Footer></Footer>
    </>
  );
}

export default App;
