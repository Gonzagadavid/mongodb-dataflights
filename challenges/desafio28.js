const LATAM_AIRLINES_BRASIL = "LATAM AIRLINES BRASIL";

const totalVoos = db.voos.find({ 
  "empresa.nome": LATAM_AIRLINES_BRASIL,
  natureza: "Doméstica", 
}).count();

db.resumoVoos.insert({ empresa: LATAM_AIRLINES_BRASIL, totalVoosDomesticos: totalVoos });

db.resumoVoos.find({ empresa: LATAM_AIRLINES_BRASIL }, { _id: false });
