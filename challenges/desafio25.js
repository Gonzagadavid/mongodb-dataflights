db.voos.deleteMany({
  litrosCombustivel: { $lt: 400 },
  "empresa.nome": "AZUL",
});
