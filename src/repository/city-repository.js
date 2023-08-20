const {City} = require('../models/index');

class CityRepository
{

    async createCity({name}){
        try {
            const city = await City.create({name});
            return city;
        } catch (error) {
            throw {error};
        }
    }
    async deleteCity(city_id){
            try {
                await City.destroy({
                    where : {
                        id : city_id
                    }
                });
            } catch (error) {
                throw {error};
            }
        }
}

module.exports = CityRepository;