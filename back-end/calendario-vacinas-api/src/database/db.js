const mongoose = require ('mongoose');

const connetcDataBase = () => {
    console.log ("Estamos conectando o DataBase")

    mongoose.connect(
        "mongodb+srv://malumoscardo:siwupcHAd2Y8CULU@cluster0.znoywdy.mongodb.net/", 
        {useNewUrlParser: true, useUnifiedTopology: true}
    ).then(() => console.log ("MongoDB Conectado")).catch((error) => console.log(error));
}

module.exports = connetcDataBase;