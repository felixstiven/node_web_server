//Antiguo de importar
// const {envs} = require('./config/env')
// const {startServer} = require ('./server/server')

// moderno de importar
import {envs}  from './config/env.js';
import {startServer}  from './server/server.js';


// INICIANDO SERVIDOR
const main = () => {
    startServer({
        port: envs.PORT,
        public_path: envs.PUBLIC_PATH
    })

}

// funcion agnostica autoconvocada
//agnostica porwue no tiene nombre
// autoconvocada porque la ejecutamos con los parentesis
(async() => {
    main()
})()