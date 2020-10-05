import express from 'express';
import ImportController from '../controllers/ImportController';

const routes = express.Router();

const importController = new ImportController();

routes.get('/import', importController.index);
routes.post('/import', importController.create);

routes.get('/testes', (req, res) => {
    return res.send('OK');
});

export default routes;
