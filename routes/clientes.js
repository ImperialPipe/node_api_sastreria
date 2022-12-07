const express = require('express');
const router = express.Router();
const clientes = require('../services/clientes');

// GET obtener lista de productos 
router.get('/', async function(req, res, next) {
  try {
    res.json(await clientes.getClientes(req.query.page));
  } catch (err) {
    console.error(`Error al obtener lista de productos: `, err.message);
    next(err);
  }
});

// POST nuevo producto
router.post('/', async function(req, res, next) {
    try {
      res.json(await clientes.createCliente(req.body));
    } catch (err) {
      console.error(`Error al crear nuevo producto: `, err.message);
      next(err);
    }
  });

// PUT actualizar producto 
router.put('/:id', async function(req, res, next) {
    try {
      res.json(await clientes.updateCliente(req.params.id, req.body));
    } catch (err) {
      console.error(`Error al actualizar producto: `, err.message);
      next(err);
    }
});

// DELETE borrar producto 
router.delete('/:id', async function(req, res, next) {
  try {
    res.json(await clientes.deleteCliente(req.params.id));
  } catch (err) {
    console.error(`Error al borrar producto: `, err.message);
    next(err);
  }
});

module.exports = router;