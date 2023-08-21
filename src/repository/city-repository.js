const {City} = require('../models/index');

class CityRepository
{

    async createCity({ name }){
        try {
            const city = await City.create({name});
            return city;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }
    async deleteCity(city_id){
            try {
                await City.destroy({
                    where : {
                        id : city_id ,
                    }
                });
                return true;
            } catch (error) {
                console.log("Something Went Wrong in the Repository Layer");
                throw {error};
            }
    }
    async updateCity(city_id ,data){
            try {
                const city = await City.update(data,{
                    where: {
                        id : city_id 
                    }
                });
                return true;
            } catch (error) {
                console.log("Something Went Wrong in the Repository Layer");
                throw {error};
            }
    }
    async getCity(city_id){
        try {
            const city = await City.findByPk(city_id);
            return city;
        } catch (error) {
            console.log("Something Went Wrong in the Repository Layer");
            throw {error};
        }
    }
}

module.exports = CityRepository;