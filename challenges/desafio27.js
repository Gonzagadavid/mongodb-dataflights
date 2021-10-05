const totalVoos = db.voos.find({ "empresa.nome": "PASSAREDO", natureza: "Doméstica" }).count();

db.resumoVoos.insert({ empresa: "PASSAREDO", totalVoosDomesticos: totalVoos });

db.resumoVoos.find({ empresa: "PASSAREDO" }, { _id: false });
