import { Router } from "express";
import { ClientController } from "./controller/ClientController";

const routes = Router()


routes.post('/api/v1/client', new ClientController().create)
routes.get('/api/v1/client', new ClientController().listAll)
routes.get('/api/v1/client/:id', new ClientController().listOne)
routes.put('/api/v1/client/:id', new ClientController().update)
routes.delete('/api/v1/client/:id', new ClientController().delete)

export default routes