const Squelize = require('sequelize')
const db = require('../config/database')

const Testimonial = db.define('testimoniales', {
    nombre: {
        type: Squelize.STRING
    },
    correo:{
        type: Squelize.STRING
    },
    mensaje: {
        type: Squelize.STRING
    }
})

module.exports = Testimonial