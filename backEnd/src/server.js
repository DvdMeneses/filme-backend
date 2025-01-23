const app = require("./index");
const connectToDatabase = require("./config/database");

const PORT = 3000;

// Conectar ao banco de dados e iniciar o servidor
connectToDatabase().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
});
