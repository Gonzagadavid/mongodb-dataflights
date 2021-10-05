db.voos.deleteMany({
  $and: [
    { "empresa.nome": "GOL" },
    { "passageiros.pagos": { $gte: 5, $lte: 10 } },
  ],
});
