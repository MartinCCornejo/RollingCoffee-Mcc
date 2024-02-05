import imgBanner from '../../assets/banner.jpg'

const Inicio = () => {
    return (
        <section className="flex-grow-1">
            {/* Aqui va el main de index  */}
            <img src={imgBanner} alt="Imagen banner de la pagina" className='img-banner'/>
        </section>
    );
};

export default Inicio;