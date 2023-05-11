const axios = require('axios')
const URL = "https://rickandmortyapi.com/api/character/"

const getCharById = async(req, res) => {
    try {
        const { id } = req.params
        const result = await axios(URL + id)
        const { status, name, species, origin, image, gender } = result.data
        const character = { id, status, name, species, origin, image, gender }
        return character ? res.status(200).json(character)
        : res.status(404).send("Not Found")
    } 
    catch (error) {
        return res.status(500).json({error: error.message})
    }
}

// .then(({data}) => {
//     const { id, status, name, species, origin, image, gender } = data
//     const character = { id, status, name, species, origin, image, gender }

//     return character ? res.status(200).json(character)
//     : res.status(404).send("Not Found")

//     } ) 
// .catch((error) => {
//     return res.status(500).send(error.message)
// })


module.exports = {
    getCharById
}
