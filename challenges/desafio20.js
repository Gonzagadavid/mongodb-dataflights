db.voos.findOne(
  { rtk: { $exists: false } },
  { vooId: true, _id: false },
);
