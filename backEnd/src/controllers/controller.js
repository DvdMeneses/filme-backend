const Filme = require("../models/filme");

// Lógica para listar filmes
const getAllFilmes = async (req, res) => {
  try {
    const filmes = await Filme.find();
    res.status(200).json(filmes);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch films" });
  }
};

// Lógica para listar filmes
const getFilmeById = async (req, res) => {
  try {
    const filme = await Filme.findById(req.params.id);
    res.status(200).json(filme);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch films" });
  }
};

// Lógica para criar um novo filme
const createFilme = async (req, res) => {
  try {
    const filme = new Filme(req.body);
    const savedFilme = await filme.save();
    res.status(201).json(savedFilme);
  } catch (error) {
    res.status(400).json({ error: "Failed to create filme" });
  }
};

const deleteFilme = async (req, res) => {
  try {
    const filme = await Filme.findByIdAndDelete(req.params.id);
    if (!filme) {
      return res.status(404).json({ error: "Filme not found" });
    }
    res.status(200).json({ message: "Filme deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete filme" });
  }
};

const updateFilme = async (req, res) => {
  try {
    // Passa os dados atualizados do corpo da requisição
    const filme = await Filme.findByIdAndUpdate(
      req.params.id, // ID do filme a ser atualizado
      req.body, // Dados a serem atualizados (enviados no corpo da requisição)
      { new: true } // Retorna o documento atualizado, não o anterior
    );

    if (!filme) {
      return res.status(404).json({ error: "Filme not found" });
    }

    // Retorna o filme atualizado
    res.status(200).json(filme);
  } catch (error) {
    res.status(500).json({ error: "Failed to update filme" });
  }
};

module.exports = {
  getAllFilmes,
  createFilme,
  deleteFilme,
  updateFilme,
  getFilmeById,
};
