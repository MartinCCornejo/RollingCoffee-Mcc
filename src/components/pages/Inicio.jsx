import imgBanner from '../../assets/banner.jpg'
import Table from '../Table';

const Inicio = () => {
    return (
        <section className="flex-grow-1">
            {/* Aqui va el main de index  */}
            <img src={imgBanner} alt="Imagen banner de la pagina" className='img-banner'/>
            <Table></Table>
        </section>
    );
};

export default Inicio;