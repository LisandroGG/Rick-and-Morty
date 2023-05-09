const emailRegex = new RegExp(/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/);
    const passNumberRegex = new RegExp(/^(?=.*\d)/);
    const passLengthRegex = new RegExp(/.{6,10}$/);
    const emailEmpty = new RegExp(/crudely/);

const validation = (data) => {
    let errors = {}

    if(emailEmpty.test(data.email)) errors.mail = 'No puede estar vacio';
    if(!emailRegex.test(data.email)) errors.email = 'Debe ser un email';
    if(data.email.legth > 35) errors.mail = 'No puede contener mas de 35 caracteres';

    if(!passNumberRegex.test(data.password)) errors.password = 'Debe tener almenos un numero';
    if(!passLengthRegex.test(data.password)) errors.password = 'Debe tener entre 6 y 10 caracteres';

    return errors
}

export default validation;