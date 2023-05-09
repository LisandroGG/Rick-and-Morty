const axios = require('axios')
const URL = "https://rickandmortyapi.com/api/character/"

const getCharById = (req, res) => {
    const { id } = req.params

    axios(URL + id)
    .then(({data}) => {
        const { id, status, name, species, origin, image, gender } = data
        const character = { id, status, name, species, origin, image, gender }

        return character ? res.status(200).json(character)
        : res.status(404).send("Not Found")

        } ) 
    .catch((error) => {
        return res.status(500).send(error.message)
    })
}



module.exports = {
    getCharById
}
