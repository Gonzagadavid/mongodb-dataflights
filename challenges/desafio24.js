db.voos.findOne(
  { 
    $and: [
      { litrosCombustivel: { $exists: true } },
      { litrosCombustivel: { $lte: 600 } },
      { "empresa.nome": { $nin: ["GOL", "AZUL"] } },
    ],
  },
  { 
    vooId: true,
    _id: false,
    litrosCombustivel: true,
    "empresa.nome": true,
  },
);
