db.voos.find(
  { "empresa.nome": "GOL", ano: 2017 }, 
  { 
    _id: false,
    vooId: true,
    "empresa.nome": true,
    "aeroportoOrigem.nome": true,
    "aeroportoDestino.nome": true,
    mes: true,
    ano: true, 
    },
).limit(10);
