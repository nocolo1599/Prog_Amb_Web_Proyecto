const moongoose = require('moongoose');
const Schema = mongoose.Schema;

const TaskSchema= new Schema({
    Codigo: Number,
    Titulo: String,
    Fecha_Caducidad: String,
    Cantidad: Number,
    Peso: Number,
    Status: {
        type: Boolean, 
        default: false
    }
})

module.exports = mongoose.model('tasks', TaskSchema);