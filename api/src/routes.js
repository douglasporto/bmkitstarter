import { Router } from 'express';
import UserController from './app/controllers/UserController';
import UserMiddlewares from './app/middlewares/UserMiddlewares';

const routes = new Router();

// routes.get('/', (req, res) => res.json({ message: 'Welcome to Omni CLI' }));

routes.post('/register', UserMiddlewares, UserController.store);
routes.get('/users', UserController.index);

export default routes;
