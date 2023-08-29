const {FlightRepository,AirplaneRepository} = require ('../repository/index');
const {compareTime}  = require('../utils/helper.js'); 
class FlightService{
    constructor()
    {
        this.airplaneRepository = new AirplaneRepository();
        this.flightRepository = new FlightRepository();
    }

    async createFlight(data)
    {
        try {
            if(!compareTime(data.arrivalTime,data.departureTime))
            {
                throw {error : 'Arrival Time cannot be before departure time'};
            }
            const airplane = await this.airplaneRepository.getAirplane(data.airplaneId);
            const flight = await this.flightRepository.createFlight({  //destructuring data to add total seats in it
                ...data , totalSeats:airplane.capacity
            })
            return flight;
        } catch (error) {
            console.log("Something went wrong in the Service layer of Flight Service");
            throw {error};
        }
    }

}
/**
 * flightNumber
 * airplaneId
 * departureAirportId
 * arrivalAirportId
 * arrivalTime
 * departureTime
 * price
 * totalSeats ->fetch from airplane
 */
module.exports = FlightService;