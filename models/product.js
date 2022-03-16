const mongoose= require('mongoose')

const productSchema = mongoose.Schema({
    product:{
        type : String,
        require : true
    },
    image:{
        type: String,
        require: true
    },
    price:{
        type: Number,
        require: true
    },
    avaliable:{

        type: Object,
        require: true,

        stock:{
            type:Number,
            require: true
        },
        avaliable_state:{
            type:Boolean,
            require: true
        }
    }
})

module.exports = mongoose.model('productDocument', productSchema)