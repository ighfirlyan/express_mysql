const dbPool = require('../config/database')

// READ - GET
const getAllUsers = ()=>{

    const SQLQuery = 'SELECT * FROM users';

    return dbPool.execute(SQLQuery);
}

// CREATE - POST
const createNewUser = (body)=>{
    const SQLQuery = `  INSERT INTO users (name, email, address)
                        VALUES ('${body.name}','${body.email}', '${body.address}')`;

    return dbPool.execute(SQLQuery);
}

// UPDATE - PATCH
const updateUser = (body, id) =>{
    const SQLQuery = `  UPDATE users 
                        SET name = '${body.name}', email = '${body.email}', address = '${body.address}' 
                        WHERE id = ${id}`;

    return dbPool.execute(SQLQuery);
}


// DELETE - DELETE
const deleteUser = (id)=>{
    const SQLQuery = `DELETE FROM users WHERE id=${id}`

    return dbPool.execute(SQLQuery);
}

module.exports = {
    getAllUsers,
    createNewUser,
    updateUser,
    deleteUser
}