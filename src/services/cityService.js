const { CityRepository } = require("../repository/index");
 

class cityService {

    constructor(){
        this.CityRepository = new CityRepository();
    }

    async createCity(data)
    {
        try {
            const city = await this.CityRepository.createCity(data);
            return city;
        } catch (error) {
            console.log("Something Went Wrong in the Service Layer");
            throw {error};
        }
    }
    async deleteCity(city_id)
    {
        try {
            const response = await this.CityRepository.deleteCity(city_id);
            return response;
        } catch (error) {
            console.log("Something Went Wrong in the Service Layer");
            throw {error};
        }
    }
    async updateCity(city_id,data)
    {
        try {
            const city = await this.CityRepository.updateCity(city_id,data);
            return city;
        } catch (error) {
            console.log("Something Went Wrong in the Service Layer");
            throw {error};
        }
    }
    async getCity(city_id)
    {
        try {
            const city = await this.CityRepository.getCity(city_id);
            return city;
        } catch (error) {
            console.log("Something Went Wrong in the Service Layer");
            throw {error};
        }
    }



}

module.exports = cityService;