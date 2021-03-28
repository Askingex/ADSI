import mongoose from 'mongoose'

const dbConnection=async()=>{
    try{
        console.log(process.env.MONGODB_CNXX)
        await mongoose.connect(process.env.MONGODB_CNXX,{
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