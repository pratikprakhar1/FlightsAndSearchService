const express = require('express');
const bodyparser = require('body-parser');
//const {City} = require('./models/index');


const {PORT} = require('./config/serverConfig');
const CityRepository =  require('./repository/city-repository');

const app = express();
const setupAndStartServer = async() =>{

    //create the express object
    app.use(bodyparser.json());
    app.use(bodyparser.urlencoded({extended:true}));
    app.listen(PORT,async ()=>{
        console.log(`Server started at ${PORT}`);
        // const x = await City.create({
        //     name: "Rourkela",
        // })
        // console.log(x);
        const repo = new CityRepository();
        repo.createCity({name: "Patna"});
    }); 

}

setupAndStartServer();