db.voos.find({ "aeroportoDestino.pais": { $in: ["BRASIL", "ARGENTINA", "CHILE"] } }).count();
