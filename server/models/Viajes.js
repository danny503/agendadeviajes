const Squelize = require('sequelize')
const db = require('../config/database')

const Viaje = db.define('viaje', {
    titulo : {
        type: Squelize.STRING
    },
    precio: {
        type: Squelize.STRING
    },
    fecha_ida: {
        type: Squelize.DATE
    },
    fecha_vuelta: {
        type: Squelize.DATE
    },
    imagen: {
        type: Squelize.STRING
    },
    descripcion: {
        type: Squelize.STRING
    },
    disponible: {
        type: Squelize.STRING
    }
    
})
module.exports = Viaje