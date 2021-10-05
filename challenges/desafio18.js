db.voos.findOne(
  { "passageiros.pagos": { $gt: 7000 } }, 
  { 
    _id: false,
    vooId: true,
    mes: true,
    ano: true,
  },
);
