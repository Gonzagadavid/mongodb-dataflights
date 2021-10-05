db.voos.find({ "aeroportoOrigem.pais": { $ne: "BRASIL" } }).count();
