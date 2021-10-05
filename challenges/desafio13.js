db.voos.find({ "aeroportoDestino.continente": { $nin: ["EUROPA", "ÁSIA", "OCEANIA"] } }).count();
