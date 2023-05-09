import style from './About.module.css'
import yo from '../../img/yo.jpeg'

const About = () => {
    return (
        <div className={style.padre}>
            <div className={style.contenedor}>
                <div className={style.imagen}>
                <img src={yo} width='600px' height='850px' alt='creator'></img>
                </div>
                <div className={style.texto}>
                    <h1 className={style.texto2}><b>Hola, soy Lisandro Pereyra, el creador de esta pagina, en la cual implemento React, Css.</b></h1>
                    <h1 className={style.texto2}><b>Pueden visitar mi Linkedin aqui:</b></h1>
                    <a className={style.texto2} href="https://www.linkedin.com/in/lisandro-pereyra-18503626a/" target="_blank">Linkedind</a>
                </div>
            </div>
        </div>
    )
}

export default About
