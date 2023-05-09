const { AirplaneRepository } = require("../repositories");

const airplaneRepository = new AirplaneRepository();

//I think here is the problem exist
//let's debug!!!!!
async function createAirplane(data) {
  try {
    const airplane = await airplaneRepository.create(data);
    return airplane;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  createAirplane,
};
