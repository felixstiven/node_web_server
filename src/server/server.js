const express = require ('express');
const path = require('path');

//INCIO SERVIDOR
const startServer = (options) => {
    const {port, public_path = 'public'} = options
    
    const app = express()
    // PARA PODER USAR MIDDELEWARES SE USA LA PALABRA use (express)
    //Contenido estatico que ponemos disponible
    app.use(express.static(public_path))

    app.get('*', (req, res) =>{
        const indexPath = path.join(__dirname + `../../${public_path}/index.hmtl`);
        res.sendFile(indexPath);
    });

    app.listen(port, () => {
        console.log(`escuchando el puerto ${port}`)
    })


}

module.exports = {
    startServer
}
