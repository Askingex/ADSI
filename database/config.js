import mongoose from 'mongoose'

const dbConnection=async()=>{
    try{
        console.log('aqui',process.env.MONGODB_CNX)
        await mongoose.connect(process.env.MONGODB_CNX,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        });
        console.log('Base de datos Online');
    }catch (error){
        throw new Error('Error al iniciar la BD')
    }
}

export {dbConnection}