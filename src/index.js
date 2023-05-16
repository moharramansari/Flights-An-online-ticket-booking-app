const express = require("express");

const { ServerConfig } = require("./config");
const apiRoutes = require("./routes");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", apiRoutes);

app.listen(ServerConfig.PORT, async () => {
  console.log(`Successfully started the server on PORT: ${ServerConfig.PORT}`);
  //bad code alert

  const { City, Airport } = require("./models");
  // const bengaluru = await City.findByPk(1);
  // console.log(bengaluru);
  // const airport = await Airport.create({ name: "Kempegowda Airport ", code: "BLR", cityId: 1 });
  // const dbpairport = await bengaluru.createAirport({ name: 'Hubbali Airport', code: "HBL" });
  // console.log(dbpairport);
  // const airportsInBanglore = await bengaluru.getAirports();
  // console.log(airportsInBanglore);

  // const city = await City.findByPk(4);
  // await city.createAirport({name : "Indore Airport", code : "IND"})

  await City.destroy({
    where: {
      id: 4,
    },
  }); 
});
