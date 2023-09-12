import { Request, Response } from "express";
import { clientRepository } from "../repositories/clientRepository";
import * as yup from 'yup';

export class ClientController{
    
    async create(req: Request, res: Response){

        const clientValidation = yup.object({
            fullName: yup.string().nonNullable().required("O nome é obrigatório"),
            birthDate: yup.date().nonNullable().required("A data de nascimento é obrigatória"),
            cpf: yup.string().nonNullable().required("O cpf é obrigatório"),
            maritalStatus: yup.string().nonNullable().required("O estado civil é obrigatório")
        })

        try {
            await clientValidation.validate(req.body)
            
            const newClient = clientRepository.create(req.body, )     
            
            await clientRepository.save(newClient)

            console.log('res:',res)

            return res.status(201).json(newClient)
            
        } catch (error) {
            console.log(error);
            return res.status(500).json(Object(error).message)
        
        }
    }

    async listAll(req: Request, res: Response){
        try {
            
            const clientList = await clientRepository.find()     
            
            return res.status(200).json(clientList)
            
        } catch (error) {
            console.log(error);
            return res.status(500).json({message: "Internal Server Error"})
        
        }
    }

    async listOne(req: Request, res: Response){
        try {
            const { id } = req.params;

            const clientList = await clientRepository.findOneBy({id: Number(id)})     
            
            return res.json(clientList)
            
        } catch (error) {
            console.log(error);
            return res.status(500).json({message: "Internal Server Error"})
        
        }
    }

    async update(req: Request, res: Response){

        const { id } = req.params;

        const clientValidation = yup.object({
            fullName: yup.string().nonNullable().required("O nome é obrigatório"),
            birthDate: yup.date().nonNullable().required("A data de nascimento é obrigatória"),
            cpf: yup.string().nonNullable().required("O cpf é obrigatório"),
            maritalStatus: yup.string().nonNullable().required("O estado civil é obrigatório")
        })

        try {

           await clientValidation.validate(req.body)

            const updatedClient = await clientRepository.update(id,req.body)

            return res.status(202).json(updatedClient)
            
        } catch (error) {
            console.log(error);
            return res.status(500).json(Object(error).message)
        
        }
    }

    async delete(req: Request, res: Response){
        try {
            const { id } = req.params;

            const deleteClient = await clientRepository.delete(id)

            return res.status(202).json(deleteClient)
            
        } catch (error) {
            console.log(error);
            return res.status(500).json({message: "Internal Server Error"})
        
        }
    }
}