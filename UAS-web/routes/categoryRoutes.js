const express = require('express');
const fs = require('fs');
const router = express.Router();
const categoriesFile = './data/categories.json';

// Membaca data kategori
const readCategories = () => {
  const data = fs.readFileSync(categoriesFile);
  return JSON.parse(data);
};

// Menyimpan data kategori
const saveCategories = (categories) => {
  fs.writeFileSync(categoriesFile, JSON.stringify(categories, null, 2));
};

// CRUD: Create - Menambah kategori baru
router.post('/', (req, res) => {
  const newCategory = req.body;
  const categories = readCategories();
  categories.push(newCategory);
  saveCategories(categories);
  res.status(201).send(newCategory);
});

// CRUD: Read - Mengambil daftar kategori
router.get('/', (req, res) => {
  const categories = readCategories();
  res.json(categories);
});

// CRUD: Update - Mengubah kategori
router.put('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const updatedCategory = req.body;
  const categories = readCategories();
  const categoryIndex = categories.findIndex(cat => cat.id === id);
  if (categoryIndex !== -1) {
    categories[categoryIndex] = updatedCategory;
    saveCategories(categories);
    res.json(updatedCategory);
  } else {
    res.status(404).send('Category not found');
  }
});

// CRUD: Delete - Menghapus kategori
router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  let categories = readCategories();
  categories = categories.filter(cat => cat.id !== id);
  saveCategories(categories);
  res.status(204).send();
});

module.exports = router;
