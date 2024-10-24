// importacion antiguo 

require('dotenv').config();
const {get} = require('env-var'); 
// import  { config} from 'dotenv'
// import env from 'env-var'

// INICIO SERVIDOR 
const envs = {
    PORT: get('PORT').required().asPortNumber(),
    PUBLIC_PATH: get('PUBLIC_PATH').default('public').asString()
}

module.exports = {
    envs
}




