db.voos.find({ ano: { $gte: 2017, $lte: 2018 } }).count();
