const express = require('express');
const router = express.Router();
const clientes = require('../services/clientes');

// Los archivos en routes usan las funciones de los archivos en services para redireccionar

// GET obtener una lista de todos los Clientes 
router.get('/', async function(req, res, next) {
  try {
    res.json(await clientes.getClientes(req.query.page));
  } catch (err) {
    console.error(`Error al obtener lista de productos: `, err.message);
    next(err);
  }
});

// POST para nuevo Cliente
router.post('/', async function(req, res, next) {
    try {
      res.json(await clientes.createCliente(req.body));
    } catch (err) {
      console.error(`Error al crear nuevo producto: `, err.message);
      next(err);
    }
  });

// Actualiza un cliente basado en un id si se envia como PUT
router.put('/:id', async function(req, res, next) {
    try {
      res.json(await clientes.updateCliente(req.params.id, req.body));
    } catch (err) {
      console.error(`Error al actualizar producto: `, err.message);
      next(err);
    }
});

// Borra un cliente basado en un id si se envia como DELETE 
router.delete('/:id', async function(req, res, next) {
  try {
    res.json(await clientes.deleteCliente(req.params.id));
  } catch (err) {
    console.error(`Error al borrar producto: `, err.message);
    next(err);
  }
});

module.exports = router;