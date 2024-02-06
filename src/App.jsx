import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Footer from "./components/common/Footer";
import Menu from "./components/common/Menu";
// import Inicio from "./components/pages/Inicio";
import Error404 from './components/pages/Error404';
import "./App.css";


function App() {
  return (
    <>
      <Menu></Menu>
      <Error404></Error404>
      <Footer></Footer>
    </>
  );
}

export default App;
