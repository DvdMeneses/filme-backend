const express = require("express");
const {
  getAllFilmes,
  createFilme,
  deleteFilme,
  updateFilme,
  getFilmeById,
} = require("../controllers/controller");

const router = express.Router();

router.get("/filmes", getAllFilmes);
router.get("/filmes/:id", getFilmeById);
router.post("/add", createFilme);
router.delete("/:id", deleteFilme);
router.put("/filme/:id", updateFilme);

module.exports = router;
