import { useState, useEffect } from 'react';
import imgBanner from '../../assets/banner.jpg'
import { leerProductosAPI } from '../../helpers/queries';
import Table from '../Table';

const Inicio = () => {
    const [ productos, setProductos ] = useState([]);

    useEffect(() => {
      obtenerProductos();
    }, []);

    async function obtenerProductos () {
        const respuesta = await leerProductosAPI();
          if (respuesta.status === 200) {
            const datos = await respuesta.json();
            setProductos(datos);
          } else {
            Swal.fire({
              title: "Ocurrio un error!",
              text: `Intente esta operación en unos minutos`,
              icon: "error"
            });
          }
      }

    return (
        <section className="flex-grow-1">
            {/* Aqui va el main de index  */}
            <img src={imgBanner} alt="Imagen banner de la pagina" className='img-banner'/>
            <Table productos={productos}></Table>
        </section>
    );
};

export default Inicio;