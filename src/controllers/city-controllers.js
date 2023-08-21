const { response } = require('express');
const { CityService } = require('../services/index');

const cityService = new CityService();

/* POST request , data in req.body */
const create = async (req,res) => {
    try {
        const city = await cityService.createCity(req.body);
        return res.status(201).json({
            data : city ,
            success : true ,
            message : 'succesfully created a city',
            err : {}
        })
    } catch (error) {
        console.log("error in city-controller");
        res.status( 500).json({
            data : {},
            success : false ,
            message : 'Not able to create a city' ,
            err : error 
        })
    }

}
/* DELETE request -> /city/:id */
const destroy = async (req,res) => {
    try {
        const city = await cityService.deleteCity(req.params.id);
        return res.status(200).json({
            data : response ,
            success : true ,
            message : 'succesfully deleted a city',
            err : {}
        })
    } catch (error) {
        console.log("error in city-controller");
        res.status(500).json({
            data : {},
            success : false ,
            message : 'Not able to delete a city' ,
            err : error 
        })
    }

}

//PATCH -> /city/:id -> req.bdoy
const update = async (req,res) => {
    try {
        const city = await cityService.updateCity(req.params.id,req.body);
        return res.status(201).json({
            data : response ,
            success : true ,
            message : 'succesfully updated a city',
            err : {}
        })
    } catch (error) {
        console.log("error in city-controller");
        res.status( 500).json({
            data : {},
            success : false ,
            message : 'Not able to update a city' ,
            err : error 
        })
    }
}

// GET -> /city/:id 

const get = async (req,res) => {
    try {
        const city = await cityService.getCity(req.params.id);
        return res.status(200).json({
            data : response ,
            success : true ,
            message : 'succesfully fetched a city',
            err : {}
        })
    } catch (error) {
        console.log("error in city-controller");
        res.status( 500).json({
            data : {},
            success : false ,
            message : 'Not able to fetch a city' ,
            err : error 
        })
    }

}

module.exports = {
    create,
    destroy,
    update,
    get
}