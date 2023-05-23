const UsersModel = require('../models/users')

const getAllUsers = async (req, res)=>{
    try {
        const [data] = await UsersModel.getAllUsers();

        res.status(200).json({
            message: 'GET all users success',
            data : data
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: Error
        })
    }
    
}

const createNewUser = async (req, res)=>{
    // console.log(req.body);
    const {body} = req;

    if(!body.email || !body.name || !body.address){
        return res.status(400).json({
            message: 'Anda mengirimkan data yang salah',
            data: null
        })
    }
    try {
        await UsersModel.createNewUser(body);
        res.status(201).json({
            message: 'CREATE new user success',
            data: body
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: Error,
        })
    }
    
}

const updateUser = async (req, res)=>{
    const{id} = req.params;
    const{body} = req;
    // console.log('id: ', id);

    try {
        await UsersModel.updateUser (body, id);
        res.json({
            message: 'UPDATE user success',
            data: {
                id: id,
                ...body
            },
        })    
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: Error,
        })
    }
    
}

const deleteUser = async (req, res)=>{
    const {id} = req.params;

    try {
        await UsersModel.deleteUser(id);
        res.json({
            message: 'DELETE user success',
            data: null
        })        
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: Error,
        })
    }
    
}

module.exports = {
    getAllUsers,
    createNewUser,
    updateUser,
    deleteUser,
}