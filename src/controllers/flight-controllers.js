const  {FlightService} = require('../services/index');


const flightService = new FlightService();


const create = async (req,res) => {
    try {
        const flight = await flightService.createFlight(req.body);
        return res.status(201).json({
            data : flight ,
            success : true , 
            err : {},
            message : 'Succesfully created a Flight'
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to create the Flight',
            err: error
        });
    }
}

module.exports = {
    create,
}