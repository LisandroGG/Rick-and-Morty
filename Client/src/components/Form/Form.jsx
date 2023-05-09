import style from './Form.module.css';
import { useState } from 'react';
import validation from './validation';

const Form = (props) => {

    const [ userdata, setUserdata ] = useState({
        email: '',
        password: ''
    });

    const [ errors, setErrors ] = useState({})

    const handleChange = (event) => {
        setUserdata({
            ...userdata,
            [event.target.name]: event.target.value
        });

        setErrors(validation({
            ...userdata,
            [event.target.name]: event.target.value
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        props.login(userdata)
    }

    return (
        <div className={style.contenedor}>
            <form className={style.formulario}>
            <img className={style.imagen} src='https://steamuserimages-a.akamaihd.net/ugc/782978849731797376/BFD2245A50178526DA6C12F5A804AEBA155D1828/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false' alt='Imagen'></img>
                <br/>
                <label><b>EMAIL</b></label><br/>
                <input
                className={style.botones}
                type='email'
                name='email'
                placeholder='   Email...'
                value={userdata.email}
                onChange={handleChange}
                />
                {
                    errors.email ? (<p className={style.error}>{errors.email}</p>) : null
                }

                <br/>

                <label><b>PASSWORD</b></label><br/>
                <input
                className={style.botones}
                type='password'
                name='password'
                value={userdata.password}
                onChange={handleChange}
                />
                {
                    errors.password ? (<p className={style.error}>{errors.password}</p>) : null
                }

                <br/><br/>

                <button className={style.btn} type='submit' onClick={handleSubmit}>Login</button>
            </form>
        </div>
    )
}

export default Form;