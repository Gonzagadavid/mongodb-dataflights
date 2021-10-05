db.voos.find({}, { vooId: true, _id: false }).skip(9).limit(3);
