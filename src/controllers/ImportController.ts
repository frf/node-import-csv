import {Request, Response} from 'express';
import db from '../database/connection';

export default class ImportController {
    async index(request: Request, response: Response) {
        return response.json(['hello']);
    }

    async create (request: Request, response: Response) { 
        const {
            name,
            avatar,
            whatsapp,
            bio,
            lang,
            cost
        } = request.body;
    
        const trx = await db.transaction();
    
        try {
            const insertedUsersIds = await trx('users').insert({
                name,
                avatar,
                whatsapp,
                bio
            });
        
            const user_id = insertedUsersIds[0];
        
            const insertedClassesIds = await trx('skills').insert({
                lang,
                cost,
                user_id
            });
    
            await trx.commit();
    
            return response.status(201).send();
    
        } catch (err) {
    
            await trx.rollback();
            console.log(err);
            return response.status(400).json({
                error: 'Unexpected error while creating new class'
            });
        }
    }
}