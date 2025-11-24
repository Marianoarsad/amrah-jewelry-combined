// import Admin from '../models/Admin.js';
import * as AdminRepository from '../Repositories/AdminRepository.js';
export const save = async(req, res) => {
    try{
        console.log(` @Save Controller => req.body : ${JSON.stringify(req.body)}`);
        const {username, password} = req.body;
        console.log(`${username} & ${password}`);
        
        if(await AdminRepository.findByUsername(username)) return res.status(400).send("Duplicate");
        
        const id = await AdminRepository.saveAdmin(username, password); 
        res.status(201).json({message: 'Admin created successfully', id: id});
        }catch (error){
            console.log(error.message);
            res.status(400).json({error: error.message});
        }
}

export const login = async(req, res) => {
    try{
        const {username, password} = req.body;
        const admin = await AdminRepository.findByUsername(username); //returns promise<admin|null>

        if(!admin) return res.status(400).json({error: `Incorrect credentials`});
        const authorized = await admin.verifyPassword(password);

        if(!authorized) return res.status(400).json({error:"Incorrect credentials"});
        res.status(202).json({message: "User accepted"});
        // next();
    }catch (error){
        res.status(400).json({error: error.message});
    }
}