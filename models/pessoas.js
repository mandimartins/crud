const findAll = connection => {
  return new Promise((resolve, reject) => {
    const execute = async () => {
      const resultado = await connection("pessoas").select("*");
      resolve(resultado);
    };
    execute().catch(error => {
      console.log(error)
      reject(error)
    });
  });
};

const findById = (connection, id) => {
  return new Promise((resolve, reject) => {
    const execute = async () =>{
     const resultado = await connection('pessoas').where('id',id)
     resolve(resultado[0])
    }

    execute()
    .catch(error=>{
      console.log(error)
      reject(error)
    })
  });
};

const deleteOne = (connection, id) => {
  return new Promise((resolve, reject) => {
    const execute = async ()=>{
      const resultado = connection('pessoas').where({id:id}).delete()
      resolve(resultado)
    }

    execute()
    .catch(error =>{
      console.log(error)
      reject(error)
    })
  });
};

const create = (connection, data) => {
  return new Promise((resolve, reject) => {

    const execute = async ()=>{
      await connection('pessoas').insert({
        nome: data.nome,
        nascimento: data.nascimento,
        cargo:data.cargo
      })
      resolve()
    }

    execute()
    .catch(error=>{
      console.log(error)
      reject(error)
    })
    
  });
};

const update = (connection, id, data) => {
  return new Promise((resolve, reject) => {

    const execute = async () =>{
      await connection('pessoas').where({id:id}).update({
        nome: data.nome,
        nascimento:data.nascimento,
        cargo: data.cargo
      })
      resolve()
    }

    execute()
    .catch(error =>{
      console.log(error)
      reject(error)
    })
  });
};

module.exports = {
  findAll,
  findById,
  deleteOne,
  create,
  update
};
