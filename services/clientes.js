const db = require('./db');
const helper = require('../helper');


//ejecuta un select from clientes
async function getClientes(page = 1){
  const rows = await db.query(
    `SELECT * FROM CLIENTES `
  );
  const data = helper.emptyOrRows(rows);
  const meta = {page};

  return {
    data,
    meta
  }
}

//crea un nuevo cliente
async function createCliente(cliente){
    const result = await db.query(
      `INSERT INTO CLIENTES(NOMBRES,APELLIDOS,EMAIL,CONTRASEÑA,TELEFONO,FRACCIONAMIENTO,NUMERO_CASA,CP,CALLE)
      values
      ("${cliente.nombres}","${cliente.apellidos}","${cliente.email}","${cliente.contraseña}",${cliente.telefono},"${cliente.fraccionamiento}",${cliente.numero_casa},${cliente.cp},"${cliente.calle}")`
    );
  
    let message = 'Error al crear Usuario';
  
    if (result.affectedRows) {
      message = 'El usuario se creo correctamente!';
    }
  
    return {message};
}

//actualiza todos los datos de un cliente por id
async function updateCliente(id, cliente){
    const result = await db.query(
      `UPDATE CLIENTES SET 
      NOMBRES="${cliente.nombres}",APELLIDOS="${cliente.apellidos}",EMAIL="${cliente.email}",
      CONTRASEÑA="${cliente.contraseña}",TELEFONO=${cliente.telefono},FRACCIONAMIENTO="${cliente.fraccionamiento}",
      NUMERO_CASA=${cliente.numero_casa},CP=${cliente.cp},CALLE="${cliente.calle}"
      WHERE id=${id}` 
    );
  
    let message = 'Error al actualizar usuario';
  
    if (result.affectedRows) {
      message = 'Usuario actualizado correctamente';
    }
  
    return {message};
}

//Ejecuta query delete por id
async function deleteCliente(id){
    const result = await db.query(
      `DELETE FROM CLIENTES WHERE id=${id}`
    );  
    let message = 'Error al borrar cliente';  
    if (result.affectedRows) {
      message = 'Cliente borrado correctamente';
    }
  
    return {message};
  }

module.exports = {
  getClientes,
  createCliente,
  updateCliente,
  deleteCliente,
}