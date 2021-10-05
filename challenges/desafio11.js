db.voos.find({ "aeroportoDestino.pais": { $ne: "ESTADOS UNIDOS" } }).count();
