db.voos.findOne(
  { litrosCombustivel: { $gte: 1000 } },
  { vooId: true, _id: false },
);
