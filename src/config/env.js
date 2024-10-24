// importacion antiguo 
// require('dotenv').config();
// const {get} = require('env-var'); 
// import moderno 
import env from 'dotenv'
import envvar from 'env-var';

env.config();


// INICIO SERVIDOR 
export const envs = {
    PORT: envvar.get('PORT').required().asPortNumber(),
    PUBLIC_PATH: envvar.get('PUBLIC_PATH').default('public').asString()
}






